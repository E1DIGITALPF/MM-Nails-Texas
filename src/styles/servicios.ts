import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const InfoSection = styled.section`
  display: flex;
  width: 100%;
  min-height: 24vh;
`;

export const InfoSectionContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px 40px;
  width: 1400px;
  margin: 0 auto;
  
  & span, p {
    margin-top: 16px;
    width: 80%;
    @media (max-width: 1080px) {
      width: 100%;
    }
  }
  @media(max-width: 1080px) {
    padding: 40px 80px;
  }
  @media(max-width: 720px) {
    padding: 40px;
  }
`;

export const CardsSection = styled.section`
  display: flex;
  width: 100%;
`;

export const CardsSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 40px 80px;
  width: 1200px;
  margin: 0 auto;
  @media (max-width: 1080px) {
    width: 90%;
  }
  @media (max-width: 720px) {
    padding: 0;
  }
`;

export const CardsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  width: 100%;
  margin-bottom: 40px;
  @media (max-width: 720px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const CardImage = styled.img`
  max-width: 100%;
  height: auto;
`;
