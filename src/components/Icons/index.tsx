import Image from "next/image";

type Props = {
  size: number;
  src: string;
  alt: string;
};

export default function Icons({ size, src, alt }: Props) {
  return (
    <div className="flex flex-col justify-around p-3 text-center text-[11px]">
      <Image
        className="w-[50px] h-[50px] rounded-none  mt-2 mb-2"
        src={src}
        alt={alt}
        width={size}
        height={size}
      />
      <p>{alt}</p>
    </div>
  );
}
