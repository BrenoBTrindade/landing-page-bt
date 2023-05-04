import React from 'react'

type Props = {
    children: string | JSX.Element | JSX.Element[]
  }

 export default function Paragraph({children}: Props) {
    return (
        <p className='text-left text-base max-md:text-sm dark:text-gray-100 w-11/12 ml-2 mt-3 max-md:ml-0 max-md:mt-0 max-md:w-5/3'>
            {children}
        </p>
    )
}
