// styles.ts
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 320px;
  min-height: 400px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.white100};
  box-shadow: ${({ theme }) => theme.shadows.soft};
  margin: 8px;
`;

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  width: 100%;
  height: 240px;
  margin-bottom: 12px;
`;

export const Image = styled.img`
  max-width: 100%;
  height: auto;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  padding: 12px 12px 12px;
`;

export const Title = styled.h3`
  font-size: ${({ theme }) => theme.sizes.medium};
  font-weight: 500;
  color: ${({ theme }) => theme.colors.black100};
  margin-bottom: 8px;
`;

export const Text = styled.span`
  font-size: ${({ theme }) => theme.sizes.small};
  font-weight: 300;
  text-align: justify;
  color: ${({ theme }) => theme.colors.text};
`;

export const ReservationButton = styled.button`
  font-size: ${({ theme }) => theme.sizes.medium};
  color: ${({ theme }) => theme.colors.white100};
  background-color: ${({ theme }) => theme.colors.primary};
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  align-self: center;
  margin-top: 40px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary_dark};
  }
`;
