import styled from "styled-components";

export const Container = styled.footer`
  width: 100%;
  min-height: 20vh;
  background-color: ${({ theme }) => theme.colors.primary};
  display: flex;
  justify-content: center;
  margin: 0 auto;
  padding: 32px;
  @media (max-width: 1440px) {
    display: grid;
    grid-template-rows: 2fr;
    grid-template-columns: repeat(2, 2fr);
    grid-template-areas:
    "First Second"
    "Third Fourth";
  }
  @media (max-width: 720px) {
    grid-template-rows: repeat(1, 1fr);
    grid-template-columns: 1fr;
    grid-template-areas: "First" "Second" "Third" "Fourth";
  }
  `;

export const FirstContainer = styled.div`
  display: flex;
  min-width: 320px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  grid-area: First;
  `;

export const SecondContainer = styled.div`
  display: flex;
  min-width: 320px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  grid-area: Second;
  `;

export const ThirdContainer = styled.div`
  display: flex;
  min-width: 320px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  grid-area: Third;
  `;

export const FourthContainer = styled.div`
  display: flex;
  min-width: 320px;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  grid-area: Fourth;
`;

