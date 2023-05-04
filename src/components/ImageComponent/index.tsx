import Image from "next/image"

type Props = {
    src: string | any
    alt: string | any
  }
 
 export default function ImageComponent({src, alt}:Props) {
    return (
       <Image src={src} alt={alt} className="w-screen h-2/4 bg-black rounded-xl max-md:w-72 max-md:h-72" width={1224} height={1224} />
    )
}

