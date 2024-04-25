import { useConfirmationMessageContext } from 'provider/ConfirmationMessageProvider';
import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import type { AnswerStatus, Message } from 'types';
import MessageBubble from './MessageBubble';

const ConversationWrapper = styled.div`
  position: relative;
  padding: 16px;
  padding-bottom: calc(16px + var(--sab));
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex: 1;
  margin-bottom: auto;
  overflow: auto;
`;

interface Props {
  messages: Message[];
  answerStatus: AnswerStatus;
  streamingAnswer?: string;
}

const ChatConversation: React.FC<React.PropsWithChildren<Props>> = props => {
  const { messages, streamingAnswer, answerStatus } = props;
  const [isStickToBottom, setIsStickToBottom] = useState(true);
  const conversationWrapperRef = useRef<HTMLDivElement>(null);
  const { waiting, confirmation: Confirmation } = useConfirmationMessageContext();

  // handle stick
  useEffect(() => {
    const wrapper = conversationWrapperRef.current;
    if (!wrapper) return;

    const handleStickToBottom = () => {
      setIsStickToBottom(wrapper.scrollTop >= wrapper.scrollHeight - wrapper.clientHeight);
    };
    wrapper.addEventListener('scroll', handleStickToBottom);
    return () => wrapper.removeEventListener('scroll', handleStickToBottom);
  }, []);

  // auto scroll
  useEffect(() => {
    const wrapper = conversationWrapperRef.current;
    if (!wrapper) return;

    if ((isStickToBottom && streamingAnswer) || waiting || answerStatus === 'waiting') {
      wrapper.scrollTo({ top: wrapper.scrollHeight - wrapper.clientHeight });
    }
  }, [waiting, streamingAnswer, answerStatus, isStickToBottom]);

  return (
    <ConversationWrapper ref={conversationWrapperRef}>
      {messages?.map(({ type, text }, index) => (
        <MessageBubble
          key={`message__${index}`}
          from={type === 'question' ? 'user' : 'response'}
          text={text}
          disabledExpand={type === 'answer' && index === messages.length - 1}
        />
      ))}
      {streamingAnswer && <MessageBubble from="response" text={streamingAnswer} disabledExpand disabledActions />}
      {answerStatus === 'waiting' && <MessageBubble from="response" isTyping />}
      <Confirmation />
    </ConversationWrapper>
  );
};

export default ChatConversation;
