import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  background-color: ${({ theme }) => theme.colors.white100};
  & .headerScrolling {
    position: fixed;
    background-color: ${({ theme }) => theme.colors.primary};
    z-index: 999;
    padding: 0 12px;
    transition: all 0.8s ease;
  }
  & .headerNotScrolling {
    background-color: ${({ theme }) => theme.colors.primary};
    transition: all 0.8s ease;
    padding: 8px 12px;
  }
  & .animatedTopScroll {
    right: 24px;
    transition: all 0.3s ease;
    background-color: ${({ theme }) => theme.colors.primary_light};
    color: ${({ theme }) => theme.colors.black500};
  }
  
  & .normalTopScroll {
    right: -80px;
    transition: all 0.3s ease;
  }
  &.lightTitle {
    color: ${({ theme }) => theme.colors.white100};
  }
  & .lightText {
    color: ${({ theme }) => theme.colors.silver100};
  }

  &  .rgbBackground{
    background: linear-gradient('right-to-left', 'cyan', 'red');
  }

  &  .glassEffect {
    backdrop-filter: blur(8px) saturate(120%);
    -webkit-backdrop-filter: blur(8px) saturate(120%);
    background-color: rgba(17, 25, 40, 0.54);
    transition: all 1s ease;
  }

`;