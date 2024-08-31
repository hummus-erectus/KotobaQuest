"use client"

import { toast } from "sonner"
import Image from "next/image"
import { startTransition, useTransition } from "react"

import { Button } from "@/components/ui/button"
import { refillHearts } from "@/actions/user-progress"
import { createStripeUrl } from "@/actions/user-subscription"
import { MAXIMUM_HEARTS, POINTS_TO_REFILL } from "@/db/constants"

type Props = {
  hearts: number
  points: number
  hasActiveSubscription: boolean
}

export const Items = ({
  hearts,
  points,
  hasActiveSubscription
}: Props) => {
  const [pending, startTransition] = useTransition()

  const onRefillHearts = () => {
    if (pending || hearts === MAXIMUM_HEARTS || points < POINTS_TO_REFILL) {
      return
    }

    startTransition(() => {
      refillHearts()
        .catch(() => toast.error("Something went wrong"))
    })
  }

  const onUpgrade = () => {
    startTransition(() => {
      createStripeUrl()
        .then((response) => {
          if(response.data) {
            window.location.href = response.data
          }
        })
        .catch(() => toast.error("Something went wrong"))
    })
  }


  return (
    <ul className="w-full font-dotgothic16">
      <div className="flex items-center w-full p-4 gap-x-4 border-t-4 border-black">
        <Image
          src="/heart.png"
          alt="Heart"
          height={60}
          width={60}
        />
        <div className="flex-1">
          <p className="text-black text-base lg:text-xl font-bold">
            ハートを補充
          </p>
        </div>
        <button
        disabled= {(pending
          || hearts === MAXIMUM_HEARTS
          || points < POINTS_TO_REFILL)}
        className={`nes-btn ${(pending
          || hearts === MAXIMUM_HEARTS
          || points < POINTS_TO_REFILL)
          && "is-disabled"}`
        }
          onClick={onRefillHearts}
        >
          {hearts === MAXIMUM_HEARTS
            ? "満タン"
            : (
              <div className="flex ">
                <Image
                  src="/points.png"
                  alt="Points"
                  height={20}
                  width={20}
                />
                <p className="font-pressStart2P m-auto">
                  {POINTS_TO_REFILL}
                </p>
              </div>
            )
          }
        </button>
      </div>
      <div className="flex items-center w-full p-4 pt-8 gap-x-4 border-t-4 border-black">
        <Image
          src="/unlimited.png"
          alt="Unlimited"
          height={60}
          width={60}
        />
        <div className="flex-1">
          <p className="text-black text-base lg:text-xl font-bold">
            無限のハート
          </p>
        </div>
        <button
          className="nes-btn font-bold"
          onClick={onUpgrade}
        >
          {hasActiveSubscription ? "設定" : "アップグレード"}
        </button>
      </div>
    </ul>
  )
}