import React, { useState } from 'react';
import { WrappedInput } from './Form';
import { ReactComponent as Cross } from 'assets/icons/cross.svg';
import styled, { css } from 'styled-components';
import { ResearchPromptModal } from './Modal';
import { useModalContext } from 'provider/ModalProvider';
import { IconButton } from './Button';
import { useSearchPrompt } from 'hooks/useSearchPrompts';
import { useNavigate } from 'react-router-dom';
import { encodeQueryText } from 'utils/encodeUtils';
import { small } from 'components/Text';
import type { Prompt } from 'types';
import Icon from './Icon';

const Container = styled.div`
    position: relative;
    background-color: #f8f8f8;
`;

const PromptDialog = styled.div`
    position: absolute;
    top: 100%;
    left: 0;
    width: calc(100% - 32px);
    margin: 0 16px;
    background-color: #f4f4f4;
    border: 1px solid #e1e1e1;
    min-height: 48px;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: auto;
    max-height: calc(var(--app-height) - 128px);
    z-index: 10;
`;

const PromptResult = styled.button<{ textOnly?: boolean }>`
    padding: 16px;
    padding-bottom: 8px;
    ${small}
    width: 100%;
    text-align: left;
    background-color: #f4f4f4;
    font-weight: 600;
    color: ${(props) => props.theme.colors.placeholderColor};

    ${(props) =>
        !props.textOnly &&
        css`
            font-weight: 400;
            color: ${(props) => props.theme.colors.textColor};
            padding-bottom: 16px;

            &:not(:last-child) {
                border-bottom: 1px solid #e1e1e1;
            }
        `}
`;

// const Results = styled.div`
//     width: 100%;
//     /* background-color: #ffffff; */

//     &:last-child {
//         border-top: 1px solid #e1e1e1;
//     }
// `;

// const Title = styled.span`
//     display: block;
//     color: #a9a9a9;
//     padding: 16px 16px 0 16px;
//     font-size: 12px;
//     font-weight: bold;
// `;

const SearchBar: React.FC = () => {
    const [promptKeyword, setPromptKeyword] = useState('');
    const { openModal } = useModalContext();
    const navigate = useNavigate();
    const [isLoading, { keywordResults, highlightResults }] = useSearchPrompt(promptKeyword);

    const onSearch: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        setPromptKeyword(event.target.value);
    };

    const onClickPrompt = (prompt: Prompt) => {
        setPromptKeyword('');
        openModal(
            <ResearchPromptModal
                prompt={prompt}
                onPrompt={(question) => {
                    navigate('/chat-room', { state: { question } });
                }}
            />
        );
    };

    return (
        <Container>
            <WrappedInput
                leading={<Icon style={{ color: '#2e2e2e' }} name="Search" />}
                trailing={promptKeyword.length > 0 && <IconButton icon={Cross} onClick={() => setPromptKeyword('')} />}
                placeholder="Search prompts..."
                type="text"
                value={promptKeyword}
                onChange={onSearch}
                containerStyle={{ marginBottom: 0, background: 'none' }}
            />
            {promptKeyword && (
                <PromptDialog>
                    {isLoading && <PromptResult textOnly>Loading...</PromptResult>}
                    {!isLoading && (
                        <>
                            {keywordResults.length > 0 && (
                                <>
                                    <PromptResult textOnly>Results</PromptResult>
                                    {keywordResults.map((prompt) => (
                                        <PromptResult key={prompt.promptId} onClick={() => onClickPrompt(prompt)}>
                                            {prompt.title}
                                        </PromptResult>
                                    ))}
                                </>
                            )}
                            {highlightResults.length > 0 && (
                                <>
                                    <PromptResult textOnly>Suggestions</PromptResult>
                                    {highlightResults.map((prompt) => (
                                        <PromptResult key={prompt.promptId} onClick={() => onClickPrompt(prompt)}>
                                            {prompt.title}
                                        </PromptResult>
                                    ))}
                                </>
                            )}
                        </>
                    )}
                    {!isLoading && keywordResults.length === 0 && highlightResults.length === 0 && (
                        <PromptResult>No prompt found</PromptResult>
                    )}
                </PromptDialog>
            )}
        </Container>
    );
};

export default SearchBar;
