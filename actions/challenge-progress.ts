"use server"

import { auth } from "@clerk/nextjs/server"
import { and, eq } from "drizzle-orm"

import db from "@/db/drizzle"
import { getUserProgress, getUserSubscription } from "@/db/queries"
import { challengeProgress, challenges, lessons, userProgress } from "@/db/schema" // Import 'lessons' schema
import { revalidatePath } from "next/cache"
import { MAXIMUM_HEARTS } from "@/db/constants"

export const upsertChallengeProgress = async (challengeId: number) => {
  console.time("upsertChallengeProgress")

  const { userId } = await auth()

  if (!userId) {
    throw new Error("Unauthorized")
  }

  console.time("fetchData")
  const [currentUserProgress, userSubscription] = await Promise.all([
    getUserProgress(),
    getUserSubscription(),
  ])
  console.timeEnd("fetchData")

  if (!currentUserProgress) {
    throw new Error("User progress not found")
  }

  console.time("findChallenge")
  const challenge = await db.query.challenges.findFirst({
    where: eq(challenges.id, challengeId),
  })
  console.timeEnd("findChallenge")

  if (!challenge) {
    throw new Error("Challenge not found")
  }

  const lessonId = challenge.lessonId

  // NEW CODE: Check if the lesson is the first lesson using and() and eq()
  console.time("checkIsFirstLesson")
  const currentLesson = await db.query.lessons.findFirst({
    where: and(
      eq(lessons.id, lessonId),
      eq(lessons.isFirstLesson, true) // Check if it's the first lesson
    ),
  })
  console.timeEnd("checkIsFirstLesson")

  const isFirstLesson = !!currentLesson // Will be true if the lesson is found and is the first

  console.time("findExistingChallengeProgress")
  const existingChallengeProgress = await db.query.challengeProgress.findFirst({
    where: and(
      eq(challengeProgress.userId, userId),
      eq(challengeProgress.challengeId, challengeId),
    ),
  })
  console.timeEnd("findExistingChallengeProgress")

  const isPractice = !!existingChallengeProgress

  // Use the isFirstLesson flag directly instead of fetching all lessons
  if (
    currentUserProgress.hearts === 0 &&
    !isFirstLesson && // Check if it's not the first lesson
    !isPractice &&
    !userSubscription?.isActive
  ) {
    return { error: "hearts" }
  }

  if (isPractice) {
    console.time("updateExistingChallengeProgress")
    await db
      .update(challengeProgress)
      .set({
        completed: true,
      })
      .where(eq(challengeProgress.id, existingChallengeProgress.id))
    console.timeEnd("updateExistingChallengeProgress")

    console.time("updateUserProgress")
    await db.update(userProgress).set({
      hearts: Math.min(currentUserProgress.hearts + 1, MAXIMUM_HEARTS),
      points: currentUserProgress.points + 10,
    }).where(eq(userProgress.userId, userId))
    console.timeEnd("updateUserProgress")

    console.time("revalidatePaths")
    revalidatePath("/learn")
    revalidatePath("/lesson")
    revalidatePath("/quests")
    revalidatePath("/leaderboard")
    revalidatePath(`/lesson/${lessonId}`)
    console.timeEnd("revalidatePaths")
    console.timeEnd("upsertChallengeProgress")
    return
  }

  console.time("parallelInsertAndUpdate")

  await Promise.all([
    db.insert(challengeProgress).values({
      challengeId,
      userId,
      completed: true,
    }),

    db.update(userProgress)
      .set({
        points: currentUserProgress.points + 10,
      })
      .where(eq(userProgress.userId, userId)),
  ])

  console.timeEnd("parallelInsertAndUpdate")

  console.time("revalidatePathsAfterInsert")

  await Promise.all([
    revalidatePath("/learn"),
    revalidatePath("/lesson"),
    revalidatePath("/quests"),
    revalidatePath("/leaderboard"),
    revalidatePath(`/lesson/${lessonId}`),
  ])

  console.timeEnd("revalidatePathsAfterInsert")

  console.timeEnd("upsertChallengeProgress")
}
