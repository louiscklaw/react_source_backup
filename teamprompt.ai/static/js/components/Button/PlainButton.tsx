import { button } from 'components/Text';
import styled, { css } from 'styled-components';

const PlainButton = styled.button.attrs(() => ({ type: 'button' }))<{ primary?: boolean }>`
  display: flex;
  align-items: center;
  height: 32px;
  gap: 4px;
  padding: 4px 12px;
  color: ${props => props.theme.colors.textColor};
  white-space: nowrap;
  ${button}
  border-radius: 16px;
  padding: 4px 12px;
  /* background-color: ${props => props.theme.colors.inputColor}; */
  background-color: #f4f4f4;

  svg {
    fill: ${props => props.theme.colors.textColor};
    width: 14px;
    height: 14px;
  }

  ${props =>
    props.primary &&
    css`
      background-color: ${props.theme.colors.primaryBackgroundColor};
      color: ${props.theme.colors.primaryColor};

      svg {
        fill: ${props => props.theme.colors.primaryColor};
      }
    `}
`;

export default PlainButton;
