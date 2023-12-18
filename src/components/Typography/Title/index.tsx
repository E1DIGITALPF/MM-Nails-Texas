import React, { CSSProperties } from 'react';
import { Title as TitleComponent } from './styles';


interface TitleProps {
  content: string;
  style?: CSSProperties;
  className?: string;
}

export function Title({ content, style, className }: TitleProps) {
  return (
    <TitleComponent
      style={style}
      className={className}
    >
      {content}
    </TitleComponent>
  )
}