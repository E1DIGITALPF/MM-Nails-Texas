import { CSSProperties } from 'react';
import Link from 'next/link'
import { Container } from './styles';

interface HeaderLinkProps {
  content: string;
  url: string;
  style?: CSSProperties;
  target?: string;
  rel?: string;
  className?: string;
  onClick?: () => void;
}

export function HeaderLink({ content, url, onClick, target, rel, style, className }: HeaderLinkProps) {
  return (
    <Link href={url} passHref>
      <Container
        style={style}
        className={className}
        onClick={onClick}
      >
        {content}
      </Container>
    </Link>
  )
}