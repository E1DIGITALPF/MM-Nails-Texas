import React, { CSSProperties } from 'react';
import Image from 'next/image';
import {
    Container,
    ImageContainer,
    ContentContainer,
    Title,
    Text,
    ReservationButton
} from './styles';

interface ImageContentCardProps {
    imgUrl: string;
    title: string;
    content: React.ReactNode;
    reservationLink: string;
    children?: React.ReactNode;
    cardStyle?: CSSProperties;
    cardClassName?: string;
    titleStyle?: CSSProperties;
    titleClassName?: string;
    textStyle?: CSSProperties;
    textClassName?: string;
    contentContainerStyle?: CSSProperties;
    contentContainerClassName?: string;
}

export function ImageContentCard({
    imgUrl,
    title,
    content,
    reservationLink,
    children,
    cardStyle,
    cardClassName,
    textClassName,
    textStyle,
    titleClassName,
    titleStyle,
    contentContainerStyle,
    contentContainerClassName,
}: ImageContentCardProps) {
    const handleReservationClick = () => {
        window.open(reservationLink, '_blank');
    };

    return (
        <Container
            style={cardStyle}
            className={cardClassName}
        >
            <ImageContainer>
                <Image
                    src={imgUrl}
                    width={768}
                    height={1024}
                    alt={title}
                />
            </ImageContainer>
            <ContentContainer
                className={contentContainerClassName}
                style={contentContainerStyle}
            >
                <Title
                    className={titleClassName}
                    style={titleStyle}
                >
                    {title}
                </Title>
                <Text
                    className={textClassName}
                    style={textStyle}
                >
                    {content}
                </Text>
                <ReservationButton onClick={handleReservationClick}>
                    Reserva ahora
                </ReservationButton>
            </ContentContainer>
            {children}
        </Container>
    );
}
