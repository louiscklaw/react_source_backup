import styled from 'styled-components';
import { flexbox } from 'styled-system';
import Box from './Box';
import type { FlexBoxProps } from './types';

const FlexBox = styled(Box)<FlexBoxProps>`
  ${flexbox}
`;

export default FlexBox;
