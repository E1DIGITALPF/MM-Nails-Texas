import { CSSProperties, ReactNode } from 'react';
import { Container } from './styles';

interface HeaderLogoContainerProps {
  children: ReactNode;
  style?: CSSProperties;
  className?: string;

}

export function HeaderLogoContainer({
  children,
  style,
  className
}: HeaderLogoContainerProps) {
  return (
    <Container
      style={style}
      className={className}
    >
      {children}
    </Container>
  )
}