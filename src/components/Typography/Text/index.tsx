
import { CSSProperties } from 'react';
import { Text as TextComponent } from './styles';

interface TextProps {
  content: string;
  style?: CSSProperties;
  className?: string;
}

export function Text({ content, style, className }: TextProps) {
  return (
    <TextComponent
      style={style}
      className={className}
    >
      {content}
    </TextComponent>
  )
}