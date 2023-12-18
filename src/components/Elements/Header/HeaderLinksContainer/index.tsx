import { CSSProperties, ReactNode } from 'react';
import { Container } from './styles';

interface HeaderLinksContainerProps {
  children: ReactNode;
  style?: CSSProperties;
  className?: string;
}

export function HeaderLinksContainer({
  children,
  style,
  className
}: HeaderLinksContainerProps) {
  return (
    <Container
      style={style}
      className={className}
    >
      {children}
    </Container>
  )
}