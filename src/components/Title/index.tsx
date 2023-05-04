import React from 'react'

type Props = {
    children: string | JSX.Element | JSX.Element[]
  }

 export default function Title({children}: Props) {
    return (
        <h1 className='text-center font-bold text-xl max-lg:text-lg max-md:m-auto max-md:font-bold dark:text-gray-100'>
            {children}
        </h1>
    )
}

