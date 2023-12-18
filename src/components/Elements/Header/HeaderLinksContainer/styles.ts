import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: 80%;
  flex-direction: row;
  margin: 0 auto;
  justify-content: center;
  @media (max-width: 720px) {
    display: none;
  }
`;