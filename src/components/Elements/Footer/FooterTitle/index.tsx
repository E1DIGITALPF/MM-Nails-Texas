import { CSSProperties } from 'react';
import { Container } from './styles';

interface FooterTitleProps {
  content: string;
  style?: CSSProperties;
  className?: string;
}

export function FooterTitle({ content, style, className }: FooterTitleProps) {
  return (
    <Container
      style={style}
      className={className}
    >
      {content}
    </Container>
  )
}