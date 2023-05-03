import React from 'react'

type Props = {
    children: string | JSX.Element | JSX.Element[]
  }

 export default function Paragraph({children}: Props) {
    return (
        <p className='text-justify text-base max-lg:text-sm dark:text-gray-100 w-11/12 ml-2 mt-7'>
            {children}
        </p>
    )
}
