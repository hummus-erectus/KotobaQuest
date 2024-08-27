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
import { usePracticeModal } from "@/store/use-practice-modal"

export const PracticeModal = () => {
  const [isClient, setisClient] = useState(false)
  const { isOpen, close } = usePracticeModal()

  useEffect(() => setisClient(true), [])

  if (!isClient) {
    return null
  }

  return (
    <Dialog open={isOpen} onOpenChange={close}>
      <DialogContent>
        <DialogHeader>
          <div className="flex items-center w-full justify-center">
            <Image
              src="/heart.png"
              alt="Heart"
              height={120}
              width={120}
            />
          </div>
          <DialogTitle className="text-center font-bold text-2xl font-dotgothic16">
            練習レッスン
          </DialogTitle>
          <DialogDescription className="text-center text-base font-dotgothic16">
            練習レッスンを使ってハートとポイントを取り戻そう。練習レッスンではハートやポイントを失うことはありません。
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="mb-4">
          <div className="flex flex-col gap-y-4 w-full font-dotgothic16">
            <button
              type="button"
              className="nes-btn is-primary"
              onClick={close}
            >
              <span className="font-dotgothic16 font-bold">了解！</span>
            </button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}