import React, { CSSProperties, ReactNode } from 'react';
import { Container } from './styles';


interface FooterAttach {
    children: ReactNode;
    style?: CSSProperties;
    className?: string;
}

export function FooterAttach({ children, style, className }: FooterAttach) {
    return (
        <Container
            style={style}
            className={className}
        >
            {children}
        </Container>
    )
}