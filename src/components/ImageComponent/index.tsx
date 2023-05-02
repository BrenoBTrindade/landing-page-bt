import Image from "next/image"

type Props = {
    src: string | any
    alt: string | any
  }
 
 export default function ImageComponent({src, alt}:Props) {
    return (
       <Image src={src} alt={alt} width={500} height={500} />
    )
}

