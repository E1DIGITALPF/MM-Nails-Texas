import { CSSProperties } from 'react';
import { GradientText as GradientTextComponent } from './styles'

interface GradientTextProps {
    content: string;
    initialColor: string;
    finalColor: string;
    direction: 'left-to-right' | 'right-to-left' | 'top-to-bottom' | 'bottom-to-top';
    style?: CSSProperties;
    className?: string
}

export function GradientText({
    content,
    direction,
    initialColor,
    finalColor,
    className,
    style
}: GradientTextProps) {
    return (
        <p
            style={style}
            className={className}
        >
            <GradientTextComponent
                dir={direction}
                from={initialColor}
                to={finalColor}
            >
                {content}
            </GradientTextComponent >
        </p>
    )
}