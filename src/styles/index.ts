import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary_light};
  & .testimonialCard{
    width: 320px;
    height: 400px;
    margin: 8px;
    @media (max-width: 1080px) {
    width: 56%;
    margin: 12px auto;
  }
    @media (max-width: 720px) {
    width: 88%;
    margin: 12px auto;
  }
  }

  &  .whatsappButton{
    background-color: #25d366;
    color: ${({ theme }) => theme.colors.white100};
  }


`;

export const BannerSection = styled.section`
  display: flex;
  width: 100%;
  min-height: 120vh;
  @media(max-width: 1440px){
     min-height: 90vh;
  } 
  @media(max-width: 1080px){
    min-height: 56vh;
  }
  @media(max-width: 720px){
    min-height: 40vh;
  }
`;

export const BannerSectionContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  background-image: url("/images/banner.png");
  background-repeat: no-repeat;
  background-size: cover;
`;

export const BannerSectionContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  & span {
    font-weight: 800;
    font-size: ${({ theme }) => theme.sizes.huge}
  }
  & p {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 500;
    margin: -8px auto 24px;
  }
  @media (max-width: 1080px) {
    width: 100%;
    padding: 16px;
    & h1 {
      text-align: center;
    
    }
  }
`;
export const BannerSectionImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px auto 0;
  width: 50%;
  @media (max-width: 1080px) {
    width: 100%;
    justify-content: center;
  }
`;

export const IntroductionSection = styled.section`
  display: flex;
  width: 100%;
  min-height: 40vh;
  background-color: ${({ theme }) => theme.colors.white100};
`;

export const IntroductionSectionContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 1900px;
  margin: 0 auto;
  padding: 40px;
  @media (max-width: 1080px) {
    flex-direction: column-reverse;
  }
`;
export const IntroductionSectionContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px;
  width: 50%;
  & h1 {
    color: ${({ theme }) => theme.colors.black100};
    font-weight: 800;
  }
  & p {
    color: ${({ theme }) => theme.colors.black500};
    margin: 24px auto;
  }
  @media (max-width: 1080px) {
    width: 100%;
    padding: 16px;
    & h1 {
      text-align: center;
    }
  }
`;
export const IntroductionSectionImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  padding: 40px;
  width: 50%;
  @media (max-width: 1080px) {
    width: 100%;
    padding: 24px 0 40px;
  }
`;

export const StudioSection = styled.section`
  display: flex;
  width: 100%;
  min-height: 40vh;
  margin-top: -40px;
  background-color: ${({ theme }) => theme.colors.white200};
`;

export const StudioSectionContainer = styled.div`
  display: flex;
  width: 1900px;
  margin: 0 auto;
  padding: 40px;
  @media (max-width: 1080px) {
    flex-direction: column;
  }
  `;
export const StudioSectionContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px;
  width: 50%;
  & h1 {
    color: ${({ theme }) => theme.colors.black100};
    font-weight: 800;
  }
  & p {
    color: ${({ theme }) => theme.colors.black500};
    margin: 24px auto;
  }
  @media (max-width: 1080px) {
    width: 100%;
    padding: 16px;
    & h1 {
      text-align: center;
    }
  }
  `;
export const StudioSectionImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  padding: 40px;
  width: 50%;
  @media (max-width: 1080px) {
    width: 100%;
    padding: 0 16px;
    justify-content: center;
  }
`;




export const TestimonialsSection = styled.section`
  display: flex;
  width: 100%;
  min-height: 80vh;
  background-color: ${({ theme }) => theme.colors.white100};
`;

export const TestimonialsSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1900px;
  margin: 0 auto;
  padding: 80px 40px;
  & h1 {
    color: ${({ theme }) => theme.colors.black100};
    font-weight: 800;
    text-align: center;
  }
  @media (max-width: 1080px) {
    flex-direction: column;
  }
`;

export const TestimonialsCardsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  margin: 56px auto 0;
  @media (max-width: 1080px) {
    flex-direction: column;
  }
`;