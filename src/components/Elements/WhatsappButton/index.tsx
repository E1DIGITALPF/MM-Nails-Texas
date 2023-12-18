import React, { CSSProperties } from 'react';
import { Button } from './styles'
import { BsWhatsapp } from 'react-icons/bs'

interface WhatsappButtonProps {
    whatsappContact: string;
    ariaLabel: string;
    style?: CSSProperties;
    className?: string;
    backgroundVariant?: 'dark' | 'light';
}

export function WhatsappButton({
    className,
    ariaLabel,
    style,
    whatsappContact,
    backgroundVariant = 'light'
}: WhatsappButtonProps) {

    function startChat(whatsappContact: string) {
        window.open(`http://api.whatsapp.com/send?phone=18324507722`)
    }

    return (
        <Button
            onClick={() => startChat(whatsappContact)}
            style={{
                backgroundColor: backgroundVariant === 'dark' ?
                    '#075e54' :
                    '#25d366'
            } || style}
            className={className}
            aria-label={ariaLabel}
        >
            <BsWhatsapp/>
        </Button>
    )
}