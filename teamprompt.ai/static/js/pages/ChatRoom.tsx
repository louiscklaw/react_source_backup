import React, { useCallback, useEffect, useState } from 'react';
import { generatePath, useLocation, useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Page, Body } from 'components/Layout';
import { IconButton } from 'components/Button';
import { useModalContext } from 'provider/ModalProvider';
import Header from 'components/Header';
import type { AnswerStatus, Conversation, Message } from 'types';
import apiService from 'utils/apiService';
import { ChatInput, ChatSuggestion, ChatConversation } from 'components/Chat';
import useCategoryStore from 'store';
import Avatar from 'components/Chat/Avatar';
import useSplitParagraph from 'hooks/useSplitParagraph';
import { useConfirmationMessageContext } from 'provider/ConfirmationMessageProvider';
import { useDrawerContext } from 'provider/DrawerProvider';
import ChatRoomHistoryDrawer from 'components/Drawer/ChatRoomHistoryDrawer';
import AlertModal from 'components/Modal/AlertModal';

const SEARCH_TEXT_LIMIT = 200;

const ChatRoomTitle = styled.div`
    height: 56px;
    border-bottom: solid 1px #e1e1e1;
    padding: 20px;
    display: flex;
    align-items: center;
    font-size: 16px;
    gap: 4px;
    font-weight: 700;

    svg {
        fill: #2e2e2e;
    }
`;

