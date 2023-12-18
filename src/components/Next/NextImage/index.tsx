import React, { CSSProperties } from 'react';
import Image from 'next/image';
import { Container } from './styles';
import packageInfo from '../../../../package.json';

interface NextImageProps {
    imgUrl: string;
    width: number;
    height: number;
    style?: CSSProperties;
    className?: string;
}

export const NextImage = ({
    imgUrl,
    width,
    height,
    style,
    className
}) => {
    return (
        <Container>
            <Image
                src={imgUrl}
                alt={packageInfo.name}
                width={width}
                height={height}
                style={style}
                className={className}
            />
        </Container>
    );
};
