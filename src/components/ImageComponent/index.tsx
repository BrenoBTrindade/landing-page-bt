import Image from "next/image"

type Props = {
    src: string | any
    alt: string | any
  }
 
 export default function ImageComponent({src, alt}:Props) {
    return (
       <Image src={src} alt={alt} className="w-2/4 h-[550px] rounded-xl ml-9 mt-8 mb-8" width={500} height={500} />
    )
}