const NotificationBar = styled.div`
    height: 32px;
    background-color: ${(props) => props.theme.colors.warningBackgroundColor};
    padding: 0 16px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ChatRoom: React.FC = () => {
    const { conversationId: conversationIdFromQuery } = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    const { session } = useCategoryStore();
    const [conversationId, setConversationId] = useState<string | null>(conversationIdFromQuery || null);
    const [conversation, setConversation] = useState<Conversation | null>(null);
    const [messages, setMessages] = useState<Message[]>([]);
    const [inputtingMessage, setInputtingMessage] = useState<string>('');
    const [searchingKeyword, setSearchingKeyword] = useState('');
    const [streamingAnswer, setStreamingAnswer] = useState('');
    const [answerStatus, setAnswerStatus] = useState<AnswerStatus>('completed');
    const [isSplittingMessage, setIsSplittingMessage] = useState(false);
    const { openModal, closeModal } = useModalContext();
    const { openDrawer } = useDrawerContext();
    const { getFirstSegment, getNextSegment, clearSegments } = useSplitParagraph();
    const { waiting, showMessage } = useConfirmationMessageContext();

    useEffect(() => {
        if (conversationIdFromQuery) setConversationId(conversationIdFromQuery);
    }, [conversationIdFromQuery]);

    useEffect(() => {
        if (conversationId && conversation?.conversationId !== conversationId) {
            apiService
                .get<{ conversation: Conversation; messages: Message[] }>(
                    `/v1/conversation/conversations/${conversationId}`
                )
                .then(({ conversation, messages: fullMessages }) => {
                    setConversation(conversation);
                    setMessages(fullMessages);
                })
                .catch(() => {
                    openModal(
                        <AlertModal
                            text="Invalid path."
                            onConfirm={() => {
                                closeModal();
                                navigate('/chat-room', { replace: true });
                            }}
                        />
                    );
                });
        }
    }, [conversationId]);

    const sendMessageStream = async (message: string, onComplete?: () => void) => {
        if (answerStatus !== 'completed' || message?.trim().length === 0) return;
        setMessages((prev) => [...(prev || []), { type: 'question', text: message }]);
        setInputtingMessage('');
        setSearchingKeyword('');
        setAnswerStatus('waiting');

        let uncompletedAnswer = '';
        const isCreateChat = !conversationId;
        await apiService.fetchSSE(
            isCreateChat
                ? `/v1/conversation/conversations`
                : `/v1/conversation/conversations/${conversationId}/messages`,
            { prompt: message, stream: true },
            {
                onopen: async () => {
                    setAnswerStatus('streaming');
                },
                onmessage: (event) => {
                    const { conversationId: newConversationId, message: answerSegment } = JSON.parse(event.data);
                    if (event.event === 'stream') {
                        uncompletedAnswer += answerSegment;
                        setStreamingAnswer(uncompletedAnswer);
                    } else if (event.event === 'complete') {
                        setMessages((prev) => [...(prev || []), { type: 'answer', text: uncompletedAnswer }]);
                        setStreamingAnswer('');
                        setAnswerStatus('completed');

                        if (isCreateChat) {
                            setConversationId(newConversationId);
                            const path = generatePath('/chat-room/:conversationId', {
                                conversationId: newConversationId
                            });
                            // Workaround: Update the URL without un-mount and mount the whole page again when using navigate(). Will see if there is better solution.
                            window.history.replaceState(null, 'Chat Room', `${path}${window.location.search}`);
                        }
                    }

                    onComplete?.();
                }
            }
        );
    };

    // const sendMessage = async (message: string, onComplete?: () => void) => {
    //     if (answerStatus !== 'completed' || message?.trim().length === 0) return;
    //     setMessages((prev) => [...(prev || []), { type: 'question', text: message }]);
    //     setInputtingMessage('');
    //     setSearchingKeyword('');
    //     setAnswerStatus('waiting');

    //     try {
    //         const isCreateChat = !conversationId;
    //         const newMessage = await apiService.post<Message>(
    //             isCreateChat
    //                 ? `/v1/conversation/conversations`
    //                 : `/v1/conversation/conversations/${conversationId}/messages`,
    //             { prompt: message }
    //         );

    //         const { conversationId: newConversationId, text } = newMessage;
    //         setMessages((prev) => [...(prev || []), { type: 'answer', text }]);
    //         setAnswerStatus('completed');

    //         if (isCreateChat && newConversationId) {
    //             setConversationId(newConversationId);
    //             const path = generatePath('/chat-room/:conversationId', {
    //                 conversationId: newConversationId
    //             });
    //             // Workaround: Update the URL without un-mount and mount the whole page again when using navigate(). Will see if there is better solution.
    //             window.history.replaceState(null, 'Chat Room', `${path}${window.location.search}`);
    //         }
    //     } catch (e) {
    //         setAnswerStatus('error');
    //     }

    //     onComplete?.();
    // };

    const openChatHistory = () => {
        openDrawer(<ChatRoomHistoryDrawer conversationId={conversationId || ''} onCreate={onCreateNewChatRoom} />);
    };

    const onCreateNewChatRoom = useCallback(() => {
        if (conversationId || messages?.length > 0) {
            setConversationId(null);
            setConversation(null);
            setMessages([]);
            navigate('/chat-room', { replace: true });
            closeModal();
        } else {
            setConversationId(null);
            setConversation(null);
            setMessages([]);
            navigate('/chat-room', { replace: true });
        }
    }, [conversationId, conversation, navigate, closeModal]);

    const handleBeforeSend = (message: string) => {
        if (answerStatus !== 'completed') return;
        const { total, text } = getFirstSegment(message);
        if (total > 1) {
            showMessage({
                description: `We recognize there are more than 3000 words in your text. Would you like to split it into ${total} segments?`,
                onConfirm: () => {
                    setIsSplittingMessage(true);
                    sendMessageStream(text);
                },
                onCancel: () => {
                    clearSegments();
                }
            });
        } else {
            clearSegments();
            sendMessageStream(message);
        }
    };

    useEffect(() => {
        if (answerStatus !== 'completed') return;
        const { current, total, text } = getNextSegment();
        if (text) {
            showMessage({
                description: `Would you like to continue to another segment?`,
                trailing: `${current + 1}/ ${total}`,
                onConfirm: () => {
                    sendMessageStream(text);
                },
                onCancel: () => {
                    setIsSplittingMessage(false);
                    clearSegments();
                }
            });
        } else {
            clearSegments();
            setIsSplittingMessage(false);
        }
    }, [answerStatus]);

    useEffect(() => {
        if (location?.state?.question) {
            handleBeforeSend(location.state.question);
        }
    }, []);

    return (
        <Page>
            <Header
                leading="close"
                title="Chat Room"
                actions={<IconButton primary solid name="History" onClick={openChatHistory} />}
            />
            <Body flex noPadding withSafeArea>
                <ChatRoomTitle>
                    <Avatar status="online">TeamPrompt</Avatar>
                </ChatRoomTitle>
                {isSplittingMessage && <NotificationBar>Splitting long text into segments</NotificationBar>}
                <ChatConversation messages={messages} answerStatus={answerStatus} streamingAnswer={streamingAnswer} />
                {(!conversation || conversation?.userId === session?.userId) && (
                    <>
                        <ChatSuggestion
                            searchingKeyword={searchingKeyword}
                            onPrompt={(promptQuestion) => handleBeforeSend(promptQuestion)}
                            onClear={() => setSearchingKeyword('')}
                        />
                        <ChatInput
                            message={inputtingMessage}
                            isLoading={waiting || answerStatus !== 'completed' || streamingAnswer?.length > 0}
                            onSendMessage={handleBeforeSend}
                            onChangeMessage={(message) => {
                                setInputtingMessage(message);
                                if (message?.length < SEARCH_TEXT_LIMIT) setSearchingKeyword(message);
                            }}
                        />
                    </>
                )}
            </Body>
        </Page>
    );
};

export default ChatRoom;
