import React, { useMemo, useState } from 'react';
import useCategoryStore from 'store';
import { Box } from './Box';
import PromptItem from './PromptItem';
import { ReactComponent as SortDefault } from 'assets/icons/sort-default.svg';
import { ReactComponent as Heart } from 'assets/icons/heart.svg';
import { ReactComponent as CommentPlus } from 'assets/icons/comment-plus.svg';
import styled from 'styled-components';
import useToggle from 'hooks/useToggle';
import { ActionButton, ActionMenu } from './Action';
import { PlainButton } from './Button';
import { Text } from './Text';
import type { Prompt } from '../types';

const Header = styled.h2`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 8px;
`;

const SortMenu = styled(ActionMenu)`
  position: absolute;
  width: 160px;
  top: 100%;
  right: 0;
`;

interface Props {
  role?: string;
  prompts: Prompt[];
}

type Sorting = 'Default' | 'Most like' | 'Most used';
const sortingIcons: Record<Sorting, React.ReactElement> = {
  Default: <SortDefault />,
  'Most like': <Heart />,
  'Most used': <CommentPlus />,
};

const PromptList: React.FC<Props> = props => {
  const { prompts } = props;
  const { session } = useCategoryStore();
  const [sorting, setSorting] = useState<Sorting>('Default');
  const [showMenu, setShowMenu, menuRef, buttonRef] = useToggle<HTMLDivElement, HTMLButtonElement>();
  const allowEdit = session && session?.role === 'admin';

  const onClickSort = () => {
    setShowMenu(i => !i);
    // setSortingIndex((index) => (index + 1 > sortingList.length - 1 ? 0 : index + 1));
  };

  const onChangeSort: React.MouseEventHandler<HTMLButtonElement> = e => {
    setSorting(e.currentTarget.value as Sorting);
    setShowMenu(false);
    // setSortingIndex((index) => (index + 1 > sortingList.length - 1 ? 0 : index + 1));
  };

  const sortedPrompts = useMemo(() => {
    switch (sorting) {
      case 'Most like': {
        return prompts.sort((a, b) => b.userLikes.length - a.userLikes.length);
      }
      case 'Most used': {
        return prompts.sort((a, b) => b.usageCount - a.usageCount);
      }
      default:
        return prompts;
    }
  }, [sorting, prompts]);

  return (
    <>
      <Header>
        <Text variant="body" color="placeholderColor" bold>
          Prompts
        </Text>
        <PlainButton onClick={onClickSort} ref={buttonRef}>
          {sortingIcons[sorting]}
          {sorting}
        </PlainButton>
        {showMenu && (
          <SortMenu ref={menuRef}>
            {Object.entries(sortingIcons)
              .filter(([value]) => value !== 'Default')
              .map(([value, icon]) => (
                <ActionButton value={value} key={value} onClick={onChangeSort}>
                  {icon}
                  {value}
                </ActionButton>
              ))}
          </SortMenu>
        )}
      </Header>
      <Box padding="8px 0 32px 0">
        {sortedPrompts.length === 0 && 'No prompt is found'}
        {sortedPrompts.length > 0 &&
          sortedPrompts.map((prompt, index) => (
            <PromptItem index={index} allowEdit={allowEdit} prompt={prompt} key={prompt.promptId} />
          ))}
      </Box>
    </>
  );
};

export default PromptList;
