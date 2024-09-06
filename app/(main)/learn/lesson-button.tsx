"use client"

import Link from "next/link"

import { Check, Crown, Star } from "lucide-react"

import { cn } from "@/lib/utils"

import "react-circular-progressbar/dist/styles.css"

type Props = {
  id: number;
  title: string;
  index: number;
  totalCount: number;
  locked?: boolean;
  current?: boolean;
  percentage: number;
}

export const LessonButton = ({
  id,
  title,
  index,
  totalCount,
  locked,
  current,
  percentage,
}: Props) => {
  const cycleLength = 8
  const cycleIndex = index % cycleLength

  let indentationLevel

  if (cycleIndex <=2) {
    indentationLevel = cycleIndex
  } else if (cycleIndex <= 4) {
    indentationLevel = 4 - cycleIndex
  } else if (cycleIndex <= 6) {
    indentationLevel = 4 - cycleIndex
  } else {
    indentationLevel = cycleIndex - 8
  }

  const rightPosition = indentationLevel * 40

  const isFirst = index === 0;
  const isLast = index === totalCount
  const isCompleted = !current && !locked

  const Icon = (isCompleted || isFirst && percentage === 100) ? Check : isLast ? Crown : Star

  const href = isCompleted ? `/lesson/${id}` : "/lesson"

  return(
    <Link
      href={href}
      aria-disabled={locked}
      style={{ pointerEvents: locked? "none" : "auto" }}
    >
      <div
        className="relative"
        style={{
          right: `${rightPosition}px`,
          marginTop: isFirst && !isCompleted ? 60 : 24,
        }}
      >
        {current && percentage !== 100 ? (
          <div className=" relative">
            <div className="!absolute w-[123px] text-center -top-10 -left-4 px-3 py-2.5 border-2 nes-container is-rounded is-dark font-bold animate-bounce text-nesBlue bg-white tracking-wide z-10">
              スタート
              <div
                className="absolute left-1/2 -bottom-2 w-0 h-0 border-x-8 border-x-transparent border-t-8 transform -translate-x-1/2 border-t-black"
              />
            </div>
            <div className="flex flex-col items-center md:flex-row">
              <button
                className={cn(
                  "nes-btn !flex !flex-col !items-center",
                  locked ? "is-disabled" : "is-warning",
                  "h-[90px] w-[90px]"
                )}
                disabled={locked}
              >
                <Icon
                  className={cn(
                    "h-10 w-10",
                     "fill-primary-foreground text-primary-foreground"
                  )}
                />
                <progress
                  className="nes-progress is-success mt-2 w-full !h-4"
                  value={percentage}
                  max="100"
                />
              </button>
              <div className="flex items-center font-bold font-dotgothic16 m-4">
                <div className="nes-badge">
                  <span className="is-primary">
                    {title}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center md:flex-row">
            <button
              className={cn(
                "nes-btn !flex !items-center !justify-center",
                locked ? "is-disabled" : "is-warning",
                "h-[90px] w-[90px]"
              )}
              disabled={locked}
            >
              <Icon
                className={cn(
                  "h-10 w-10",
                  locked
                    ? "fill-neutral-400 text-neutral-400 stroke-neutral-400"
                    : "fill-primary-foreground text-primary-foreground ",
                  (isCompleted || isFirst && percentage === 100) && "fill-none stroke-[4]"
                )}
              />
            </button>
            <div className="flex items-center font-bold font-dotgothic16 m-4">
              <div className="nes-badge">
                <span className="is-success">
                  {title}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </Link>
  )
}