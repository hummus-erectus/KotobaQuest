import Image from "next/image"

type Props = {
  question: string
}

export const QuestionBubble = ({ question }: Props) => {
  return (
    <div className="flex items-center gap-x-4 mb-6">
      <Image
        src="/starry.png"
        alt="Mascot"
        height={90}
        width={90}
        className="hidden lg:block"
      />
      <Image
        src="/starry.png"
        alt="Mascot"
        height={60}
        width={60}
        className="block lg:hidden"
      />

      <div className="nes-balloon from-left text-sm font-dotgothic16 font-bold lg:text-base">
        {question}
      </div>
    </div>
  )
}