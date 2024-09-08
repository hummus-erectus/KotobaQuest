"use client"

import { toast } from "sonner"
import Image from "next/image"
import Confetti from "react-confetti"
import { useState, useTransition } from "react"
import { useAudio, useWindowSize, useMount } from "react-use"
import { useRouter } from "next/navigation"

import { challengeOptions, challenges, userSubscription } from "@/db/schema"

import { upsertChallengeProgress } from "@/actions/challenge-progress"
import { reduceHearts } from "@/actions/user-progress"

import { useHeartsModal } from "@/store/use-hearts-modal"
import { usePracticeModal } from "@/store/use-practice-modal"
import { useFirstModal } from "@/store/use-first-modal"

import { Header } from "./header"
import { Footer } from "./footer"
import { Challenge } from "./challenge"
import { QuestionBubble } from "./question-bubble"
import { ResultCard } from "./result-card"
import { MAXIMUM_HEARTS } from "@/db/constants"

type Props = {
  initialPercentage: number
  initialHearts: number
  initialLessonId: number
  initialLessonChallenges: (typeof challenges.$inferSelect & {
    completed: boolean
    challengeOptions: {
      id: number;
      option: {
        text: string;
        imageSrc?: string;
        audioSrc?: string;
      };
      correct: boolean;
    }[];
  })[]
  userSubscription: typeof userSubscription.$inferSelect & {
    isActive: boolean
  } | null
}

