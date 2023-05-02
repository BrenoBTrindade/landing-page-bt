import React from 'react'

type Props = {
    children: string | JSX.Element | JSX.Element[]
  }

 export default function Title({children}: Props) {
    return (
        <h1 className='text-center text-2xl ml-5'>
            {children}
        </h1>
    )
}

