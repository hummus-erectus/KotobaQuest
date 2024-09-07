import { useKey, useMedia } from "react-use"
import { CheckCircle, Loader, XCircle } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

type Props = {
  onCheck: () => void
  status: "correct" | "wrong" | "none" | "completed" | "loading"
  disabled?: boolean
  lessonId?: number
}

export const Footer = ({
  onCheck,
  status,
  disabled,
  lessonId,
}: Props) => {
  useKey("Enter", onCheck, {}, [onCheck])
  const isMobile = useMedia("(max-width: 1024px")

  return (
    <footer className={cn(
      "lg-h[140px] h-[100px] border-t-4 border-black font-dotgothic16",
      status === "correct" && "bg-green-100",
      status === "wrong" && "bg-rose-100",
    )}>
      <div className="max-w-[1140px] h-full mx-auto flex items-center justify-between px-6 lg:px-10">
        {status === "correct" && (
          <div className="text-green-500 font-bold text-base lg:text:2xl flex items-center">
            <CheckCircle className="h-6 w-6 lg:h-10 lg:w-10 mr-4"/>
            よくできました！
          </div>
        )}
        {status === "wrong" && (
          <div className="text-rose-500 font-bold text-base lg:text:2xl flex items-center">
            <XCircle className="h-6 w-6 lg:h-10 lg:w-10 mr-4"/>
            もう一度挑戦しよう。
          </div>
        )}
        {status === "completed" && (
          <button
          type="button"
          className="nes-btn w-36 text-sm lg:w-44 lg:text-base"
            onClick={() => window.location.href = `/lesson/${lessonId}`}
          >
            もう一度練習する
          </button>
        )}
        <button
          disabled={disabled}
          type="button"
          className={`nes-btn !ml-auto w-36           ${status === "loading" ? "is-disabled" : (status === "wrong" ? "is-error" : "is-success")}`}
          onClick={onCheck}
        >
          {status === "none" && "確認"}
          {status === "correct" && "次へ"}
          {status === "wrong" && "再挑戦"}
          {status === "completed" && "続く"}
          {status === "loading" && <Loader className="h-6 w-6 text-muted-foreground animate-spin mx-auto"/>}
        </button>
      </div>
    </footer>
  )
}