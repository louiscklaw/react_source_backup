import React from 'react';
import styled, { css } from 'styled-components';
import symbol from 'assets/symbol.png';
import type { PropsWithChildren } from 'react';

const Container = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;

const Symbol = styled.div<Props>`
  width: 24px;
  height: 24px;
  background-color: #f4f4f4;
  border-radius: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  ${props =>
    props.status === 'online' &&
    css`
      &:before {
        content: '';
        position: absolute;
        right: 0;
        top: 0;
        height: 6px;
        width: 6px;
        background-color: #18f972;
        border-radius: 6px;
      }
    `}

  img {
    width: 12px;
    height: 12px;
  }
`;

interface Props {
  status?: 'online';
}

const Avatar: React.FC<PropsWithChildren<Props>> = props => {
  const { status, children } = props;

  return (
    <Container>
      <Symbol status={status}>
        <img src={symbol} />
      </Symbol>
      {children}
    </Container>
  );
};

export default Avatar;
