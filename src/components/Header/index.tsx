import Link from "../Link";
import Title from "../Title";
import TogleTheme from "../TogleTheme";
import AnchorComponent from "../ Anchor";
import { Dropdown } from "@nextui-org/react";
import { Bars3Icon } from "@heroicons/react/24/solid";

export default function Header() {
    return (
        <div className=" m-auto w-3/5 p-3 flex justify-between items-center bg-transparent border-none rounded-sm text-gray-950 max-md:justify-between ">
            <div className="md:hidden w-1/7 -ml-16">
            <Dropdown >
                <Dropdown.Button icon={<Bars3Icon className="h-7 dark:text-gray-100" />} light>
                </Dropdown.Button>
                <Dropdown.Menu aria-label="Actions" >
                    <Dropdown.Item key="#sobre"><a href={'#sobre'}>Sobre</a></Dropdown.Item>
                    <Dropdown.Item className="mt-5" key="#tecnologias"><a href={'#tecnologias'}>Tecnologias</a></Dropdown.Item>
                    <Dropdown.Item className="mt-5" key="#projetos"><a href={'#projetos'}>Projetos</a></Dropdown.Item>
                    <Dropdown.Item className="mt-5" key="linkedin">
                        <a href='https://www.linkedin.com/in/betrindade/' target="-blank">
                            Linkedin
                        </a>
                    </Dropdown.Item>
                    <Dropdown.Item className="mt-5" key="Github">
                        <a href='https://github.com/BrenoBTrindade' target="-blank">
                            GitHub
                        </a>
                    </Dropdown.Item>
                </Dropdown.Menu>
          </Dropdown>
            </div>
           <div className="flex flex-col items-start">
                    <Title>
                        Breno Trindade
                    </Title>
                    <h2 className="text-lg ml-0.5 opacity-80 max-md:text-xs dark:text-white">
                        Desenvolvedor Web Full Stack
                    </h2>
            </div>
                <nav className="flex w-2/5 justify-evenly max-lg:hidden  max-xl:hidden">
                    <AnchorComponent href={'#sobre'}>
                        Sobre
                    </AnchorComponent>
                    <AnchorComponent href={'#tecnologias'}>
                        Tecnologias
                    </AnchorComponent>
                    <AnchorComponent href={'#projetos'}>
                        Projetos
                    </AnchorComponent>

                    <Link href='https://www.linkedin.com/in/betrindade/' target="-blank">
                        Linkedin
                    </Link>
                    <Link href='https://github.com/BrenoBTrindade' target="-blank">
                        GitHub
                    </Link>
            </nav>
                    <TogleTheme />
        </div>
    )
}