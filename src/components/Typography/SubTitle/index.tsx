
import { CSSProperties } from 'react';
import { SubTitle as SubTitleComponent } from './styles';

interface SubTitleProps {
  content: string;
  style?: CSSProperties
  className?: string;
}

export function SubTitle({ content, style, className }: SubTitleProps) {
  return (
    <SubTitleComponent
      style={style}
      className={className}
    >
      {content}
    </SubTitleComponent>
  )
}