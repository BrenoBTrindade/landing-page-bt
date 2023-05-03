import SkillsIcons from "@/components/SkillsIcons"
import NextLink from 'next/link'

 export default function Carousel() {
    return (
        <div className="flex max-md:flex-wrap">
            <SkillsIcons src={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'} alt={'NodeJs'} />
            <SkillsIcons src={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg'} alt={'Express'} />
            <SkillsIcons src={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg'} alt={'MySQL'} />
            <SkillsIcons src={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg'} alt={'Docker'} />
            <SkillsIcons src={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'} alt={'JavaScript'} />
            <SkillsIcons src={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg'} alt={'TypeScript'} />
            <SkillsIcons src={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'} alt={'React'} />
            <SkillsIcons src={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg'} alt={'NextJs'} />
            <NextLink href={'https://github.com/BrenoBTrindade'} target="_blank" className=" hover:cursor-pointer">
                <SkillsIcons src={'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg'} alt={'Ver Mais'} />
            </NextLink>
        </div>
    )
}
