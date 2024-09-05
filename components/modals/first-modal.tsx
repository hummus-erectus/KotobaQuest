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
import { useFirstModal } from "@/store/use-first-modal"

export const FirstModal = () => {
  const [isClient, setisClient] = useState(false)
  const { isOpen, close } = useFirstModal()

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
            初レッスン
          </DialogTitle>
          <DialogDescription className="text-center text-white font-dotgothic16 !mb-4">
            この最初のレッスンでは、間違った答えの選択肢でハートを失うことはありません。
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