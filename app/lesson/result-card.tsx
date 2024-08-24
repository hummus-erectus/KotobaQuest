import Image from "next/image"

import { cn } from "@/lib/utils"
import { InfinityIcon } from "lucide-react"

type Props = {
  value: number
  variant: "points" | "hearts"
}

export const ResultCard = ({ value, variant }: Props) => {
  const imageSrc = variant === "hearts" ? "/heart.svg" : "/points.svg"

  return (
    <div className={cn(
      "nes-container with-title w-48 font-dotgothic16",
      variant === "points" && "!border-orange-400",
      variant === "hearts" && "!border-rose-500",
    )}>
      <div className={cn(
        "title font-bold",
      )}>
        {variant === "hearts" ? "残りのハート" : "合計XP"}
      </div>
      <div className={cn(
        "items-center flex justify-center p-6 font-bold text-lg",
      )}>
        <Image
          alt="Icon"
          src={imageSrc}
          height={30}
          width={30}
          className="mr-1.5"
        />
        {value === Infinity ? (
          <InfinityIcon className="h-6 w-6 stroke-[3]" />
        ) : (
          value
        )}
      </div>
    </div>
  )
}