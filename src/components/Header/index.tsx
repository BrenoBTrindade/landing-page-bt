import Link from "../Link";
import Title from "../Title";
import { MoonIcon } from "@heroicons/react/24/solid";
import TogleTheme from "../TogleTheme";

export default function Header() {
    return (
        <div className=" m-auto  p-3 flex justify-between items-center bg-slate-950 rounded-sm text-neutral-50 shadow-sm">
            <Title>
                Desenvolvedor Full Stack
            </Title>
            <div className="flex w-1/3 justify-between">
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
            </div>
            <TogleTheme />
        </div>
    )
}