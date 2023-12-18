import { CSSProperties, ReactNode } from 'react';
import { Container } from './styles';

interface HeaderAuthenticationContainerProps {
    children: ReactNode;
    style?: CSSProperties;
    className?: string;
}

export function HeaderAuthenticationContainer({
    children,
    className,
    style
}: HeaderAuthenticationContainerProps) {
    return (
        <Container
            style={style}
            className={className}
        >
            {children}
        </Container>
    )
}