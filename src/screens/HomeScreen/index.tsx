import React from "react";
import Header from "@/components/Header";
import ImageComponent from "@/components/ImageComponent";
import SectionTitle from "@/components/SectionTitle";
import Paragraph from "@/components/Paragraph";
import { CheckCircleIcon, ChatBubbleLeftEllipsisIcon, EnvelopeIcon } from "@heroicons/react/24/solid";

const HomeScreen = () => {
    return (
        <main>
            <section>
                <Header/>
            </section>
            <section className=" bg-white rounded-xl flex w-3/5 mt-5 m-auto mb-5 min-h-full shadow-md dark:bg-slate-700 max-lg:bg-transparent max-lg:min-w-full max-lg:text-center">
                <ImageComponent src={'/avatar.jpg'} alt={'foto de teste'}/>
                <div id="sobre" className="w-1/2">
                    <SectionTitle>
                        Sobre mim
                    </SectionTitle>
                    <div className="ml-8">
                        <Paragraph>
                            Especializado em Desenvolvimento Web, sou graduado em Engenharia da Computação. Apaixonado por programação, estou sempre em busca de ampliar e desenvolver o meu
                            conhecimento na área. Acredito que tudo se resolve com
                            comunicação e trabalho em equipe..
                        </Paragraph>
                    </div>
                    <SectionTitle>
                        Formação/Cursos
                    </SectionTitle>
                    <div className="flex items-center">
                        <CheckCircleIcon className="h-7 mt-8 ml-8 dark:text-gray-100"/>
                        <Paragraph>
                            Engenharia da computação - Estácio-Iesam
                        </Paragraph>
                    </div>
                    <div className="flex items-center">
                        <CheckCircleIcon className="h-7  mt-8 ml-8 dark:text-gray-100"/>
                        <Paragraph>
                            Desenvolvimento Web Full Stack - Trybe.
                        </Paragraph>
                    </div>
                    <SectionTitle>
                        Fale Comigo!
                    </SectionTitle>
                    <div className="ml-8 flex">
                        <EnvelopeIcon className="h-7  mt-7 ml-5 dark:text-gray-100" />
                        <Paragraph>
                            brenokaminski@hotmail.com
                        </Paragraph>
                    </div>
                    <div className="ml-8 flex">
                        <ChatBubbleLeftEllipsisIcon className="h-7  mt-7 ml-5 dark:text-gray-100" />
                        <Paragraph>
                            (91)98156-1194
                        </Paragraph>
                    </div>
                </div>
            </section>
        </main>
    )
};

export default HomeScreen;