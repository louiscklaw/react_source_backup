import styled from 'styled-components';
import { background, border, layout, position, space, color, display } from 'styled-system';
import type { BoxProps } from './types';

const Box = styled.div<BoxProps>`
  ${background}
  ${border}
    ${layout}
    ${position}
    ${space}
    ${color}
    ${display}
`;

export default Box;
