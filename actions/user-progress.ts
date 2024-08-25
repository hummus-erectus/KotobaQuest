"use server"

import { auth, currentUser } from "@clerk/nextjs/server"
import { and, eq } from "drizzle-orm"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

import db from "@/db/drizzle"
import { MAXIMUM_HEARTS, POINTS_TO_REFILL } from "@/db/constants"
import { getCourseById, getUserProgress, getUserSubscription, getLesson } from "@/db/queries"
import { challengeProgress, challenges, userProgress } from "@/db/schema"
import { usePracticeModal } from "@/store/use-practice-modal"

export const upsertUserProgress = async (courseId: number) => {
  const { userId } = await auth()
  const user = await currentUser()

  if (!userId || !user) {
    throw new Error("Unauthorized")
  }

  const course = await getCourseById(courseId)

  if (!course) {
    throw new Error("Course not found")
  }

  if (!course.units.length || !course.units[0].lessons.length) {
    throw new Error("course is empty")
  }

  const existingUserProgress = await getUserProgress()

  if (existingUserProgress) {
    await db.update(userProgress).set({
      activeCourseId: courseId,
      userName: user.firstName || "User",
      userImageSrc: user.imageUrl || "/mascot.svg",
    })

    revalidatePath("/courses")
    revalidatePath("/learn")
    redirect("/learn")
  }

  await db.insert(userProgress).values({
    userId,
    activeCourseId: courseId,
    userName: user.firstName || "User",
    userImageSrc: user.imageUrl || "/mascot.svg",
  })

  revalidatePath("/courses")
  revalidatePath("/learn")
  redirect("/learn")
}

export const reduceHearts = async (challengeId: number) => {
  const { userId } = await auth()

  if (!userId) {
    throw new Error("Unauthorized")
  }

  const currentUserProgress = await getUserProgress()
  const userSubscription = await getUserSubscription()
  const currentLesson = await getLesson()

  const challenge = await db.query.challenges.findFirst({
    where: eq(challenges.id, challengeId)
  })

  if(!challenge) {
    throw new Error("Challenge not found")
  }

  if(!currentLesson) {
    throw new Error("Lesson not found")
  }

  const lessonId = challenge.lessonId

  const existingChallengeProgress = await db.query.challengeProgress.findFirst({
    where: and(
      eq(challengeProgress.userId, userId),
      eq(challengeProgress.challengeId, challengeId),
    )
  })

  const isPractice = !!existingChallengeProgress

  if (isPractice) {
    return { error: "practice" }
  }

  if (!currentUserProgress) {
    throw new Error("User progress not found")
  }

  if (userSubscription?.isActive) {
    return { error: "subscription"}
  }

  if (currentLesson.order===1){
    return { error: "first lesson"}
  }

  if (currentUserProgress.hearts === 0) {
    return { error: "hearts"}
  }

  await db.update(userProgress).set({
    hearts: Math.max(currentUserProgress.hearts - 1, 0),
  }).where(eq(userProgress.userId, userId))

  revalidatePath("/shop")
  revalidatePath("/learn")
  revalidatePath("/quests")
  revalidatePath("/leaderboard")
  revalidatePath(`/lesson/${lessonId}`)
}

export const refillHearts = async () => {
  const currentUserProgress = await getUserProgress()

  if (!currentUserProgress) {
    throw new Error("User progress not found")
  }

  if (currentUserProgress.hearts === MAXIMUM_HEARTS) {
    throw new Error("Hearts are already full")
  }

  if (currentUserProgress.points < POINTS_TO_REFILL) {
    throw new Error("Not enough points")
  }

  await db.update(userProgress).set({
    hearts: MAXIMUM_HEARTS,
    points: currentUserProgress.points - POINTS_TO_REFILL,
  }).where(eq(userProgress.userId, currentUserProgress.userId))

  revalidatePath("/shop")
  revalidatePath("/learn")
  revalidatePath("/quests")
  revalidatePath("/leaderboard")
}