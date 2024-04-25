import React, { useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import { ReactComponent as Copy } from 'assets/icons/copy.svg';
import { ReactComponent as More } from 'assets/icons/more-horizontal.svg';
import { Button, IconButton } from 'components/Button';
import { ActionButton, ActionMenu } from '../Action';
import TypingIndicator from 'components/TypingIndicator';
import { copyText } from 'utils';
import AddPromptModal from 'components/Modal/AddPromptModal';
import ReactMarkdown from 'react-markdown';
import { toast } from 'react-toastify';
import remarkGfm from 'remark-gfm';
import useToggle from 'hooks/useToggle';
import { useModalContext } from 'provider/ModalProvider';
// import { useLongPress, LongPressEvent } from 'hooks/useLongPress';

const CONTENT_HEIGHT = 500;

const MenuIconButton = styled(IconButton).attrs({ primary: true, minimize: true })`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    padding: 6px;
    background-color: #eeebf5;

    svg {
        width: 20px;
        height: 20px;
    }
`;

const MessageActionMenu = styled(ActionMenu)`
    position: absolute;
    top: 50%;
    transform: translateY(20px);
`;

const Bubble = styled.div<Omit<Props, 'disabledExpand'>>`
    position: relative;
    border-radius: 15px;
    min-width: 78px;
    padding: 16px;
    letter-spacing: -0.02;
    max-width: 80%;
    white-space: pre-line;
    position: relative;

    ${(props) =>
        props.from === 'user' &&
        css`
            border-bottom-right-radius: 0;
            background-color: #eeebf5;
            align-self: flex-end;

            ${MenuIconButton} {
                left: -40px;
            }

            ${MessageActionMenu} {
                left: -40px;
            }
        `}

    ${(props) =>
        props.from === 'response' &&
        css`
            border-top-left-radius: 0;
            background-color: #f4f4f4;
            align-self: flex-start;

            ${MenuIconButton} {
                right: -40px;
            }

            ${MessageActionMenu} {
                right: 0px;
            }
        `}
`;

const Content = styled.div<{ expanded?: boolean }>`
    max-height: ${CONTENT_HEIGHT}px;
    overflow: hidden;

    ${(props) =>
        props.expanded &&
        css`
            overflow: auto;
            max-height: initial;
        `}
`;

const FormattedMessage = styled(ReactMarkdown)`
    ${css`
        pre {
            padding: 8px;
            background-color: #ffffff;
            border-radius: 8px;
            white-space: pre-wrap;
            word-wrap: break-word;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            background: #ffffff;

            th,
            td {
                border: 1px solid #ddd;
                padding: 8px;
                text-align: left;
            }

            th {
                font-weight: bold;
            }
        }

        ul,
        ol {
            padding-left: 24px;
            line-height: 1;
            margin-bottom: -1em;
        }

        ol > li > p,
        ol > li > p + ul {
            margin-top: -1em;
        }
        li:has(> *) {
            margin-bottom: -1em;
        }
    `};
`;

const ReadMore = styled(Button)`
    padding: 0;
    margin-top: 16px;
    height: 22px;
    color: ${({ theme }) => theme.colors.primaryColor};
`;

interface Props {
    from: 'user' | 'response';
    text?: string;
    isTyping?: boolean;
    disabledExpand?: boolean;
    disabledActions?: boolean;
}

const MessageBubble: React.FC<Props> = ({ text, from, isTyping, disabledExpand, disabledActions }) => {
    const contentRef = useRef<HTMLDivElement>(null);
    const [expanded, setExpanded] = useState(false);
    const [longContent, setLongContent] = useState(false);
    const [showMenu, setShowMenu, menuRef, buttonRef] = useToggle<HTMLDivElement, HTMLButtonElement>();
    const { openModal } = useModalContext();

    // const onLongPress = useCallback((event: LongPressEvent) => {
    //     if (event.isLongPress && from === 'user') {
    //         console.log("isLongPress");
    //     }
    // }, [from]);
    // const longPress = useLongPress(onLongPress);

    useEffect(() => {
        setLongContent(contentRef.current ? contentRef.current.scrollHeight >= CONTENT_HEIGHT : false);
    }, []);

    const onExpand = () => {
        setExpanded(true);
    };

    const onCopy = () => {
        console.log('c');
        if (!text) return;
        copyText(text);
        toast('Copied to clipboard', {
            toastId: 'copy'
        });
        setShowMenu(false);
    };

    const onGenerate = () => {
        console.log('g');
        if (!text) return;
        openModal(<AddPromptModal categoryId={null} originalPrompt={text} />);
        setShowMenu(false);
    };

    const onMenuClick = () => {
        if (from === 'response') onCopy();
        else setShowMenu((i) => !i);
    };

    if (isTyping) {
        return (
            <Bubble from={from}>
                <Content ref={contentRef} expanded={disabledExpand || expanded}>
                    <TypingIndicator />
                </Content>
            </Bubble>
        );
    }

    return (
        <Bubble from={from}>
            <Content ref={contentRef} expanded={disabledExpand || expanded}>
                {from === 'response' && text && (
                    <FormattedMessage
                        components={{
                            table: ({ children }) => (
                                <div style={{ overflow: 'auto' }}>
                                    <table>{children}</table>
                                </div>
                            )
                        }}
                        remarkPlugins={[remarkGfm]}
                    >
                        {text}
                    </FormattedMessage>
                )}
                {from === 'user' && text}
            </Content>
            {!disabledExpand && longContent && !expanded && (
                <ReadMore empty onClick={onExpand}>
                    Read more
                </ReadMore>
            )}
            {!disabledActions && (
                <MenuIconButton icon={from === 'response' ? Copy : More} onClick={onMenuClick} ref={buttonRef} />
            )}
            {showMenu && (
                <MessageActionMenu ref={menuRef}>
                    <ActionButton onClick={onCopy}>Copy text</ActionButton>
                    <ActionButton onClick={onGenerate}>Save as prompt</ActionButton>
                </MessageActionMenu>
            )}
        </Bubble>
    );
};

export default MessageBubble;
