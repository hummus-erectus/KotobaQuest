import { ClerkLoaded, ClerkLoading, SignedIn, SignedOut, SignUpButton, SignInButton } from "@clerk/nextjs"
import { Loader } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div className="max-w-[988px] mx-auto flex-1 w-full flex flex-col lg:flex-row items-center justify-center p-4 gap-2 font-dotgothic16" >
      <div className="relative w-[240px] h-[240px] lg:w-[424px] lg:h-[424px] mb-8 lg:mb-0">
        <Image src="/hero.svg" fill alt="Hero"/>
      </div>
      <div className="flex flex-col items-center gap-y-8">
        <h1 className="text-xl lg:text-3xl font-bold text-neutral-600 max-w-[480px] text-center">
        冒険の旅へ出発しよう&#65281;<span className="break-keep text-nesBlue">ことばクエスト</span>と共に新しい言語を学び、練習し、マスターしよう&#65281;
        </h1>
        <div className="flex flex-col items-center gap-y-3 max-w-[330px] w-full">
          <ClerkLoading>
            <Loader className="h-5 w-5 text-muted-foreground animate-spin" />
          </ClerkLoading>
          <ClerkLoaded>
            <SignedOut>
              <SignUpButton
                mode="modal"
                forceRedirectUrl="/learn"
                signInForceRedirectUrl="/learn"
              >
              <button type="button" className="nes-btn w-80 is-primary font-bold font-dotgothic16">
                冒険を始める
              </button>
              </SignUpButton>
              <SignInButton
                mode="modal"
                forceRedirectUrl="/learn"
                signUpForceRedirectUrl="/learn"
              >
                <Button size="lg" variant="ghost" className="w-full">
                  すでにアカウントをお持ちです
                </Button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <Link href="/learn">
                <button type="button" className="nes-btn w-80 is-primary font-bold font-dotgothic16">
                    冒険を続ける
                </button>
              </Link>
            </SignedIn>
          </ClerkLoaded>
        </div>
      </div>
    </div>
  )
}
