import styled from "styled-components";

export const SubTitle = styled.h3`
  font-size: ${({ theme }) => theme.sizes.xxlarge};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.black100};
  @media (max-width: 1080px) {
    font-size: ${({ theme }) => theme.sizes.xlarge};
  }
  @media (max-width: 720px) {
    font-size: ${({ theme }) => theme.sizes.large};
  }
`;
