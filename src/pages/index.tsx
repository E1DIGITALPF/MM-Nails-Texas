  import type { NextPage } from 'next'
  import Head from 'next/head'
  import { NextImage } from '../components/Next/NextImage'

  import {
    BannerSection,
    BannerSectionContainer,
    BannerSectionContentContainer,
    BannerSectionImageContainer,
    Container,
    IntroductionSection,
    IntroductionSectionContainer,
    IntroductionSectionContentContainer,
    IntroductionSectionImageContainer,
    StudioSection,
    StudioSectionContainer,
    StudioSectionContentContainer,
    StudioSectionImageContainer,
    TestimonialsCardsContainer,
    TestimonialsSection,
    TestimonialsSectionContainer
  } from '../styles'

  import { RevealFade } from '../components/Animations/RevealFade'
  import { TestimonialCard } from '../components/Cards/TestimonialCard'
  import { Text } from '../components/Typography/Text'
  import { Title } from '../components/Typography/Title'

  import { MdCall } from 'react-icons/md'
  import { useTheme } from 'styled-components'
  import { PrimaryButton } from '../components/Elements/PrimaryButton'
  import { NextLink } from '../components/Next/NextLink'
  import { GradientText } from '../components/Typography/GradientText'
  import { testimonials } from '../data/data'


  const Home: NextPage = () => {

    function startChat(whatsappContact: string) {
      window.open(`http://api.whatsapp.com/send?phone=1${whatsappContact}`)
    }

    const theme = useTheme()

    return (
      <Container>
        <Head>
          <title>M&M Nails | Home</title>
          {/* @ts-ignore */}
          <meta charSet="UTF-8" />
          <meta name="description" content="Nails Studio - Texas" />
          <meta name="keywords" content="Nails Saloon Studio Texas Dipping Gel Manicure Pedicure" />
          <meta name='author' content='Para' />
          <meta name="theme-color" content="#FF49C1" />
        </Head>
        <BannerSection id='home'>
          <BannerSectionContainer>
            <BannerSectionContentContainer />
          </BannerSectionContainer>
        </BannerSection>
        <IntroductionSection id='sobremi'>
          <IntroductionSectionContainer>
            <IntroductionSectionImageContainer>
              <RevealFade>
                <NextImage
                  imgUrl='/images/emmely.jpg'
                  width={300}
                  height={450}
                  className='imageHoverFilter'
                  style={{}}
                />
              </RevealFade>
            </IntroductionSectionImageContainer>
            <IntroductionSectionContentContainer>
              <Title
                content='¿Quién soy?'
              />
              <RevealFade>
                <Text
                  content='Soy Emmely Manzanilla 💁‍♀️, fundadora de M&M Nails y apasionada experta en el cuidado de uñas 💅. Mi viaje en la belleza comenzó temprano y se ha convertido en la esencia de este emprendimiento. Me especializo en técnicas que no solo embellecen, sino que también protegen y fortalecen tus uñas.&#160;Este lugar es un sueño hecho realidad, un espacio donde la calidad y la personalización son la norma, y cada servicio es un paso hacia la expresión de tu estilo único. ¡Espero darte la bienvenida y embellecer tus manos y pies con el cuidado que merecen!.'
                />
                <NextLink
                  title='Conoce mejor mis servicios'
                  url='/servicios'
                  openInSameWindow
                />
              </RevealFade>
            </IntroductionSectionContentContainer>
          </IntroductionSectionContainer>
        </IntroductionSection>
        <StudioSection id='sobremi'>
          <StudioSectionContainer>
            <StudioSectionContentContainer>
              <Title
                content='El Estudio'
              />
              <RevealFade>
                <Text
                  content='En mi Salón de Uñas, la higiene es más que una prioridad, es mi promesa de excelencia. Realizo cada servicio con herramientas previamente esterilizadas y materiales cuidadosamente seleccionados, asegurándome de ofrecer un entorno limpio y seguro. Me enorgullezco de sostener los más altos estándares de limpieza, empleando una variedad de esmaltes y equipos de vanguardia para garantizar tu salud y satisfacción completa. Tu bienestar es el corazón de mi negocio.'
                />
              </RevealFade>
            </StudioSectionContentContainer>
            <StudioSectionImageContainer>
              <RevealFade>
                <NextImage
                  imgUrl='/images/mmstudio.png'
                  width={648}
                  height={543}
                  className='imageHoverFilter'
                  style={{}}
                />
              </RevealFade>
            </StudioSectionImageContainer>
          </StudioSectionContainer>
        </StudioSection>
        <TestimonialsSection id='loquedicen'>
          <TestimonialsSectionContainer>
            <Title
              content='Lo que dicen mis clientes'
            />
            <TestimonialsCardsContainer>
              {testimonials.map((testimonial) => (
                <TestimonialCard
                  key={testimonial.name}
                  personName={testimonial.name}
                  personPhotoUrl={testimonial.url}
                  testimonial={testimonial.testimonial}
                  cardClassName='testimonialCard'
                />
              ))}
            </TestimonialsCardsContainer>
          </TestimonialsSectionContainer>
        </TestimonialsSection>
      </Container >
    )
  }

  export default Home