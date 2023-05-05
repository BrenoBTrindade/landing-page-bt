import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import ProjectVideo from "../ProjectVideo";

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
        <Carousel showStatus={false} showThumbs={false} autoPlay={true} interval={2000} infiniteLoop={true} className="w-2/3 h-screen mt-5 max-md:w-full max-md:dark:bg-gray-400 rounded-lg max-md:ml-8">
            {gifs.map((gif, i) => (
                <div className="flex p-10 -ml-8" key={i}>{gif.map((iten) => <ProjectVideo key={iten.alt} {...iten} size={50} />)}
                </div>
            )  )}
        </Carousel>
    )
}
