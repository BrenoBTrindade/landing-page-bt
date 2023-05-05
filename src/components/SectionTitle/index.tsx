import React from 'react'

type Props = {
    children: string | JSX.Element | JSX.Element[]
  }

 export default function SectionTitle({children}: Props) {
    return (
        <h1 className='text-left ml-8 mt-3 mb-3 font-bold text-xl max-md:text-lg dark:text-white max-lg:text-lg'>
            {children}
        </h1>
    )
}
