import type { PropsWithChildren } from 'react';
import React from 'react';
import styled from 'styled-components';
import { IconButton } from './Button';
import type { Prompt } from 'types';
import { ReactComponent as Edit } from 'assets/icons/edit.svg';
import { ReactComponent as Heart } from 'assets/icons/heart.svg';
import { ReactComponent as CommentPlus } from 'assets/icons/comment-plus.svg';
import { ReactComponent as Profile } from 'assets/icons/profile.svg';
import { EditPromptModal } from './Modal';
import { useModalContext } from 'provider/ModalProvider';
import { useNavigate } from 'react-router-dom';
import ListItem from './ListItem';
import { Text } from './Text';
import useCategoryStore from 'store';

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1;
  gap: 8px;
  text-align: left;
`;

const InfoWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 4px;
  color: ${props => props.theme.colors.placeholderColor};

  svg {
    width: 8px;
    display: inline-block;
    fill: ${props => props.theme.colors.placeholderColor};
  }
`;

const Info = styled(Text).attrs(() => ({ variant: 'small', color: 'placeholderColor' }))`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  text-align: left;

  &:first-child {
    margin-right: auto;
  }

  svg {
    width: 12px;
    height: 12px;
  }
`;

interface Props {
  prompt: Prompt;
  index?: number;
  allowEdit?: boolean;
}

const PromptItem: React.FC<PropsWithChildren<Props>> = props => {
  const { prompt, index = 0, allowEdit } = props;
  const { updateCategoryPrompt, deleteCategoryPrompt } = useCategoryStore();
  const { openModal } = useModalContext();
  const navigate = useNavigate();
  const onClickPrompt = () => {
    navigate(`/prompt/${prompt.promptId}`, { state: { from: prompt.promptId } });
  };

  const onEditPromptClick = () => {
    openModal(
      <EditPromptModal
        categoryId={prompt.categoryId}
        promptId={prompt.promptId}
        promptName={prompt.title}
        promptDescription={prompt.userRemarks || ''}
        promptContent={prompt.templateContent}
        onUpdatePrompt={p => {
          if (prompt.categoryId) updateCategoryPrompt(prompt.categoryId, p);
        }}
        onDeletePrompt={pid => {
          if (prompt.categoryId) deleteCategoryPrompt(prompt.categoryId, pid);
        }}
      />,
    );
  };

  return (
    <ListItem
      index={index}
      leading={allowEdit && <IconButton icon={Edit} onClick={onEditPromptClick} minimize />}
      onClick={onClickPrompt}
    >
      <Content>
        <Text>{prompt.title}</Text>
        <InfoWrapper>
          <Info>
            <Profile />
            {prompt.author || 'Deactivated user'}
          </Info>
          <Info>
            <Heart />
            {(prompt.userLikes || []).length}
          </Info>
          <Info>
            <CommentPlus /> {prompt.usageCount || 0}
          </Info>
        </InfoWrapper>
      </Content>
    </ListItem>
  );
};

export default PromptItem;