export const Quiz = ({
  initialPercentage,
  initialHearts,
  initialLessonId,
  initialLessonChallenges,
  userSubscription
}: Props) => {
  const { open: openHeartsModal } = useHeartsModal()
  const { open: openPracticeModal } = usePracticeModal()
  const { open: openFirstModal } = useFirstModal()

  useMount(() => {
    if (initialPercentage === 100) {
      openPracticeModal()
    } else if (initialLessonId === 1 || initialLessonId === 56 || initialLessonId === 111) {
      openFirstModal()
    }
  })

  const { width, height } = useWindowSize()
  const router = useRouter()

  const [finishAudio] = useAudio({ src: "/finish.mp3", autoPlay: true })

  const [correctAudio, _c, correctControls] = useAudio({ src: "/correct.mp3" })
  const [incorrectAudio, _i, incorrectControls] = useAudio({ src: "/incorrect.mp3" })
  const [pending, startTransition] = useTransition()

  const [lessonId, setLessonId] = useState(initialLessonId)
  const [hearts, setHearts] = useState(initialHearts)
  const [percentage, setPercentage] = useState(() => {
    return initialPercentage === 100 ? 0 : initialPercentage
  })
  const [challenges, setChallenges] = useState(initialLessonChallenges)
  const [activeIndex, setActiveIndex] = useState(() => {
    const uncompletedIndex = challenges.findIndex((challenge) => !challenge.completed)
    return uncompletedIndex === -1 ? 0 : uncompletedIndex
  })

  const [selectedOption, setSelectedOption] = useState<number>()
  const [status, setStatus] = useState<"correct" | "wrong" | "none" | "completed" | "loading">("none")

  const challenge = challenges[activeIndex]
  const options = challenge?.challengeOptions ?? []

  const onNext = () => {
    setActiveIndex((current) => current + 1)
  }

  const onSelect = (id: number) => {
    if (status !== "none") return

    setSelectedOption(id)
  }

  const onContinue = () => {
    if (!selectedOption) return

    console.time("onContinue Execution Time")

    if (status === "wrong") {
      setStatus("none")
      setSelectedOption(undefined)
      console.timeEnd("onContinue Execution Time")
      return
    }

    if (status === "correct") {
      onNext()
      setStatus("none")
      setSelectedOption(undefined)
      console.timeEnd("onContinue Execution Time")
      return
    }

    const correctOption = options.find((option) => option.correct)

    if (!correctOption) {
      console.timeEnd("onContinue Execution Time")
      return
    }

    setStatus("loading")

    if (correctOption.id === selectedOption) {
      startTransition(() => {
        console.time("upsertChallengeProgress Execution Time")
        upsertChallengeProgress(challenge.id)
          .then((response) => {
            console.timeEnd("upsertChallengeProgress Execution Time")

            if (response?.error === "hearts") {
              openHeartsModal()
              console.timeEnd("onContinue Execution Time")
              return
            }

            correctControls.play()
            setStatus("correct")
            setPercentage((prev) => prev + 100 / challenges.length)

            if (initialPercentage === 100) {
              setHearts((prev) => Math.min(prev + 1, MAXIMUM_HEARTS))
            }

            console.timeEnd("onContinue Execution Time")
          })
          .catch(() => {
            setStatus("none")
            toast.error("Something went wrong. Please try again.")
            console.timeEnd("onContinue Execution Time")
          })
      })
    } else {
      startTransition(() => {
        console.time("reduceHearts Execution Time")
        reduceHearts(challenge.id)
          .then((response) => {
            console.timeEnd("reduceHearts Execution Time")

            if (response?.error === "hearts") {
              openHeartsModal()
              console.timeEnd("onContinue Execution Time")
              return
            }

            incorrectControls.play()
            setStatus("wrong")

            if (!response?.error) {
              setHearts((prev) => Math.max(prev - 1, 0))
            }

            console.timeEnd("onContinue Execution Time")
          })
          .catch(() => {
            setStatus("none")
            toast.error("Something went wrong. Please try again.")
            console.timeEnd("onContinue Execution Time")
          })
      })
    }
  }

  if (!challenge) {
    return (
      <>
        {finishAudio}
        <Confetti
          width={width}
          height={height}
          recycle={false}
          numberOfPieces={500}
          tweenDuration={10000}
        />
        <div className="flex flex-col gap-y-4 lg:gap-y-8 max-w-lg mx-auto text-center items-center justify-center h-full">
          <Image
            src="/happy.png"
            alt="Finish"
            className="hidden lg:block"
            height={150}
            width={150}
          />
          <Image
            src="/happy.png"
            alt="Finish"
            className="block lg:hidden"
            height={80}
            width={80}
          />
          <h1 className="text-xl lg:text-3xl font-bold font-dotgothic16 text-neutral-700">
            素晴らしい！ <br />レッスンを完了しました。
          </h1>
          <div className="flex items-center gap-x-4 w-full">
            <ResultCard
              variant="points"
              value={challenges.length * 10} //TODO: Good idea to use a constant rather than 10 for how many points are rewarded
            />
            <ResultCard
              variant="hearts"
              value={userSubscription?.isActive ? Infinity : hearts}
            />
          </div>
        </div>
        <Footer
          lessonId={lessonId}
          status="completed"
          onCheck={() => router.push("/learn")}
        />
      </>
    )
  }

  const title = challenge.type === "ASSIST"
    ? "正しい意味を選んでください"
    : challenge.question

  return (
    <>
      {incorrectAudio}
      {correctAudio}
      <Header
        hearts={hearts}
        percentage={percentage}
        hasActiveSubscription={!!userSubscription?.isActive}
      />
      <div className="flex-1">
        <div className="h-full flex items-center justify-center">
          <div className=" lg:min-h-[350px] lg:w-[600px] w-full px-2 sm:px-6 lg:px-0 flex flex-col gap-y-12">
            <h1 className="text-lg lg:text-3xl text-center lg:text-start font-bold font-dotgothic16 text-neutral-700">
              {title}
            </h1>
            <div>
              {challenge.type === "ASSIST" && (
                <QuestionBubble question={challenge.question} />
              )}
              <Challenge
                options={options}
                onSelect={onSelect}
                status="none"
                selectedOption={selectedOption}
                disabled={status === "loading" || pending}
                type={challenge.type}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer
        disabled={status === "loading" || pending || !selectedOption}
        status={status}
        onCheck={onContinue}
        lessonId={lessonId}
      />
    </>
  )
}
