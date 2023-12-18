import React, { CSSProperties, ReactNode } from 'react';
import { Button } from './styles'

interface TopScrollButtonProps {
    elementReferenceId: string;
    ariaLabel: string;
    icon: ReactNode;
    style?: CSSProperties;
    className?: string;
}

export function TopScrollButton({
    className,
    ariaLabel,
    style,
    elementReferenceId,
    icon
}: TopScrollButtonProps) {

    function backToTop() {
        const getTarget = document.getElementById(elementReferenceId)
        getTarget!.scrollIntoView()
    }

    return (
        <Button
            onClick={backToTop}
            style={style}
            className={className}
            aria-label={ariaLabel}
        >
            {icon}
        </Button>
    )
}