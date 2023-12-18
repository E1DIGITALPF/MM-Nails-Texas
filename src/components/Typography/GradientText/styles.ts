import Gradient from "rgt";
import styled from "styled-components";

interface GradientTextProps {
  textType: "title" | "subtitle" | "text";
}

export const GradientText = styled(Gradient)<GradientTextProps>`
  color: ${({ theme }) => theme.colors.black100};
  @media (max-width: 1080px) {
    font-size: ${({ theme, textType }) =>
      textType === "title"
        ? theme.sizes.xlarge
        : textType === "subtitle"
        ? theme.sizes.medium
        : theme.sizes.normal};
  }
  @media (max-width: 720px) {
    font-size: ${({ theme }) => theme.sizes.large};
  }
`;
