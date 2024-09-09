"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

type Props = {
  label: string;
  iconSrc: string;
  href: string;
  closeSidebar?: () => void;
}

export const SidebarItem = ({
  label,
  iconSrc,
  href,
  closeSidebar,
}: Props) => {
  const pathname = usePathname()
  const active = pathname === href

  const handleClick = () => {
    if (closeSidebar) {
      closeSidebar()
    }
  }

  return (
    <Link href={href} onClick={handleClick}>
      <button type="button" className={`nes-btn w-full h-12 ${active ? "is-primary" : "is-normal"}`}>
        <div className="flex flex-start items-center">
          <Image
            src={iconSrc}
            alt={label}
            className="mr-5 inline"
            height={32}
            width={32}
          />
          <span className="overflow-hidden text-ellipsis whitespace-nowrap">{label}</span>
        </div>
      </button>
    </Link>
  );
};
