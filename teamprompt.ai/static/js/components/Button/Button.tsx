import type { ComponentPropsWithoutRef } from 'react';
import React from 'react';
import styled, { css } from 'styled-components';
import type { SpaceProps } from 'styled-system';
import { space } from 'styled-system';
import loading from 'assets/loading.svg';
import loadingPrimary from 'assets/loading-primary.svg';
import { button } from 'components/Text';

interface Props extends ComponentPropsWithoutRef<'button'>, SpaceProps {
  isLoading?: boolean;
  outlined?: boolean;
  empty?: boolean;
  expand?: boolean;
  sm?: boolean;
}

const StyledButton = styled.button<Props>`
  background: ${props => props.theme.colors.primaryColor};
  color: ${props => props.theme.colors.primaryTextColor};
  border-radius: 24px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 32px;
  height: 48px;
  ${button}
  ${space}
    font-weight: 600;

  &:disabled {
    background-color: #e1e1e1;
  }

  ${props =>
    props.outlined &&
    css`
      border: 1px solid ${props => props.theme.colors.primaryColor};
      background: ${props => props.theme.colors.primaryTextColor};
      color: ${props => props.theme.colors.primaryColor};
    `}

  ${props =>
    props.empty &&
    css`
      border: none;
      background: none;
      color: ${props => props.theme.colors.placeholderColor};

      &:disabled {
        background: none;
      }
    `}

    ${props =>
    props.sm &&
    css`
      min-height: 40px;
      padding: 8px 24px;
    `}

    ${props =>
    props.expand &&
    css`
      width: 100%;
    `}
`;

const Button: React.FC<Props> = props => {
  const { children, isLoading, outlined, empty, expand, sm, ...rest } = props;

  return (
    <StyledButton outlined={outlined} empty={empty} expand={expand} sm={sm} disabled={isLoading} {...rest}>
      {isLoading ? <img width="24px" src={empty || outlined ? loadingPrimary : loading} /> : children}
    </StyledButton>
  );
};

export default Button;
