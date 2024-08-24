import Image from "next/image"
import Link from "next/link"

import { quests } from "@/db/constants"

type Props = {
  points: number
}

export const Quests = ({ points }: Props) => {
  return (
    <div className="nes-container is-rounded p-4 space-y-4 font-dotgothic16">
      <div className="flex items-center justify-between w-full space-y-2">
        <h3 className="font-bold text-lg font-pressStart2P">
          quests
        </h3>
        <Link href="quests">
          <button type="button" className="nes-btn is-normal font-bold">
            すべて見る
          </button>
        </Link>
      </div>
      <ul className="w-full space-y-2">
        {quests.map((quest) => {
          const progress = (points / quest.value) * 100

          return(
            <div
              className="flex items-end w-full pb-4 gap-x-2"
              key={quest.title}
            >
              <Image
                src="/points.svg"
                alt="Points"
                width={40}
                height={40}
              />
              <div className="flex flex-col w-full">
                <p className="text-neutral-700 text-md font-bold">
                  {quest.title}
                </p>
                <progress value={progress} max="100"className="nes-progress nes-progress-sm is-success"/>
              </div>
            </div>
          )
        })}
      </ul>
    </div>
  )
}