import styled from "styled-components";

export const TextLink = styled.a`
  font-size: ${({ theme }) => theme.sizes.large};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  @media (max-width: 1080px) {
    font-size: ${({ theme }) => theme.sizes.medium};
  }
`;
