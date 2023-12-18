import { NextPage } from 'next'
import Head from 'next/head'
import { nails } from '../data/data'

import { Container } from '../layout/styles'
import { Text } from '../components/Typography/Text'
import { Title } from '../components/Typography/Title'
import { ImageContentCard } from '../components/Cards/ImageContentCard'

import {
    CardsContainer,
    CardsSection,
    CardsSectionContainer,
    InfoSection,
    InfoSectionContainer
} from '../styles/servicios'


const Servicios: NextPage = () => {
    return (
        <Container>
            <Head>
                <title>M&M Nails | Servicios</title>
                {/* @ts-ignore */}
                <meta charSet="UTF-8" />
                <meta name="description" content="Nails Studio - Texas" />
                <meta name="keywords" content="Nails Saloon Studio Texas Dipping Gel Manicure Pedicure" />
                <meta name='author' content='Para' />
                <meta name="theme-color" content="#FF49C1" />
            </Head>
            <InfoSection>
                <InfoSectionContainer>
                    <Title
                        content='Servicios'
                    />
                    <Text
                        content='Brindo mis servicios con cuidados rigurosos y esterilización de equipos. Cuento con una variedad de servicios para dejar tus uñas impecables.'
                    />
                </InfoSectionContainer>
            </InfoSection>
            <CardsSection>
                <CardsSectionContainer>
                    <CardsContainer>
                        {nails.map(nail => (
                            <ImageContentCard
                                key={nail.service}
                                title={nail.service}
                                imgUrl={nail.urlImage}
                                content={nail.description}
                                reservationLink={nail.reservationLink}
                                cardClassName='staffCard'
                            />
                        ))}
                    </CardsContainer>
                </CardsSectionContainer>
            </CardsSection>
        </Container>
    )
}

export default Servicios