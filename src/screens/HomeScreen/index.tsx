import React from "react";
import Header from "@/components/Header";
import ImageComponent from "@/components/ImageComponent";
import SectionTitle from "@/components/SectionTitle";
import Paragraph from "@/components/Paragraph";
import { CheckCircleIcon, ChatBubbleLeftEllipsisIcon, EnvelopeIcon, ArrowDownTrayIcon } from "@heroicons/react/24/solid";
import TogleThemeMobile from "@/components/TogleThemeMobile";
import Head from "next/head";
import Carousel from "../Carousel";
import Link from "@/components/Link";


const HomeScreen = () => {
    return (
        <React.Fragment>
            <Head>
                <title>Breno Trindade</title>
            </Head>
            <section className="flex">
                <Header/>
                <div className="md:hidden">
                    <TogleThemeMobile />
                </div>
            </section>
            <section className="bg-white rounded-sm flex w-3/5 mt-5 m-auto mb-5 min-h-full shadow-md dark:bg-gray-900 dark:max-md:bg-transparent max-lg:bg-transparent max-lg:min-w-full max-md::text-center max-md:flex-col max-md:justify-center items-center max-md:-mt-5 max-md:min-w-full max-md:shadow-none">
                <div className="w-2/4 h-2/4 p-3.5 mt-8 mb-8 ml-9 ">
                    <ImageComponent src={'/avatar.jpg'} alt={'foto criada pela Lensa'}/>
                </div>
                <div id="sobre" className="w-2/4 h-2/4 -mt-[60px] max-md:min-w-full">
                    <SectionTitle>
                        Sobre mim
                    </SectionTitle>
                    <div className="ml-8 max-md:min-w-full">
                        <Paragraph>
                            Especializado em Desenvolvimento Web, sou graduado em Engenharia da Computação. Apaixonado por programação, estou sempre em busca de ampliar e desenvolver o meu
                            conhecimento na área. Acredito que tudo se resolve com
                            comunicação e trabalho em equipe.
                        </Paragraph>
                    </div>
                    <SectionTitle>
                        Formação/Cursos
                    </SectionTitle>
                    <div className="flex items-center">
                        <CheckCircleIcon className="h-7 mt-3.5 ml-8 dark:text-gray-100 max-md:mt-0 max-md:mr-0 "/>
                        <Paragraph>
                            Engenharia da computação - Estácio-Iesam
                        </Paragraph>
                    </div>
                    <div className="flex items-center">
                        <CheckCircleIcon className="h-7  mt-3.5 ml-8 dark:text-gray-100 max-md:mt-0 max-md:mr-0"/>
                        <Paragraph>
                            Desenvolvimento Web Full Stack - Trybe.
                        </Paragraph>
                    </div>
                    <SectionTitle>
                        Fale Comigo!
                    </SectionTitle>
                    <div className="ml-4 flex items-center">
                        <EnvelopeIcon className="h-7  mt-3.5 ml-5 dark:text-gray-100 max-md:mt-0 max-md:mr-0" />
                        <Paragraph>
                            brenokaminski@hotmail.com
                        </Paragraph>
                    </div>
                    <div className="ml-4 flex items-center">
                        <ChatBubbleLeftEllipsisIcon className="h-7  mt-3.5 ml-5 dark:text-gray-100 max-md:mt-0 max-md:mr-0" />
                        <Paragraph>
                            (91)98156-1194
                        </Paragraph>
                    </div>
                        <div className="ml-4 flex items-center mt-3 dark:text-white">
                                <ArrowDownTrayIcon className="h-7  ml-5 dark:text-gray-100 max-md:mt-0 max-md:mr-0 "/>
                                <a className="ml-2 mt-1 font-bold" href='https://drive.google.com/file/d/1MnK6T0YHWsZPUWiE2y14KrzsUUW0aUd2/view' target="-blank">
                                Download CV
                            </a>
                        </div>
                </div>
            </section>
            <section className="bg-gray-300 rounded-sm flex-col w-3/5 -mt-5 m-auto mb-5 min-h-full shadow-md dark:bg-gray-500 dark:max-md:bg-transparent max-lg:bg-transparent max-lg:min-w-full max-md::text-center  max-md:justify-center items-center max-md:-mt-5 max-md:min-w-full max-md:shadow-none">
                <div className="flex justify-center" id="tecnologias">
                   <SectionTitle>
                        Tecnologias mais utilizadas
                   </SectionTitle>
                </div>
                <div className="flex justify-center">    
                   <Carousel />
                </div>
                <section>
                <div className="flex justify-center" id="projetos">
                   <SectionTitle>
                        Projetos
                   </SectionTitle>
                </div>
                   <h1 className="text-center mt-10 font-bold dark:text-white">
                        EM DESENVOLVIMENTO......
                   </h1>
                   <p className="text-center mt-10 font-bold  dark:text-white">
                        projetos publicados no
                   <a href="https://github.com/BrenoBTrindade" target="_Blank" className="text-center  ml-1 text-blue-600">GitHub</a>
                   </p>
                </section>
            </section>
        </React.Fragment>
    )
};

export default HomeScreen;