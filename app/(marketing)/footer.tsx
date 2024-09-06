import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <footer className="hidden lg:block h-20 w-full border-t-2 border-slate-200 p-2">
      <div className="max-w-screen-lg mx-auto flex items-center justify-evenly h-full">
        <p className="font-pressStart2P text-neutral-600 mb-0">&copy; Copyright {currentYear} <Link href="https://www.linkedin.com/in/rob-grayson/">Robert Grayson</Link>. All rights reserved</p>
      </div>
    </footer>
  )
}
