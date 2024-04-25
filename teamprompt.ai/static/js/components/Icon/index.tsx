import React from 'react';
import styled from 'styled-components';
import type { TypographyProps, SpaceProps, ColorProps, LayoutProps } from 'styled-system';
import { typography, space, layout } from 'styled-system';

interface Props extends TypographyProps, SpaceProps, ColorProps, LayoutProps {
  name: string;
  layer?: number;
  className?: string;
  title?: string;
  style?: any;
}

const TextSpan = styled.span<any>`
  font-size: 24px;
  color: ${props => props.color || '#ffffff'};
  ${typography};
  ${space};
  ${layout};
`;

const Icon: React.FC<Props> = props => {
  const { layer = 5, className = '', title, name, ...textProps } = props;

  const createArray = number => Array.from({ length: number }, (_, i) => i);
  return (
    <TextSpan title={title} className={`icon-span icon-${name.replace('icon-', '')} ${className}`} {...textProps}>
      {createArray(layer).map(i => (
        <span key={i} className={`path${i + 1}`} />
      ))}
    </TextSpan>
  );
};

export default Icon;
