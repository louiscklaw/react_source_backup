import TypingIndicator from 'components/TypingIndicator';
import type { ComponentPropsWithoutRef } from 'react';
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    border-radius: 8px;
    width: 100%;
    min-height: 48px;
    margin-bottom: 24px;
    display: flex;
    gap: 4px;
    align-items: center;
    background-color: ${(props) => props.theme.colors.inputColor};

    svg {
        stroke: ${(props) => props.theme.colors.textColor};
    }
`;

const StyledInput = styled.input`
    background: none;
    padding: 12px 16px;
    min-height: 48px;
    flex: 1;

    &::placeholder {
        color: ${(props) => props.theme.colors.placeholderColor};
    }
`;

interface Props extends ComponentPropsWithoutRef<'input'> {
    leading?: React.ReactNode;
    trailing?: React.ReactNode;
    containerStyle?: React.CSSProperties;
    isLoading?: boolean;
}

const Input: React.FC<Props> = (props) => {
    const { leading, trailing, containerStyle, isLoading, ...rest } = props;
    
    return (
        <Container
            style={{ ...containerStyle, paddingLeft: leading ? '16px' : '0', paddingRight: trailing ? '16px' : '0' }}
        >
            {isLoading ? (
                <TypingIndicator />
            ) : (
                <>
                    {leading}
                    <StyledInput {...rest} />
                    {trailing}
                </>
            )}
        </Container>
    );
};

export default Input;
