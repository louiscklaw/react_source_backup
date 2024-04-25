import styled from 'styled-components';
import { grid, flexbox } from 'styled-system';
import Box from './Box';
import type { GridProps } from './types';

const Grid = styled(Box)<GridProps>`
    display: grid;
    ${grid}
    ${flexbox}
`;

Grid.defaultProps = {
    gridTemplateColumns: {
        _:  'repeat(4, 1fr)',
        md: 'repeat(8, 1fr)',
        lg: 'repeat(12, 1fr)',
    },
    gridGap: 32,
};

export default Grid;
