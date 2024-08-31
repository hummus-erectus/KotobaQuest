"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import { challengeOptions, challenges } from "@/db/schema"

import { Card } from "./card"

type Props = {
  options: typeof challengeOptions.$inferSelect[]
  onSelect: (id: number) => void
  status: "correct" | "wrong" | "none"
  selectedOption?: number
  disabled?: boolean
  type: typeof challenges.$inferSelect["type"]
}

const shuffleArray = (array: any[]) => {
  const shuffledArray = [...array]
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]]
  }
  return shuffledArray
}

export const Challenge = ({
  options,
  onSelect,
  status,
  selectedOption,
  disabled,
  type,
}: Props) => {
  const [shuffledOptions, setShuffledOptions] = useState<typeof options>([]);

  useEffect(() => {
    setShuffledOptions(shuffleArray(options));
  }, [options]);

  return (
    <div className={cn(
      "grid gap-2 sm:gap-4",
      type === "ASSIST" && "grid-cols-1",
      type === "SELECT" && "grid-cols-2"
    )}>
      {shuffledOptions.map((option, i) => (
        <Card
          key={option.id}
          id={option.id}
          text={option.text}
          imageSrc={option.imageSrc}
          shortcut={`${i + 1}`}
          selected={selectedOption === option.id}
          onClick={() => onSelect(option.id)}
          status={status}
          audioSrc={option.audioSrc}
          disabled={disabled}
          type={type}
        />
      ))}
    </div>
  )
}
