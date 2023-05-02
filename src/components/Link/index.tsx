import NextLink from 'next/link'

type Props = {
    children: string | JSX.Element | JSX.Element[],
    href: string | any
    target?: string | any
  }

export default function Link({children , href, target}: Props) {
    return (
        <NextLink href={href} passHref target={target} className='text-lg border-2 duration-500 border-transparent font-bold text-white text-opacity-80 hover:text-opacity-100 hover:border-b-white'>
            {children}
        </NextLink>
    )
}