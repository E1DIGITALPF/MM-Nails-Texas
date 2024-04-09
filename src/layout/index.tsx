import { ReactNode, useEffect, useState } from 'react';
import { MdArrowUpward } from 'react-icons/md';
import { useTheme } from 'styled-components';
import { Divider } from '../components/Elements/Divider';
import { Drawer } from '../components/Elements/Drawer';
import { DrawerButton } from '../components/Elements/DrawerButton';
import { Footer } from '../components/Elements/Footer';
import { FooterAttach } from '../components/Elements/Footer/FooterAttach';
import { FooterFirstSection } from '../components/Elements/Footer/FooterFirstSection';
import { FooterLink } from '../components/Elements/Footer/FooterLink';
import { FooterSecondSection } from '../components/Elements/Footer/FooterSecondSection';
import { FooterTitle } from '../components/Elements/Footer/FooterTitle';
import { Header } from '../components/Elements/Header';
import { HeaderAuthenticationContainer } from '../components/Elements/Header/HeaderAuthenticationContainer';
import { HeaderLink } from '../components/Elements/Header/HeaderLink';
import { HeaderLinksContainer } from '../components/Elements/Header/HeaderLinksContainer';
import { HeaderLogoContainer } from '../components/Elements/Header/HeaderLogoContainer';
import { Logo } from '../components/Elements/Logo';
import { PrimaryButton } from '../components/Elements/PrimaryButton';
import { SocialIcons } from '../components/Elements/SocialIcons';
import { TopScrollButton } from '../components/Elements/TopScrollButton';
import { Text } from '../components/Typography/Text';
import { Container } from './styles';

import { NextProgressComponent } from '../components/Next/NextProgress'
import { WhatsappButton } from '../components/Elements/WhatsappButton';
import { FooterThirdSection } from '../components/Elements/Footer/FooterThirdSection';

interface LayoutProps {
    children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    const theme = useTheme();
  
    const [toggleDrawer, setToggleDrawer] = useState(false);
    const [headerAnimation, setHeaderAnimation] = useState(false);
    const [scrollTopAnimation, setScrollTopAnimation] = useState(false);
  
    function handleToggleDrawer() {
      setToggleDrawer(!toggleDrawer);
    }
  
    function scrollHeaderAnimation() {
      if (typeof window !== 'undefined') {
        const topPos = window.scrollY;
        setHeaderAnimation(topPos > 20);
      }
    }
  
    function scrollTopScrollButtonAnimation() {
      if (typeof window !== 'undefined') {
        const topPos = window.scrollY;
        setScrollTopAnimation(topPos > 500);
      }
    }
  
    useEffect(() => {
      function handleScroll() {
        scrollHeaderAnimation();
        scrollTopScrollButtonAnimation();
      }
  
      window.addEventListener('scroll', handleScroll);
  
      handleScroll();
  
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  
    return (
        <Container id='top'>
            <NextProgressComponent
                color={theme.colors.white100}
            />
            <TopScrollButton
                ariaLabel='Volver al tope'
                className={scrollTopAnimation ? 'animatedTopScroll' : 'normalTopScroll'}
                icon={<MdArrowUpward />}
                elementReferenceId='top'
            />
            <WhatsappButton
                ariaLabel='Chateemos'
                className={scrollTopAnimation ? 'animatedTopScroll' : 'normalTopScroll'}
                whatsappContact='8324507722'
            />
            <Header
                className={headerAnimation ? 'headerScrolling glassEffect' : 'headerNotScrolling'}
            >
                {toggleDrawer &&
                    <Drawer
                        toggleDrawer={handleToggleDrawer}
                        direction='top'
                        style={{
                            backgroundColor: theme.colors.primary
                        }}
                    >
                        <HeaderLink
                            content='Home'
                            url='/'
                            onClick={handleToggleDrawer}
                        />
                        <HeaderLink
                            content='Servicios'
                            url='/servicios'
                            onClick={handleToggleDrawer}
                        />
                        <HeaderLink
                            content='Contacto'
                            url='/contacto'
                            onClick={handleToggleDrawer}
                        />
                        <HeaderLink
                            content='Reserva tu cita'
                            url='https://api.whatsapp.com/send?phone=18324507722'
                            target='_blank'
                            rel='noopener noreferrer'
                        />
                    </Drawer>
                }
                <DrawerButton
                    toggleDrawer={handleToggleDrawer}
                />
                <HeaderLogoContainer>
                    <Logo
                        imageUrl='/logo.svg'
                        size={headerAnimation ? 'small' : 'large'}
                    />
                </HeaderLogoContainer>
                <HeaderLinksContainer>
                    <HeaderLink
                        content='Home'
                        url='/'
                    />
                    <HeaderLink
                        content='Servicios'
                        url='/servicios'
                    />
                    <HeaderLink
                        content='Contacto'
                        url='/contacto'
                    />
                    <HeaderLink
                        content='Reserva tu cita'
                        url='https://api.whatsapp.com/send?phone=18324507722'
                        target='_blank'
                        rel='noopener noreferrer'
                    />
                </HeaderLinksContainer>
            </Header>
            <main><>{children}</></main>
            <Footer
                style={{
                    backgroundColor: theme.colors.primary
                }}
            >
                <FooterFirstSection>
                    <FooterTitle
                        content='Acceso rápido'
                    />
                    <FooterLink
                        content='Servicios'
                        url='/servicios'
                    />
                    <FooterLink
                        content='Contacto'
                        url='/contacto'
                    />
                </FooterFirstSection>
                <FooterSecondSection>
                    <FooterTitle
                        content='Redes sociales'
                    />
                    <SocialIcons
                        instagramUrl='https://www.instagram.com/mmnails.tx/'
                        iconsSize='large'
                        iconsStyle={{ color: theme.colors.white500 }}
                    />
                </FooterSecondSection>
            </Footer>
            <FooterAttach
                style={{
                    backgroundColor: theme.colors.primary,
                }}
            >
                <Divider />
                <Text
                    content='M&M Nails LLC - © Copyright  2024'
                    style={{
                        color: theme.colors.white100,
                        fontSize: theme.sizes.small
                    }}

                />
            </FooterAttach>
        </Container>
    )
}