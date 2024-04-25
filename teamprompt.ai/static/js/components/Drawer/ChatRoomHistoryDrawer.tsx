import { Button, IconButton } from 'components/Button';
import Icon from 'components/Icon';
import ListItem from 'components/ListItem';
import ConfirmationModal from 'components/Modal/ConfirmationModal';
import { Text } from 'components/Text';
import { useDrawerContext } from 'provider/DrawerProvider';
import { useModalContext } from 'provider/ModalProvider';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { css } from 'styled-components';
import type { Conversation } from 'types';
import { timeSince } from 'utils';
import apiService from 'utils/apiService';
import Drawer from './Drawer';

const Hover = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  display: none;
  height: 100%;
  opacity: 0.8;
  align-items: center;
  background-color: ${props => props.theme.colors.primaryAccentColor};
`;

const Container = styled.div`
  display: flex;
  padding: 0 8px;
  gap: 8px;
  flex-direction: column;
  height: 100%;
`;

const Title = styled(Text)`
  border-bottom: 1px solid #e1e1e1;
  padding-bottom: 8px;
  font-size: 14px;
  font-weight: 700;
  display: flex;
  gap: 4px;
`;

const History = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: none;
  gap: 0px;
`;

const ChatBox = styled(ListItem)<{ active?: boolean }>`
  align-items: center;
  border-radius: 4px;
  position: relative;
  overflow: hidden;

  &:hover {
    background-color: #efefef;
    ${Hover} {
      display: flex;
    }
  }

  ${props =>
    props.active &&
    css`
      background-color: #efefef;
      ${Hover} {
        display: flex;
      }
    `}
`;

const ChatIcon = styled(Icon)`
  color: ${props => props.theme.colors.textColor};
`;

const ChatBottom = styled(Text)`
  font-size: 12px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const ChatText = styled(Text)`
  text-align: left;
  font-size: 14px;
  line-height: 1.5;
  width: 100%;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  min-height: 42px;
`;

const RemoveButton = styled(IconButton)`
  position: absolute;
  right: 4px;
  bottom: 6px;
  min-width: 24px;
  min-height: 24px;
  padding: 3px;
  .icon-span {
    font-size: 18px;
    color: ${props => props.theme.colors.textColor};
  }
`;

const Bottom = styled.div`
  position: sticky;
  padding: 8px;
  padding-bottom: calc(8px + var(--sab));
  width: 100%;
  bottom: 0;
  border-top: 1px solid #e1e1e1;
  background-color: #ffffff;

  button {
    width: 100%;
  }
`;

interface Props {
  conversationId?: string;
  onCreate: () => void;
}

const ChatRoomHistoryDrawer: React.FC<Props> = ({ conversationId, onCreate }) => {
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const navigate = useNavigate();
  const { closeDrawer } = useDrawerContext();
  const { openModal, closeModal } = useModalContext();

  const getChatRooms = async () => {
    const data = await apiService.get<Conversation[]>('/v1/conversation/conversations');
    setConversations(data);
  };

  const onClickHistory = e => {
    const id = e.currentTarget.value;
    navigate(`/chat-room/${id}`, { replace: true });
    closeDrawer();
  };

  const onClickDelete = e => {
    e.preventDefault();
    const id = e.currentTarget.value;
    openModal(
      <ConfirmationModal
        title="Delete the conversation"
        alertText="Are you sure to delete the conversation? The action cannot be undone"
        onConfirm={() => {
          apiService.delete(`/v1/conversation/conversations/${id}`).then(() => {
            closeModal();
            setConversations(convs => convs.filter(i => i.conversationId !== id));
            if (conversationId === id) {
              onCreate();
            }
          });
        }}
      />,
    );
  };

  const onClickCreate = () => {
    onCreate();
    closeDrawer();
  };

  useEffect(() => {
    getChatRooms();
  }, []);

  return (
    <Drawer>
      <Container>
        <Title>
          <ChatIcon name="Chat" />
          <span>History ({conversations.length})</span>
        </Title>
        <History>
          {conversations.map(conv => (
            <ChatBox
              key={conv.conversationId}
              value={conv.conversationId}
              active={conversationId === conv.conversationId}
              onClick={onClickHistory}
              trailing={<RemoveButton value={conv.conversationId} onClick={onClickDelete} name="Trash" />}
            >
              <Content>
                <ChatText>{conv.messages[0]?.text}</ChatText>
                <ChatBottom>{timeSince(conv.messages[conv.messages.length - 1]?.createdAt)}</ChatBottom>
              </Content>
            </ChatBox>
          ))}
        </History>
        <Bottom>
          <Button disabled={!conversationId} onClick={onClickCreate}>
            Create new chat
          </Button>
        </Bottom>
      </Container>
    </Drawer>
  );
};
export default ChatRoomHistoryDrawer;
