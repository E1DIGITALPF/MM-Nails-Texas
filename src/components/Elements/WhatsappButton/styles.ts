import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.colors.white100};
  position: fixed;
  bottom: 16vh;
  right: -80px;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  z-index: 1000;
`;