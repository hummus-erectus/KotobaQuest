import Image from "next/image"
import Link from "next/link"

export const Promo = () => {
  return (
    <div className="nes-container is-rounded p-4 space-y-4 flex flex-col font-dotgothic16">
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
        <Link href="/shop">
          <button type="button" className= "w-full nes-btn is-warning font-bold">
            今すぐアップグレード
          </button>
        </Link>
    </div>
  )
}