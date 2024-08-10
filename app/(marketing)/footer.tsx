import { Button } from "@/components/ui/button"
import Image from "next/image"

export const Footer = () => {
  return (
    <footer className="hidden lg:block h-20 w-full border-t-2 border-slate-200 p-2">
      <div className="max-w-scrreen-lg mx-auto flex items-center justify-evenly h-full">
        <Button size="lg" variant="ghost" className="-w">
          <Image
          src="/GB.svg"
          alt="English"
          height={32}
          width={40}
          className="mr-4 rounded-md"
          />
          English
        </Button>
        <Button size="lg" variant="ghost" className="-w">
          <Image
          src="/FR.svg"
          alt="French"
          height={32}
          width={40}
          className="mr-4 rounded-md"
          />
          French
        </Button>
        <Button size="lg" variant="ghost" className="-w">
          <Image
          src="/DE.svg"
          alt="German"
          height={32}
          width={40}
          className="mr-4 rounded-md"
          />
          German
        </Button>
        <Button size="lg" variant="ghost" className="-w">
          <Image
          src="/JP.svg"
          alt="Japanese"
          height={32}
          width={40}
          className="mr-4 rounded-md"
          />
          Japanese
        </Button>
        <Button size="lg" variant="ghost" className="-w">
          <Image
          src="/IL.svg"
          alt="Hebrew"
          height={32}
          width={40}
          className="mr-4 rounded-md"
          />
          Hebrew
        </Button>
      </div>
    </footer>
  )
}
