import styled, { css } from 'styled-components';
import { flexbox } from 'styled-system';
// import { MediaQueries } from 'theme/types';
import Box from './Box';
import type { FlexProps } from './types';

// const flexGap = (gap: Partial<MediaQueries>, mediaQuery: keyof MediaQueries, theme: DefaultTheme) =>
//     gap[mediaQuery] &&
//     css`
//         ${theme.mediaQueries[mediaQuery]} {
//             gap: ${gap[mediaQuery]};
//         }
//     `;

const Flex = styled(Box)<FlexProps>`
    position: relative;
    display: flex;
    ${({ gap = '16px' }) => css`
        gap: ${gap};
    `};
    ${flexbox}
`;

export default Flex;
