import Image from "next/image"
import { useCallback } from "react"
import { useAudio, useKey } from "react-use"

import { cn } from "@/lib/utils"
import { challenges } from "@/db/schema"

type Props = {
  id: number;
  imageSrc: string | null
  audioSrc: string | null
  text: string
  shortcut: string
  selected?: boolean
  onClick: () => void
  disabled?: boolean
  status?: "correct" | "wrong" | "none"
  type: typeof challenges.$inferSelect["type"]
}

export const Card = ({
  id,
  imageSrc,
  audioSrc,
  text,
  shortcut,
  selected,
  onClick,
  disabled,
  status,
  type,
}: Props) => {
  const [audio, _, controls] = useAudio({ src: audioSrc || "" })

  const handleClick = useCallback(() => {
    if (disabled) return

    controls.play()

    onClick()
  }, [disabled, onClick, controls])

  useKey(shortcut, handleClick, {}, [handleClick])

  return (
    <div
      onClick={handleClick}
      className={cn(
        "nes-container h-full !p-2 sm:!p-4 lg:!p-6 cursor-pointer active:border-b-2 active:border-t-[6px]",
        selected && "bg-sky-100 hover:bg-sky-100",
        selected && status === "correct" && "bg-green-100 hover:bg-green-100",
        selected && status === "wrong" && "bg-rose-100 hover:bg-rose-100",
        disabled && "pointer-events-none hover:bg-white",
        type === "ASSIST" && "lg:p-3 w-full"
      )}
    >
      {audio}
      {imageSrc && (
        <div
          className="relative aspect-square mb:1 sm:mb-4 max-h-[80px] lg:max-h-[150px] w-full"
        >
          <Image
            src={imageSrc}
            height={150}
            width={150}
            alt={text}
            className="object-cover mx-auto"
          />
        </div>
      )}
      <div className={cn(
        "flex items-center justify-between",
        type === "ASSIST" && "flex-row-reverse",
      )}>
        {type === "ASSIST" && <div />}
        <p className={cn(
          "text-neutral-600 text-xs sm:text-sm lg:text-base font-pressStart2P mx-auto my-2",
          selected && "text-sky-500",
          selected && status === "correct" && "text-green-500",
          selected && status === "wrong" && "text-rose-500",
        )}>
          {text}
        </p>
      </div>
    </div>
  )
}
