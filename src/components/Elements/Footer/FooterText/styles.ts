import styled from "styled-components";

export const Container = styled.p`
  font-size: ${({ theme }) => theme.sizes.medium};
  font-weight: 300;
  color: ${({ theme }) => theme.colors.text};
  width: 92%;
  max-width: 240px;
  word-wrap: break-word;
  cursor: pointer;
  margin: 4px;
  @media (max-width: 720px) {
    font-size: ${({ theme }) => theme.sizes.normal};
  }
`;
