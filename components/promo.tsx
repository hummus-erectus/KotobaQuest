import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export const Promo = () => {
  return (
    <div className="border-2 rounded-xl p-4 space-y-4 font-dotgothic16">
      <div className="space-y-2">
        <div className="flex items-center gap-x-2">
          <Image
            src="/unlimited.svg"
            alt="Pro"
            height={26}
            width={26}
          />
          <h3 className="font-bold text-lg">
            プロにアップグレード
          </h3>
        </div>
        <p className="text-muted-foreground">
          無限のハートと特典をゲット！
        </p>
      </div>
        <Button
          asChild
          variant="super"
          className="w-full"
          size="lg"
        >
          <Link href="/shop">
          今すぐアップグレード
          </Link>
        </Button>
    </div>
  )
}