import { redirect } from "next/navigation"

import { getLesson, getUserProgress, getUserSubscription } from "@/db/queries"
import { Quiz } from "../quiz"
import { userSubscription } from "@/db/schema"

type Props = {
  params: {
    lessonId: number
  }
}

const LessonIdPage = async ({
  params,
}: Props) => {
  const lessonData = getLesson(params.lessonId)
  const userProgressData = getUserProgress()
  const userSubscriptionData = getUserSubscription()

  const [
    lesson,
    userProgress,
    userSubscription,
  ] = await Promise.all([
    lessonData,
    userProgressData,
    userSubscriptionData,
  ])

  if (!lesson || !userProgress) {
    redirect("/learn")
  }

  const initialPercentage = lesson.challenges
    .filter((challenge) => challenge.completed)
    .length / lesson.challenges.length * 100

    const lessonChallenges = lesson.challenges.map((challenge) => ({
      ...challenge,
      challengeOptions: challenge.challengeOptions.map((option) => ({
        ...option,
        option: {
          ...option.option,
          imageSrc: option.option.imageSrc ?? undefined,
          audioSrc: option.option.audioSrc ?? undefined,
        },
      })),
    }));

  return (
    <Quiz
      initialLessonId={lesson.id}
      initialLessonChallenges={lessonChallenges}
      initialHearts={userProgress.hearts}
      initialPercentage={initialPercentage}
      userSubscription={userSubscription}
    />
  )
}

export default LessonIdPage