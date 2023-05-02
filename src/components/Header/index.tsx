import Link from "../Link"
import Title from "../Title"

export default function Header() {
    return (
        <div className=" m-auto opacity-80  p-3 flex justify-between items-center bg-slate-950 rounded-sm text-neutral-50">
            <Title>
                Developer Full Stack
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
            <Link href='https://www.linkedin.com/in/betrindade/'>
                Linkedin
            </Link>
            <Link href='https://github.com/BrenoBTrindade'>
                GitHub
            </Link>
            </div>
            <span className="mr-5">
                Tema
            </span>
        </div>
    )
}