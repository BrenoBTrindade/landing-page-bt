import NextLink from 'next/link'

type Props = {
    children: string | JSX.Element | JSX.Element[],
    href: string | any
  }

export default function Link({children , href}: Props) {
    return (
        <NextLink href={href} passHref>
            {children}
        </NextLink>
    )
}