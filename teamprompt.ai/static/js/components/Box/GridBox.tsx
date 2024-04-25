import styled from 'styled-components';
import { grid, alignSelf, justifySelf, order } from 'styled-system';
import Box from './Box';
import type { GridBoxProps } from './types';

const GridBox = styled(Box)<GridBoxProps>`
    ${grid}
    ${alignSelf}
    ${justifySelf}
    ${order}
`;

GridBox.defaultProps = {
    gridColumn: 'span 1',
};

export default GridBox;
