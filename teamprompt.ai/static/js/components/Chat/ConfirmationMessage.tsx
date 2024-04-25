import { PlainButton } from 'components/Button';
import React from 'react';
import styled, { css } from 'styled-components';
import Avatar from './Avatar';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 100%;
    gap: 12px;
`;

const Bubble = styled.div`
    position: relative;
    border-radius: 8px;
    padding: 12px;

    position: relative;
    border-left: 8px solid ${(props) => props.theme.colors.warningColor};
    background-color: ${(props) => props.theme.colors.warningBackgroundColor};
    display: flex;
    flex-direction: column;
    gap: 8px;
`;

const Head = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 8px;
    font-weight: 700;
`;

const Title = styled.span``;

const Description = styled.p`
    padding-left: 32px;
`;

const Actions = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 8px;
`;

const ActionButton = styled(PlainButton)<{ outlined?: boolean }>`
    height: 32px;
    border-radius: 32px;
    background-color: none;
    padding: 0 24px;
    background: ${(props) => props.theme.colors.warningColor};
    color: #ffffff;

    ${(props) =>
        props.outlined &&
        css`
            border: 1px solid ${(props) => props.theme.colors.warningColor};
            background: #ffffff;
            color: ${(props) => props.theme.colors.warningColor};
        `}
`;

export interface MessageProps {
    trailing?: string;
    description?: string;
    onConfirm?: () => void;
    onCancel?: () => void;
}

const ConfirmationMessage: React.FC<React.PropsWithChildren<MessageProps>> = (props) => {
    const { description, trailing, onCancel, onConfirm } = props;
    
    return (
        <Container>
            <Bubble>
                <Head>
                    <Avatar>
                        <Title>TeamPrompt</Title>
                    </Avatar>
                    {trailing}
                </Head>
                <Description>{description}</Description>
            </Bubble>
            <Actions>
                <ActionButton outlined onClick={onCancel}>
                    Cancel
                </ActionButton>
                <ActionButton onClick={onConfirm}>Continue</ActionButton>
            </Actions>
        </Container>
    );
};

export default ConfirmationMessage;
