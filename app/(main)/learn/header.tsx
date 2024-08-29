import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { before } from "node:test";

type Props = {
  title: string;
}

export const Header = ({ title }:Props) => {
  return (
    <div className="sticky top-0 bg-white pb-3 lg:pt-[28px] lg:mt-[-28px] font-dotgothic16 flex items-center justify-between border-b-4 border-black mb-5 text-black lg:z-50">
      <Link href="/courses">
        <Button variant="ghost" size="sm">
          <ArrowLeft className="h-5 w-5 stroke-2 text-black"/>
        </Button>
      </Link>
      <h1 className="font-bold text-lg">
        {title}
      </h1>
      <div />
    </div>
  )
}
