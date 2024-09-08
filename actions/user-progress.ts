"use server"

import { auth, currentUser } from "@clerk/nextjs/server"
import { and, eq } from "drizzle-orm"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

import db from "@/db/drizzle"
import { MAXIMUM_HEARTS, POINTS_TO_REFILL } from "@/db/constants"
import { getCourseById, getUserProgress, getUserSubscription, getLesson } from "@/db/queries"
import { challengeProgress, challenges, userProgress } from "@/db/schema"

export const upsertUserProgress = async (courseId: number) => {
  console.time("upsertUserProgress")

  const { userId } = await auth()
  const user = await currentUser()

  if (!userId || !user) {
    throw new Error("Unauthorized")
  }

  console.time("getCourseById")
  const course = await getCourseById(courseId)
  console.timeEnd("getCourseById")

  if (!course) {
    throw new Error("Course not found")
  }

  if (!course.units.length || !course.units[0].lessons.length) {
    throw new Error("course is empty")
  }

  console.time("getUserProgress")
  const existingUserProgress = await getUserProgress()
  console.timeEnd("getUserProgress")

  if (existingUserProgress) {
    console.time("updateUserProgress")
    await db.update(userProgress).set({
      activeCourseId: courseId,
      userName: user.firstName || "User",
      userImageSrc: user.imageUrl || "/starry.png",
    }).where(eq(userProgress.userId, userId))
    console.timeEnd("updateUserProgress")

    console.time("revalidatePaths")
    await Promise.all([
      revalidatePath("/courses"),
      revalidatePath("/learn"),
    ])
    console.timeEnd("revalidatePaths")

    console.timeEnd("upsertUserProgress")
    redirect("/learn")
  }

  console.time("insertUserProgress")
  await db.insert(userProgress).values({
    userId,
    activeCourseId: courseId,
    userName: user.firstName || "User",
    userImageSrc: user.imageUrl || "/starry.png",
  })
  console.timeEnd("insertUserProgress")

  console.time("revalidatePathsAfterInsert")
  await Promise.all([
    revalidatePath("/courses"),
    revalidatePath("/learn"),
  ])
  console.timeEnd("revalidatePathsAfterInsert")

  console.timeEnd("upsertUserProgress")
  redirect("/learn")
}

export const reduceHearts = async (challengeId: number) => {
  console.time("reduceHearts")

  const { userId } = await auth()

  if (!userId) {
    throw new Error("Unauthorized")
  }

  const [
    existingChallengeProgress,
    currentUserProgress,
    currentLesson,
    challenge
  ] = await Promise.all([
    db.query.challengeProgress.findFirst({
      where: and(
        eq(challengeProgress.userId, userId),
        eq(challengeProgress.challengeId, challengeId),
      )
    }),
    getUserProgress(),
    getLesson(),
    db.query.challenges.findFirst({ where: eq(challenges.id, challengeId) })
  ])

  if (existingChallengeProgress) {
    console.timeEnd("reduceHearts")
    return { error: "practice" }
  }

  if (!challenge || !currentLesson || !currentUserProgress) {
    console.timeEnd("reduceHearts")
    throw new Error("Required data not found")
  }

  if (currentUserProgress.hearts === 0) {
    console.timeEnd("reduceHearts")
    return { error: "hearts" }
  }

  if (currentLesson.isFirstLesson) {
    console.timeEnd("reduceHearts")
    return { error: "first lesson" }
  }

  await db.update(userProgress)
    .set({
      hearts: Math.max(currentUserProgress.hearts - 1, 0),
    })
    .where(eq(userProgress.userId, userId))

  await Promise.all([
    revalidatePath("/shop"),
    revalidatePath(`/lesson/${challenge.lessonId}`),
  ])

  console.timeEnd("reduceHearts")
}

export const refillHearts = async () => {
  console.time("refillHearts")

  console.time("getUserProgress")
  const currentUserProgress = await getUserProgress()
  console.timeEnd("getUserProgress")

  if (!currentUserProgress) {
    throw new Error("User progress not found")
  }

  if (currentUserProgress.hearts === MAXIMUM_HEARTS) {
    throw new Error("Hearts are already full")
  }

  if (currentUserProgress.points < POINTS_TO_REFILL) {
    throw new Error("Not enough points")
  }

  console.time("updateUserProgressHeartsAndPoints")
  await db.update(userProgress).set({
    hearts: MAXIMUM_HEARTS,
    points: currentUserProgress.points - POINTS_TO_REFILL,
  }).where(eq(userProgress.userId, currentUserProgress.userId))
  console.timeEnd("updateUserProgressHeartsAndPoints")

  console.time("revalidatePaths")
  await Promise.all([
    revalidatePath("/shop"),
    revalidatePath("/learn"),
    revalidatePath("/quests"),
    revalidatePath("/leaderboard"),
  ])
  console.timeEnd("revalidatePaths")

  console.timeEnd("refillHearts")
}
