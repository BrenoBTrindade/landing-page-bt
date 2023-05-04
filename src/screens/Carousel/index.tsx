import SkillsIcons from "@/components/SkillsIcons"
import NextLink from 'next/link'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

 export default function CarouselIcons() {
    return (
        <Carousel className="w-2/4 mt-5 max-md:w-full max-md:dark:bg-gray-200 max-md:ml-6 rounded-lg">
                <div className="flex p-10 max-md:p-0">
                    <SkillsIcons src={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'} alt={'NodeJs'} />
                    <SkillsIcons src={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg'} alt={'Express'} />
                    <SkillsIcons src={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg'} alt={'MySQL'} />
                    <SkillsIcons src={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg'} alt={'Docker'} />
                    <SkillsIcons src={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'} alt={'JavaScript'} />
                    <SkillsIcons src={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'} alt={'TypeScript'} />
                </div>
                <div className="flex p-10 max-md:ml-14 max-md:p-0">
                    <SkillsIcons src={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'} alt={'Python'} />
                    <SkillsIcons src={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mocha/mocha-plain.svg'} alt={'Mocha'} />
                    <SkillsIcons src={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'} alt={'React'} />
                    <SkillsIcons src={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg'} alt={'Jest'} />
                    <SkillsIcons src={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg'} alt={'NextJs'} />
                    <SkillsIcons src={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg'} alt={'Redux'} />
                </div>
                <div className="flex p-10 max-md:ml-14 max-md:p-0">
                    <SkillsIcons src={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg'} alt={'tailwind'} />
                    <SkillsIcons src={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg'} alt={'Bootstrap'} />
                    <SkillsIcons src={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'} alt={'HTML'} />
                    <SkillsIcons src={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'} alt={'CSS'} />
                    <SkillsIcons src={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg'} alt={'Git'} />
                    <SkillsIcons src={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg'} alt={'GitHub'} />
                    
                </div>
        </Carousel>
    )
}
