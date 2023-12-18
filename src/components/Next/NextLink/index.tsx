import { CSSProperties } from 'react';
import Link from 'next/link'
import { TextLink } from './styles'

interface NextLinkProps {
    url: string;
    title: string;
    openInSameWindow?: boolean;
    style?: CSSProperties;
    className?: string;
}

export function NextLink({
    url,
    title,
    openInSameWindow,
    style,
    className
}: NextLinkProps) {
    return (
        <Link href={url} passHref >
            <TextLink
                className={className}
                style={style}
                target={
                    openInSameWindow
                        ?
                        '_self'
                        :
                        '_blank'
                }
            >
                {title
                }</TextLink>
        </Link>
    )
}