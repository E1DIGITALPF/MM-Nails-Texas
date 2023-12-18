import React from 'react';
import { Container } from './styles';

interface GoogleMapProps {
    addressUrl: string
    size?: "small" | "medium" | "large";
  }

export function GoogleMap({size, addressUrl} : GoogleMapProps) {
return (
  <Container
    src={addressUrl}
    size={size}
    data-testid='googlemap-id'
  />
)
}