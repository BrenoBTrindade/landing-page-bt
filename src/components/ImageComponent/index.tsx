import Image from "next/image"

type Props = {
    src: string | any
    alt: string | any
  }
 
 export default function ImageComponent({src, alt}:Props) {
    return (
       <Image src={src} alt={alt} className="w-2/4 h-2/4 rounded-xl ml-9 mt-8 mb-8 max-md:w-72 max-md:h-72" width={500} height={500} />
    )
}

