import { ReactNode, CSSProperties } from 'react';
import { FourthContainer } from '../styles'

interface FourthFooterSectionProps {
    children: ReactNode;
    style?: CSSProperties;
    className?: string;
}

export function FooterFourthSection({ children, style, className }: FourthFooterSectionProps) {
    return (
        <FourthContainer
            style={style}
            className={className}
        >
            {children}
        </FourthContainer>
    )
}