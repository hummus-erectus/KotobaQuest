import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"
import { SidebarItem } from "@/components/sidebar-item"
import { Loader } from "lucide-react"
import { ClerkLoaded, ClerkLoading, UserButton } from "@clerk/nextjs"

type Props = {
  className?: string;
}

export const Sidebar = ({ className }: Props) => {
  return (
    <div className={cn("h-full lg:w-[290px] lg:fixed left-0 top-0 px-4 border-r-2 flex-col font-pressStart2P", className,)}>
      <Link href="/learn" className="hover:no-underline">
        <div className="pt-8 pl-4 pb-7 flex items-center gap-x-3">
          <Image src="/starry.png" height={40} width={40} alt="Mascot"/>
          <h1 className="text-xl font-extrabold text-nesBlue tracking-wide font-dotgothic16">ことばクエスト</h1>
        </div>
      </Link>
      <div className="flex flex-col gap-y-2 flex-1">
        <SidebarItem
          label="learn"
          href="/learn"
          iconSrc="/learn.svg"
        />
        <SidebarItem
          label="leaderboard"
          href="/leaderboard"
          iconSrc="/leaderboard.svg"
        />
        <SidebarItem
          label="quests"
          href="/quests"
          iconSrc="/quests.svg"
        />
        <SidebarItem
          label="shop"
          href="/shop"
          iconSrc="/shop.svg"
        />
      </div>
      <div className="p-4">
        <ClerkLoading>
          <Loader className="h-5 w-5 text-muted-foreground animate-spin" />
        </ClerkLoading>
        <ClerkLoaded>
          <UserButton />
        </ClerkLoaded>
      </div>
    </div>
  )
}