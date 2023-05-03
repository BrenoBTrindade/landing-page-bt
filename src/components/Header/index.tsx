import Link from "../Link";
import Title from "../Title";
import { MoonIcon } from "@heroicons/react/24/solid";
import TogleTheme from "../TogleTheme";

export default function Header() {
    return (
        <div className=" m-auto w-3/5 p-3 flex justify-between items-center bg-transparent border-none rounded-sm text-gray-950 max-md:justify-evenly ">
           <div className="flex flex-col items-start">
                    <Title>
                        Breno Trindade
                    </Title>
                    <Title>
                        Desenvolvedor Web Full Stack
                    </Title>
            </div>
                <div className="flex w-2/5 justify-evenly max-lg:hidden">
                    <Link href='#sobre'>
                        Sobre
                    </Link>
                    <Link href='#tecnologias'>
                        Tecnologias
                    </Link>
                    <Link href='#projetos'>
                        Projetos
                    </Link>
                    <Link href='https://www.linkedin.com/in/betrindade/' target="-blank">
                        Linkedin
                    </Link>
                    <Link href='https://github.com/BrenoBTrindade' target="-blank">
                        GitHub
                    </Link>
                    <TogleTheme />
            </div>
        </div>
    )
}