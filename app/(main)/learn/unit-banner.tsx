import { NotebookText } from "lucide-react"
import Link from "next/link"

type Props = {
  title: string;
  description: string;
  isActive: boolean;
  isReached: boolean;
}

export const UnitBanner = ({
  title,
  description,
  isActive,
  isReached
}: Props) => {
  return(
    <div className={`nes-container w-full flex items-center justify-between font-dotgothic16 ${isReached ? "bg-nesBlue text-white": "bg-nesGrey text-neutral-700"}`}>
      <div className="space-y-2.5">
        <h3 className="text-2xl font-bold">
          {title}
        </h3>
        <p className="text-lg">
          {description}
        </p>
      </div>
      {isActive && ( // Use the isActive prop to conditionally render the link
        <Link href="/lesson" className="hidden lg:flex">
          <button type="button" className=" min-w-32 nes-btn is-primary font-bold">
            <NotebookText className="mr-2 inline"/>
            続ける
          </button>
        </Link>
      )}

    </div>
  )
}