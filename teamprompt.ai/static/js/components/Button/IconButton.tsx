/* eslint-disable indent */
import Icon from 'components/Icon';
import { button } from 'components/Text';
import type { ComponentPropsWithoutRef } from 'react';
import React from 'react';
import styled, { css } from 'styled-components';

const StyledButton = styled.button<{ primary?: boolean; solid?: boolean; minimize?: boolean }>`
  background: none;
  border-radius: 24px;
  display: flex;
  gap: 8px;
  justify-content: center;
  align-items: center;
  min-height: 40px;
  min-width: 40px;
  padding: 8px;
  cursor: pointer;

  ${props =>
    props.solid &&
    props.primary &&
    css`
      background: ${props.theme.colors.primaryColor};
    `};

  && svg {
    fill: ${({ primary, solid, theme: { colors } }) =>
      primary ? (solid ? colors.primaryTextColor : colors.primaryColor) : colors.textColor};
  }

  ${props =>
    props.minimize &&
    css`
      min-height: 24px;
      min-width: 24px;
      padding: 0;
    `}

  &:disabled {
    background-color: #e1e1e1;
    cursor: not-allowed;
  }
`;

const Text = styled.span<{ primary?: boolean; solid?: boolean }>`
  ${button}
  font-weight: 600;
  color: ${({ primary, solid, theme }) =>
    primary ? (solid ? theme.colors.primaryTextColor : theme.colors.primaryColor) : theme.colors.textColor};
`;

interface Props extends ComponentPropsWithoutRef<'button'> {
  icon?: React.FC; //legacy
  name?: string;
  primary?: boolean;
  solid?: boolean;
  minimize?: boolean;
  title?: string;
}

const IconButton = React.forwardRef<HTMLButtonElement, Props>((props, ref) => {
  const { title, icon: IconComponent, onClick, name, ...rest } = props;

  return (
    <StyledButton onClick={onClick} ref={ref} {...rest}>
      {IconComponent && <IconComponent />}
      {name && <Icon name={name} />}
      {title && <Text {...rest}>{title}</Text>}
    </StyledButton>
  );
});

IconButton.displayName = 'IconButton';

export default IconButton;
