import styled from "styled-components";

export const Text = styled.p`
  font-size: ${({ theme }) => theme.sizes.large};
  font-weight: 300;
  text-align: justify;
  margin: 4px 0;
  color: ${({ theme }) => theme.colors.text};
  @media (max-width: 720px) {
    font-size: ${({ theme }) => theme.sizes.medium};
  }
`;
