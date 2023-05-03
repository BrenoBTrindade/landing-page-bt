import React from 'react'

type Props = {
    children: string | JSX.Element | JSX.Element[]
  }

 export default function Title({children}: Props) {
    return (
        <h1 className='text-center text-xl max-lg:text-sm dark:text-gray-100'>
            {children}
        </h1>
    )
}

