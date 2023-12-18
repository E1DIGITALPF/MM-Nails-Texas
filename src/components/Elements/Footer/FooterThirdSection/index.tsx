import { ReactNode, CSSProperties } from 'react';
import { ThirdContainer } from '../styles'

interface ThirdFooterSectionProps {
    children: ReactNode;
    style?: CSSProperties;
    className?: string;
}

export function FooterThirdSection({ children, style, className }: ThirdFooterSectionProps) {
    return (
        <ThirdContainer
            style={style}
            className={className}
        >
            {children}
        </ThirdContainer>
    )
}