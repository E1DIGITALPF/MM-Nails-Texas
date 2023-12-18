import { NextPage } from 'next'
import Head from 'next/head'
import { FiFacebook, FiInstagram, FiLinkedin } from 'react-icons/fi'

import { SubTitle } from '../components/Typography/SubTitle'
import { Container } from '../layout/styles'
import {
    ContactSection,
    ContactSectionAddressContainer,
    ContactSectionContactContainer,
    ContactSectionContactInfoContainer,
    ContactSectionContainer,
    ContactSectionContentContainer,
    ContactSectionMapContainer,
    ContactSectionSocialContainer,
    MapContainer,
    SocialItemContainer
} from '../styles/contacto'

import { GoogleMap } from '../components/Elements/GoogleMap'
import { Text } from '../components/Typography/Text'
import { Title } from '../components/Typography/Title'

import { MdCall } from 'react-icons/md'
import { PrimaryButton } from '../components/Elements/PrimaryButton'
import { googleMapAddress } from '../data/data'

const Contacto: NextPage = () => {

    function startChat(whatsappContact: string) {
        window.open(`http://api.whatsapp.com/send?phone=1${whatsappContact}`)
    }

    return (
        <Container>
            <Head>
                <title>M&M Nails | Contacto</title>
                {/* @ts-ignore */}
                <meta charSet="UTF-8" />
                <meta name="description" content="Nails Studio - Texas" />
                <meta name="keywords" content="Nails Saloon Studio Texas Dipping Gel Manicure Pedicure" />
                <meta name='author' content='Para' />
                <meta name="theme-color" content="#FF49C1" />
            </Head>
            <ContactSection>
                <ContactSectionContainer>
                    <Title
                        content='Contacto'
                    />
                    <ContactSectionContentContainer>
                        <ContactSectionMapContainer>
                            <SubTitle
                                content='Visita mi Estudio'
                            />
                            <MapContainer>
                                <GoogleMap
                                    addressUrl={googleMapAddress}
                                    size='small'
                                />
                            </MapContainer>
                        </ContactSectionMapContainer>
                        <ContactSectionContactInfoContainer>
                            <ContactSectionAddressContainer>
                                <SubTitle
                                    content='Dirección'
                                />
                                <Text
                                    content='12107 Jones Rd, Houston, TX. (Dentro de Oscarluis Alcala Salone)'
                                />
                            </ContactSectionAddressContainer>
                            <ContactSectionContactContainer>
                                <SubTitle
                                    content='Whatsapp'
                                />
                                <PrimaryButton
                                    title='Iniciar chat'
                                    onClick={() => startChat('8324507722')}
                                    ariaLabel='Iniciar chat'
                                    className='whatsappButton'
                                    size='large'
                                    icon={
                                        <MdCall 
                                            size={16}
                                            style={{
                                                marginRight: 4
                                            }}
                                        />
                                    }
                                />
                            </ContactSectionContactContainer>
                        </ContactSectionContactInfoContainer>
                    </ContactSectionContentContainer>
                </ContactSectionContainer>
            </ContactSection>
        </Container >
    )
}

export default Contacto