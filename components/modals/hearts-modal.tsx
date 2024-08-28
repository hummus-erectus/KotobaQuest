"use client"

import Image from "next/image"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { useHeartsModal } from "@/store/use-hearts-modal"

export const HeartsModal = () => {
  const router = useRouter()
  const [isClient, setisClient] = useState(false)
  const {isOpen, close} = useHeartsModal()

  useEffect(() => setisClient(true), [])

  const onClick = () => {
    close()
    router.push("/shop")
  }

  if (!isClient) {
    return null
  }

  return (
    <Dialog open={isOpen} onOpenChange={close}>
      <DialogContent>
        <DialogHeader>
          <div className="flex items-center w-full justify-center mb-5">
            <Image
              src="/starry_bad.png"
              alt="Starry bad"
              height={80}
              width={80}
            />
          </div>
          <DialogTitle className="text-center font-bold font-dotgothic16 text-2xl">
            ハートがなくなりました！
          </DialogTitle>
          <DialogDescription className="text-center text-base font-dotgothic16">
            プロ版にアップグレードして無限のハートを手に入れるか、ストアで購入してください。
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="mb-4">
          <div className="flex flex-col gap-y-4 w-full">
            <button
              type="button"
              className="nes-btn is-primary"
              onClick={onClick}
            >
              <span className="font-dotgothic16 font-bold">無限のハートを手に入れる</span>
            </button>
            <button
              className="nes-btn"
              onClick={close}
              type="button"
            >
              <span className="font-dotgothic16 font-bold">結構です</span>
            </button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}