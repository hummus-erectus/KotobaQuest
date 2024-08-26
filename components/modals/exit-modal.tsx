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
import { useExitModal } from "@/store/use-exit-modal"

export const ExitModal = () => {
  const router = useRouter()
  const [isClient, setisClient] = useState(false)
  const { isOpen, close} = useExitModal()

  useEffect(() => setisClient(true), [])

  if (!isClient) {
    return null
  }

  return (
    <Dialog open={isOpen} onOpenChange={close}>
      <DialogContent>
        <DialogHeader>
          <div className="flex items-center w-full justify-center mb-5">
            <Image
              src="/mascot_sad.svg"
              alt="Mascot"
              height={80}
              width={80}
            />
          </div>
          <DialogTitle className="text-center font-bold text-2xl font-dotgothic16">
            待って、行かないで！
          </DialogTitle>
          <DialogDescription className="text-center text-base font-dotgothic16">
            レッスンを終了しようとしています。本当に終了しますか？
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="mb-4">
          <div className="flex flex-col gap-y-4 w-full">
            <button
              type="button"
              className="nes-btn is-primary"
              onClick={close}
            >
              <span className="font-dotgothic16 font-bold">学習を続ける</span>
            </button>
            <button
              className="nes-btn"
              type="button"
              onClick={() => {
                close()
                router.push("/learn")
              }}
            >
              <span className="font-dotgothic16 font-bold">セッションを終了する</span>
            </button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}