import { CSSProperties } from 'react';
import Image from 'next/image'
import Link from 'next/link'

interface LogoProps {
    imageUrl: string;
    size?: 'small' | 'medium' | 'large'
    style?: CSSProperties;
    className?: string;
    url?: string;
}

export function Logo({
    imageUrl,
    url = '/',
    size,
    style,
    className
}: LogoProps) {
    const logoSize = size === 'large' ? 112 : size === 'small' ? 32 : 48;
    return (
        <Link href={url} passHref>
            <a style={style} className={className}>
                <Image
                    src={imageUrl}
                    alt='logo'
                    width={logoSize}
                    height={logoSize}
                />
            </a>
        </Link>
    )
}
