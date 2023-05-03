import React from 'react'

type Props = {
    children: string | JSX.Element | JSX.Element[]
  }

 export default function SectionTitle({children}: Props) {
    return (
        <h1 className='text-left ml-8 mt-7 font-bold text-2xl max-lg:text-sm dark:text-gray-100'>
            {children}
        </h1>
    )
}
