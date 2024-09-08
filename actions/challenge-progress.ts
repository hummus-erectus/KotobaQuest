"use server"

import { auth } from "@clerk/nextjs/server"
import { and, eq } from "drizzle-orm"

import db from "@/db/drizzle"
import { getUserProgress, getUserSubscription, getLesson } from "@/db/queries"
import { challengeProgress, challenges, userProgress } from "@/db/schema"
import { revalidatePath } from "next/cache"
import { MAXIMUM_HEARTS } from "@/db/constants"

export const upsertChallengeProgress = async (challengeId: number) => {
  console.time("upsertChallengeProgress")

  const { userId } = await auth()

  if (!userId) {
    throw new Error("Unauthorized")
  }

  console.time("fetchData")
  const [currentUserProgress, currentLesson, userSubscription] = await Promise.all([
    getUserProgress(),
    getLesson(),
    getUserSubscription(),
  ])
  console.timeEnd("fetchData")

  if (!currentUserProgress) {
    throw new Error("User progress not found")
  }

  if (!currentLesson) {
    throw new Error("Lesson not found")
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

  console.time("findExistingChallengeProgress")
  const existingChallengeProgress = await db.query.challengeProgress.findFirst({
    where: and(
      eq(challengeProgress.userId, userId),
      eq(challengeProgress.challengeId, challengeId),
    ),
  })
  console.timeEnd("findExistingChallengeProgress")

  const isPractice = !!existingChallengeProgress

  if (
    currentUserProgress.hearts === 0 &&
    currentLesson.order !== 1 &&
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

  console.time("insertChallengeProgress")
  await db.insert(challengeProgress).values({
    challengeId,
    userId,
    completed: true,
  })
  console.timeEnd("insertChallengeProgress")

  console.time("updateUserProgressNoHearts")
  await db.update(userProgress).set({
    points: currentUserProgress.points + 10,
  }).where(eq(userProgress.userId, userId))
  console.timeEnd("updateUserProgressNoHearts")

  console.time("revalidatePathsAfterInsert")
  revalidatePath("/learn")
  revalidatePath("/lesson")
  revalidatePath("/quests")
  revalidatePath("/leaderboard")
  revalidatePath(`/lesson/${lessonId}`)
  console.timeEnd("revalidatePathsAfterInsert")

  console.timeEnd("upsertChallengeProgress")
}

