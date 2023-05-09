import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Icons from "@/components/Icons";
import icons from "./iconsArray";


 export default function CarouselIcons() {
    return (
        <Carousel showStatus={false} autoPlay={true} interval={2000} infiniteLoop={true} className="w-2/5 mt-5 max-md:w-full max-md:dark:bg-gray-800 rounded-lg max-md:ml-8 dark:text-white max-2xl:w-3/5 ">
            {icons.map((icon, i) => (
                <div className="flex p-10 -ml-5" key={i}>{icon.map((iten) => <Icons key={iten.alt} {...iten} size={50}/>)}</div>
            )  )}
        </Carousel>
    )
}
