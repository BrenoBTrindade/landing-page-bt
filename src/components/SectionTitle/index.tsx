import React from 'react'

type Props = {
    children: string | JSX.Element | JSX.Element[]
  }

 export default function SectionTitle({children}: Props) {
    return (
        <h1 className='text-left ml-8 mt-8 font-bold text-2xl max-md:text-lg dark:text-gray-100 max-lg:text-lg'>
            {children}
        </h1>
    )
}
