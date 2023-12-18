import { CSSProperties, ReactNode } from "react";

import {
    Container
} from './styles';

interface FooterProps {
    children: ReactNode;
    style?: CSSProperties;
    className?: string;
}

export function Footer({
    children,
    style,
    className
}: FooterProps) {
    return (
        <Container
            style={style}
            className={className}
        >
            {children}
        </Container >
    )
}

