import { small } from 'components/Text';
import React, { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as Plus } from 'assets/icons/plus.svg';
import { ReactComponent as Minus } from 'assets/icons/minus.svg';
import { useSearchPrompt } from 'hooks/useSearchPrompts';
import { ResearchPromptModal } from 'components/Modal';
import type { Prompt } from 'types';
import { useModalContext } from 'provider/ModalProvider';

const SuggestionWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
  max-height: 256px;
`;

const SuggestionToggle = styled.button`
  height: 32px;
  min-height: 32px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${props => props.theme.colors.primaryBackgroundColor};
  padding: 0 16px;
  color: ${props => props.theme.colors.primaryColor};
  font-weight: 500;
  border-radius: 0;
`;

const PromptResultWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  max-height: 120px;
  width: 100%;
  overflow: auto;
`;

const PromptResult = styled.button.attrs(() => ({ type: 'button' }))`
  ${small}
  width: 100%;
  text-align: left;
  padding: 8px 16px;

  svg {
    stroke: ${props => props.theme.colors.placeholderColor};
    height: 16px;
  }

  &:not(:last-child) {
    /* border-bottom: 1px solid #e1e1e1; */
  }
`;

interface Props {
  searchingKeyword: string;
  onPrompt: (prompt: string) => void;
  onClear: () => void;
}

const ChatSuggestion: React.FC<Props> = ({ searchingKeyword, onPrompt, onClear }) => {
  const [showSuggestion, setShowSuggestion] = useState(true);
  const [isLoading, { keywordResults }] = useSearchPrompt(showSuggestion ? searchingKeyword : '', 1000);
  const { openModal } = useModalContext();

  const onToggleSuggestion = () => {
    if (showSuggestion) {
      setShowSuggestion(false);
    } else {
      setShowSuggestion(true);
      // if (inputtingMessage !== searchingKeyword) {
      //     setSearchingKeyword(inputtingMessage);
      // }
    }
  };

  const onClickPrompt = (prompt: Prompt) => {
    openModal(
      <ResearchPromptModal
        prompt={prompt}
        onPrompt={promptQuestion => {
          onPrompt(promptQuestion);
          onClear();
          // setInputtingMessage(promptQuestion);
          // setSearchingKeyword('');
        }}
      />,
    );
  };

  return (
    <SuggestionWrapper>
      <SuggestionToggle type="button" onClick={onToggleSuggestion}>
        <span>Suggestion</span>
        {showSuggestion ? <Minus /> : <Plus />}
      </SuggestionToggle>
      {showSuggestion && (
        <PromptResultWrapper>
          {isLoading && <PromptResult>Loading...</PromptResult>}
          {!isLoading &&
            keywordResults.length > 0 &&
            keywordResults.map(prompt => (
              <PromptResult key={prompt.promptId} onClick={() => onClickPrompt(prompt)}>
                {prompt.title}
              </PromptResult>
            ))}
          {!isLoading && keywordResults.length === 0 && searchingKeyword.length !== 0 && (
            <PromptResult onClick={onClear}>No prompt found</PromptResult>
          )}
        </PromptResultWrapper>
      )}
    </SuggestionWrapper>
  );
};

export default ChatSuggestion;
