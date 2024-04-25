import React, { useRef } from 'react';
import styled from 'styled-components';
import { IconButton } from 'components/Button';
import { ReactComponent as Send } from 'assets/icons/send.svg';
import { isBrowser } from 'react-device-detect';
import { Textarea } from 'components/Form';
import { updateTextareaHeight } from 'utils';

const MessageInputWrapper = styled.form`
    border-top: solid 1px #e1e1e1;
    padding: 12px;
    display: flex;
    align-items: flex-end;
    position: relative;
    gap: 12px;
`;

const StyledTextarea = styled(Textarea)`
    padding: 12px;
    min-height: 40px;
    max-height: 112px;
`;

interface Props {
    message: string;
    isLoading: boolean;
    onSendMessage: (message: string) => void;
    onChangeMessage: (message: string) => void;
}

const ChatInput: React.FC<Props> = (props) => {
    const { message, isLoading, onSendMessage, onChangeMessage } = props;
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const allowSend = !isLoading && message?.trim().length !== 0;

    const onMessageChange: React.ChangeEventHandler<HTMLTextAreaElement> = (event) => {
        const value = event.currentTarget.value;
        onChangeMessage(value);
        updateTextareaHeight(event);
    };

    const onMessageKeyDown: React.KeyboardEventHandler<HTMLTextAreaElement> = (event) => {
        if (!allowSend) return;
        if (isBrowser && event.key === 'Enter' && !event.shiftKey) {
            // Enter key was pressed without shift key
            onSendMessage(message);
            event.preventDefault();
        }
    };

    const onClickSend: React.MouseEventHandler<HTMLButtonElement> = (e) => {
        e?.preventDefault();
        if (!allowSend) return;
        onSendMessage(message);
    };

    return (
        <MessageInputWrapper>
            <StyledTextarea
                ref={textareaRef}
                placeholder="Ask a question or Give me a command. Be Specific."
                value={message}
                onChange={onMessageChange}
                onKeyDown={onMessageKeyDown}
            />
            <IconButton disabled={!allowSend} primary solid icon={Send} type="submit" onClick={onClickSend} />
        </MessageInputWrapper>
    );
};

export default ChatInput;
