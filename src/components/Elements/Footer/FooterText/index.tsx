import{ CSSProperties } from 'react';
import { Container } from './styles';

interface FooterTextProps{
    content: string;
    style?: CSSProperties;
    className?: string;
}

export function FooterText({content, style, className} : FooterTextProps) {
return (
  <Container
    style={style}
    className={className}
  >
      {content}
  </Container>
)
}