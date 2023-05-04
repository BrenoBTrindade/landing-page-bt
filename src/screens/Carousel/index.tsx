import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Icons from "@/components/Icons";
import icons from "./iconsArray";


 export default function CarouselIcons() {
    return (
        <Carousel showStatus={false} autoPlay={true} interval={2000} infiniteLoop={true} className="w-2/5 mt-5 max-md:w-full max-md:dark:bg-gray-400 rounded-lg max-md:ml-8">
            {icons.map((icon, i) => (
                <div className="flex p-10 -ml-8" key={i}>{icon.map((iten) => <Icons key={iten.alt} {...iten} size={50}/>)}</div>
            )  )}
        </Carousel>
    )
}
