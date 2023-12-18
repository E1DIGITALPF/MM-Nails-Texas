import styled from "styled-components";

interface GoogleMapProps {
  size?: "small" | "medium" | "large";
}

export const Container = styled.iframe<GoogleMapProps>`
  width: ${({ size }) =>
    size === "small" ? "480px" : size === "large" ? "920px" : "640px"};
  height: 400px;
  border: 0;
  @media (max-width: 720px) {
    width: 92%;
    margin: 12px auto;
  }
`;
