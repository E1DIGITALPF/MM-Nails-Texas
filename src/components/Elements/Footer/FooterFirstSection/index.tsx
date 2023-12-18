import { ReactNode, CSSProperties } from 'react';
import { FirstContainer } from '../styles'

interface FirstFooterSectionProps {
    children: ReactNode;
    style?: CSSProperties;
    className?: string;
}

export function FooterFirstSection({ children, style, className }: FirstFooterSectionProps) {
    return (
        <FirstContainer
            style={style}
            className={className}
        >
            {children}
        </FirstContainer>
    )
}