/* eslint-disable @next/next/no-img-element */
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Paragraph from "../Paragraph";
import Link from "next/link";

 export default function CarouselProject() {
    return (
        <Carousel showStatus={false} showArrows={false} autoPlay={true} interval={6000} showIndicators={false} infiniteLoop={true} className="w-4/6 p-10 mt-5 max-md:w-full max-md:dark:bg-gray-700 max-md:ml-8 border-none rounded-md">
        <div className="flex flex-col m-auto ml-2" >
            <h1 className="text-xl font-bold dark:text-gray-200 max-md:text-sm">Wallet</h1>
            <img className="rounded-md p-3 shadow-md bg-black  mt-4 mb-4" src={'/wallet.gif'} alt={'Wallet'} width={50} height={50} />
            <Paragraph>Uma carteira de controle de gastos com conversor de moedas. Ao utilizar essa aplicação um usuário deverá ser capaz de Adicionar, remover e editar um gasto.
            </Paragraph>
            <Paragraph>
            Tecnologias utilizadas: React, Jest, Redux, CSS e JavaScript.
            </Paragraph>
            <div className="mt-5 animate-bounce mb-5">
                <Link className="text-center text-gray-200 shadow-md rounded-md  text-md font-semibold opacity-70 hover:opacity-100 bg-blue-700 p-2" href='https://github.com/BrenoBTrindade/Wallet' target="_blank">Code</Link>
            </div>
        </div>
        <div className="flex flex-col m-auto ml-2" >
            <h1 className="text-xl font-bold  dark:text-gray-200 max-md:text-sm">Trivia</h1>
            <img className="rounded-md p-3 shadow-md bg-black  mt-4 mb-4" src={'/trivia.gif'} alt={'Wallet'} width={50} height={50} />
            <Paragraph>Trivia, é um jogo onde os concorrentes são questionados sobre fatos interessantes, mas sem importância em muitos assuntos.</Paragraph>
            <Paragraph>
            Tecnologias utilizadas: React, Jest, Redux, CSS e JavaScript.
            </Paragraph>
            <div className="mt-5 animate-bounce mb-5">
                <Link className="text-center text-gray-200 shadow-md rounded-md  text-md font-semibold opacity-70 hover:opacity-100 bg-blue-700 p-2" href='https://github.com/BrenoBTrindade/project-trivia' target="_blank">Code</Link>
            </div>
        </div> 
        <div className="flex flex-col m-auto ml-2" >
            <h1 className="text-xl font-bold  dark:text-gray-200 max-md:text-sm">Bank</h1>
            <img className="rounded-md p-3 shadow-md bg-black  mt-4 mb-4" src={'/apptransferencia.gif'} alt={'Wallet'} width={50} height={50} />
            <Paragraph>Com banco online você consegue fazer tranferencias e ver historico de transações.</Paragraph>
            <Paragraph>
            Tecnologias utilizadas: NodeJS, PostgresSQL, Express, Sequelize, Docker, React, CSS e TypeScript.
            </Paragraph>
            <div className="mt-5 animate-bounce mb-5">
                <Link className="text-center text-gray-200 shadow-md rounded-md  text-md font-semibold opacity-70 hover:opacity-100 bg-blue-700 p-2" href='https://github.com/BrenoBTrindade/Carteira_Online' target="_blank">Code</Link>
            </div>
        </div>
        <div className="flex flex-col m-auto ml-2" >
            <h1 className="text-xl font-bold  dark:text-gray-200 max-md:text-sm">Bank</h1>
            <img className="rounded-md p-3 shadow-md bg-black  mt-4 mb-4" src={'/delivery.gif'} alt={'Delivery'} width={50} height={50} />
            <Paragraph>Delivery App, foi um projeto feito em time, onde foi desenvolvido um sistema, com login para cliente, vendedor e administrador do sistema, o codigo está em processo de publicação</Paragraph>
            <Paragraph>
            Tecnologias utilizadas: NodeJS, MySQL, Express, Sequelize, Docker, React, CSS e JavaScript.
            </Paragraph>
            <div className="mt-5 animate-bounce mb-5">
                <Link className="text-center text-gray-200 shadow-md rounded-md  text-md font-semibold opacity-70 hover:opacity-100 bg-blue-700 p-2" href='https://github.com/BrenoBTrindade' target="_blank">Code</Link>
            </div>
        </div>           
        </Carousel>
    )
}
