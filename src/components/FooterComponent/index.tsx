import React from 'react'
import { ArrowUpIcon } from '@heroicons/react/24/solid'
import Icons from '../Icons'
import Paragraph from '../Paragraph'

 export default function FooterComponent() {
    return (
        <div className='m-auto w-3/5 p-3 flex max-md:flex-col justify-between items-center bg-transparent border-none rounded-sm text-gray-950 max-md:justify-between'>
            <a className=' flex text-sm max-md:ml-8 border-2 duration-500 border-transparent font-bold text-gray-950 text-opacity-60 dark:text-opacity-60 dark:hover:text-opacity-100 hover:text-opacity-100 hover:border-b-black dark:text-gray-100 dark:hover:border-b-white max-md:opacity-100 max-md:text-sm max-md:border-none' href='#topo'> 
                Voltar ao topo <ArrowUpIcon className="h-5 ml-2 dark:text-gray-100" />
            </a>
            <div className='max-xl:-mt-7 -mt-5 flex justify-center  max-md:mt-0.5 max-md:-ml-2'>
                <a className='dark:hidden ' href='https://github.com/BrenoBTrindade' target="-blank">
                    <Icons src='/github.svg' size={30} alt=''/>
                </a>
                <a className='hidden dark:block' href='https://github.com/BrenoBTrindade' target="-blank">
                    <Icons src='/githubwhite.svg' size={50} alt=''/>
                </a>
                <a href='https://github.com/BrenoBTrindade' target="-blank">
                    <Icons src='/linkedin.svg' size={30} alt=''/>
                </a>
            </div>
            <p className='dark:text-white max-md:ml-5 opacity-80 max-md:mt-4'>
                Copyright© 2023
            </p>
        </div>
    )
}
