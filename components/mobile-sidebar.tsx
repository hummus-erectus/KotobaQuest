"use client"

import { useState } from "react"
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"
import { Sidebar } from "./sidebar"

export const MobileSidebar = () => {
  const [open, setOpen] = useState(false)

  const closeSidebar = () => setOpen(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger>
        <Menu className="text-white" />
      </SheetTrigger>
      <SheetContent className="p-0 z-[100]" side="left">
        <Sidebar closeSidebar={closeSidebar} />
      </SheetContent>
    </Sheet>
  )
}
