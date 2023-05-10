import NextLink from 'next/link'

type Props = {
    children: string | JSX.Element | JSX.Element[],
    href: string | any
    target?: string | any
  }

export default function Link({children , href, target}: Props) {
    return (
        <NextLink href={href} passHref target={target} className=' scroll-smooth text-sm border-2 duration-500 border-transparent font-bold text-gray-950 text-opacity-60 dark:text-opacity-60 dark:hover:text-opacity-100 hover:text-opacity-100 hover:border-b-black dark:text-gray-100 dark:hover:border-b-white max-md:text-base max-md:opacity-100'>
            {children}
        </NextLink>
    )
}
