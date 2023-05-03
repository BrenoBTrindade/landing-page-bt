import Image from "next/image"
import { Children } from "react"

type Props = {
    src: string | any
    alt: string | any
  }
 
 export default function SkillsIcons({src, alt}:Props) {
    return (
        <div className="flex flex-col justify-around ml-8 text-center text-[11px]">
            <Image src={src} alt={alt} className="w-10 h-[50px] rounded-none  mt-8 mb-2" width={500} height={500} />
            <p>{alt}</p>
        </div>
    )
}
