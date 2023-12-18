import { CSSProperties } from 'react';
import Link from 'next/link'
import { Container } from './styles';

interface FooterLinkProps {
  content: string;
  url: string;
  style?: CSSProperties;
  className?: string;
}

export function FooterLink({ content, url, style, className }: FooterLinkProps) {
  return (
    <Link href={url} passHref>
      <Container
        style={style}
        className={className}
      >
        {content}
      </Container>
    </Link>
  )
}