import { ReactNode, CSSProperties } from 'react';
import { SecondContainer } from '../styles'

interface SecondFooterSectionProps {
    children: ReactNode;
    style?: CSSProperties;
    className?: string;
}

export function FooterSecondSection({ children, style, className }: SecondFooterSectionProps) {
    return (
        <SecondContainer
            style={style}
            className={className}
        >
            {children}
        </SecondContainer>
    )
}