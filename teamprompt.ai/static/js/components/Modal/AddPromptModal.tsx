import React, { useEffect, useState } from 'react';
import { useModalContext } from 'provider/ModalProvider';
import Modal from './Modal';
import { Form, Input, Textarea, Label, Error, SkeletonInput, SkeletonTextarea } from 'components/Form';
import { Button, PlainButton } from 'components/Button';
import type { Prompt } from 'types';
import apiService from 'utils/apiService';
import styled from 'styled-components';
import { addPrompt } from 'service/promptService';

const PromptLabel = styled(Label)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

interface Props {
  categoryId: string | null;
  originalPrompt?: string;
  onAddPrompt?: (prompt: Prompt) => void;
}

const AddPromptModal: React.FC<Props> = ({ categoryId, originalPrompt, onAddPrompt }) => {
  const [title, setTitle] = useState('');
  const [userRemarks, setUserRemarks] = useState('');
  const [templateContent, setTemplateContent] = useState('');
  const [generatedTemplateContent, setGeneratedTemplateContent] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isGeneratingPrompt, setIsGeneratingPrompt] = useState(Boolean(originalPrompt));
  const [error, setError] = useState('');
  const { closeModal } = useModalContext();

  useEffect(() => {
    if (originalPrompt) {
      apiService.post<Prompt>('/v1/prompt/generate', { templateContent: originalPrompt }).then(prompt => {
        setTitle(prompt.title);
        setUserRemarks(prompt.userRemarks);
        setTemplateContent(originalPrompt);
        setGeneratedTemplateContent(prompt.templateContent);
        setIsGeneratingPrompt(false);
      });
    }
  }, [originalPrompt]);

  const onCreate: React.MouseEventHandler<HTMLButtonElement> = e => {
    e.preventDefault();
    setError('');
    if (!title || title.trim().length === 0 || !templateContent || templateContent.trim().length === 0) {
      setError('Please enter a valid prompt.');
      return;
    }

    setIsLoading(true);
    addPrompt({ categoryId, title, userRemarks, templateContent })
      .then(prompt => {
        onAddPrompt?.(prompt);
        closeModal();
      })
      .catch(err => {
        setError(err.response.data || err.message);
        setIsLoading(false);
      });
  };

  return (
    <Modal title={originalPrompt ? 'Generate prompt' : 'Add prompt'} key="add-prompt">
      <Form>
        <Label>Prompt name</Label>
        {isGeneratingPrompt ? (
          <SkeletonInput />
        ) : (
          <Input
            value={title}
            onChange={e => {
              setError('');
              setTitle(e.currentTarget.value);
            }}
            disabled={isGeneratingPrompt}
          />
        )}
        <Label>Description</Label>
        {isGeneratingPrompt ? (
          <SkeletonInput />
        ) : (
          <Input
            value={userRemarks}
            onChange={e => {
              setError('');
              setUserRemarks(e.currentTarget.value);
            }}
            disabled={isGeneratingPrompt}
          />
        )}
        <PromptLabel>
          Prompt
          {generatedTemplateContent && (
            <PlainButton onClick={() => setTemplateContent(generatedTemplateContent)}>
              {generatedTemplateContent === templateContent ? 'Switched' : 'Switch to template'}
            </PlainButton>
          )}
        </PromptLabel>
        {isGeneratingPrompt ? (
          <SkeletonTextarea rows={10} />
        ) : (
          <Textarea
            value={templateContent}
            rows={10}
            onChange={e => {
              setError('');
              setTemplateContent(e.currentTarget.value);
            }}
            disabled={isGeneratingPrompt}
          />
        )}
        {error && <Error>{error}</Error>}
        <Button type="submit" isLoading={isLoading} expand onClick={onCreate}>
          Create
        </Button>
      </Form>
    </Modal>
  );
};
export default AddPromptModal;
