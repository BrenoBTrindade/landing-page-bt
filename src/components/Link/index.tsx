import NextLink from 'next/link'

type Props = {
    children: string | JSX.Element | JSX.Element[],
    href: string | any
    target?: string | any
  }

export default function Link({children , href, target}: Props) {
    return (
        <NextLink href={href} passHref target={target}>
            {children}
        </NextLink>
    )
}