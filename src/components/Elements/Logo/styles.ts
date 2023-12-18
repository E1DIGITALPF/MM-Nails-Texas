import styled from "styled-components";

interface LogoProps {
  size?: "small" | "medium" | "large";
}

export const Container = styled.div`
  display: flex;
  justify-content: center;
  cursor: pointer;
  align-items: center;
  width: 112px;
  height: 112px;
`;

export const LogoImage = styled.img<LogoProps>`
  width: ${(props) =>
    props.size === "large" ? "112px" : props.size === "small" ? "50px" : "100px"};
  height: auto;
`;

