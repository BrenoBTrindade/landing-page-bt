import Image from "next/image"

type Props = {
    src: string | any
    alt: string | any
  }
 
 export default function ImageComponent({src, alt}:Props) {
    return (
       <Image src={src} alt={alt} className="w-screen h-2/4 bg-black rounded-xl max-md:w-11/12 max-md:h-11/12 max-2xl:full" width={1224} height={1224} />
    )
}

