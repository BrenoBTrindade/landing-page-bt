import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image from "next/image";
import Paragraph from "../Paragraph";

const gifs = [
    [
        {
            src: '/wallet.gif',
            alt: 'Uma carteira de controle de gastos com conversor de moedas. Ao utilizar essa aplicação um usuário deverá ser capaz de Adicionar, remover e editar um gasto; Visualizar uma tabelas com seus gastos; Visualizar o total de gastos convertidos para uma moeda de escolha',
        },
    ],
    [
        {
            src: '/trivia.gif',
            alt: 'Trivia, é um jogo onde os concorrentes são questionados sobre fatos interessantes, mas sem importância em muitos assuntos.',
        },
    ],
    [
        {
            src: '/apptransferencia.gif',
            alt: 'Um mini banco online, onde é possivel realizar transferencia, receber e visualizar transações.',
        },
    ]
]

 export default function CarouselProject() {
    return (
        <Carousel showStatus={false} autoPlay={true} interval={6000} showIndicators={false} infiniteLoop={true} className="w-4/6 p-10 mt-5 max-md:w-full max-md:dark:bg-gray-400 max-md:ml-8">
        <div className="flex flex-col m-auto ml-2" >
            <h1>Wallet</h1>
            <Image className="rounded-md p-4 shadow-md bg-black  mt-8 mb-2" src={'/wallet.gif'} alt={'Wallet'} width={50} height={50} />
            <Paragraph>Uma carteira de controle de gastos com conversor de moedas. Ao utilizar essa aplicação um usuário deverá ser capaz de Adicionar, remover e editar um gasto.</Paragraph>
        </div>
        <div className="flex flex-col m-auto ml-2" >
            <h1>Trivia</h1>
            <Image className="rounded-md p-4 shadow-md bg-black  mt-8 mb-2" src={'/trivia.gif'} alt={'Wallet'} width={50} height={50} />
            <Paragraph>Trivia, é um jogo onde os concorrentes são questionados sobre fatos interessantes, mas sem importância em muitos assuntos.</Paragraph>
        </div> 
        <div className="flex flex-col m-auto ml-2" >
            <h1>Bank</h1>
            <Image className="rounded-md p-4 shadow-md bg-black  mt-8 mb-2" src={'/apptransferencia.gif'} alt={'Wallet'} width={50} height={50} />
            <Paragraph>Com banco online você consegue fazer tranferencias e ver historico de transações.</Paragraph>
        </div>         
        </Carousel>
    )
}
