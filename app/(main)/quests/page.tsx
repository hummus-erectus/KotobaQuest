import { redirect } from "next/navigation"

import { getTopTenUsers, getUserProgress, getUserSubscription } from "@/db/queries"
import { StickyWrapper } from "@/components/sticky-wrapper"
import { FeedWrapper } from "@/components/feed-wrapper"
import { UserProgress } from "@/components/user-progress"
import Image from "next/image"
import { Promo } from "@/components/promo"
import { quests } from "@/db/constants"

const QuestsPage = async () => {
  const userProgressData = getUserProgress()
  const userSubscriptionData = getUserSubscription()

  const [
    userProgress,
    userSubscription,
  ] = await Promise.all([
    userProgressData,
    userSubscriptionData,
  ])

  if(!userProgress || !userProgress.activeCourse) {
    redirect("/courses")
  }

  const isPro = !!userSubscription?.isActive

  return (
    <div className="flex flex-row-reverse gap-[48px] px-6">
      <StickyWrapper>
        <UserProgress
          activeCourse={userProgress.activeCourse}
          hearts={userProgress.hearts}
          points={userProgress.points}
          hasActiveSubscription={isPro}
        />
        {!isPro && (
          <Promo />
        )}
      </StickyWrapper>
      <FeedWrapper>
        <div className="w-full flex flex-col items-center">
          <Image
            src="/quests.svg"
            alt="Quests"
            height={90}
            width={90}
          />
          <h1 className="text-center font-bold text-neutral-800 text-2xl my-6 font-pressStart2P">
            Quests
          </h1>
          <p className="text-black text-center text-lg mb-6 font-dotgothic16 font-bold">
          ポイントを獲得してクエストを完了しよう。
          </p>
          <ul className="w-full">
            {quests.map((quest) => {
              const progress = (userProgress.points / quest.value) * 100

              return(
                <div
                  className="flex items-center w-full p-4 gap-x-4"
                  key={quest.title}
                >
                  <Image
                    src="/points.png"
                    alt="Points"
                    width={60}
                    height={60}
                  />
                  <div className="flex flex-col gap-y-2 w-full">
                    <p className="text-neutral-700 text-xl font-bold font-dotgothic16">
                      {quest.title}
                    </p>
                    <progress value={progress} max="100"className="nes-progress nes-progress-sm is-success"/>
                  </div>
                </div>
              )
            })}
          </ul>
        </div>
      </FeedWrapper>
    </div>
  )
}

export default QuestsPage