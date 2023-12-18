import { CSSProperties, ReactNode } from "react";
import { Container, } from './styles';

interface HeaderProps {
    children: ReactNode;
    style?: CSSProperties;
    className?: string;
}

export function Header({
    children,
    style,
    className
}: HeaderProps) {
    return (
        <Container
            style={style}
            className={className}
        >
            {children}
        </Container>
    )
}
