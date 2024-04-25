import React, { useState, useMemo } from 'react';
import { useModalContext } from 'provider/ModalProvider';
import Modal from './Modal';
import styled from 'styled-components';
import { Label, Form, Error, Textarea } from 'components/Form';
import { Button, PlainButton } from 'components/Button';
import { ReactComponent as Copy } from 'assets/icons/copy.svg';
import { ReactComponent as Heart } from 'assets/icons/heart.svg';
import { ReactComponent as Attach } from 'assets/icons/attach.svg';
import useCategoryStore from 'store';
import { applyPrompt, likePrompt, unlikePrompt } from 'service/promptService';
import { useRequireLogin } from 'hooks/useRequireLogin';
import { TemplateContent, TemplatePlaceholder } from 'components/Prompt';
import { copyText, updateTextareaHeight } from 'utils';
import useDebounce from 'hooks/useDebounce';
import type { Prompt } from 'types';
import EditPromptModal from './EditPromptModal';

const Actions = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 16px;
`;

const PromptFieldTextarea = styled(Textarea)`
  max-height: 122px;
`;

interface Props {
  prompt: Prompt;
  onPrompt?: (promptContent: string) => void;
}

const ResearchPromptModal: React.FC<Props> = ({ prompt: defaultPrompt, onPrompt }) => {
  const [prompt, setPrompt] = useState(defaultPrompt);
  const { session, updateCategoryPrompt, deleteCategoryPrompt } = useCategoryStore();
  const [placeholdersContent, setPlaceholdersContent] = useState<Record<string, string>>(
    prompt.placeholders.reduce((content, placeholder) => ({ ...content, [placeholder]: '' }), {}),
  );
  const [isLoading, setIsLoading] = useState(false);
  const [isCopying, setIsCopying] = useState(false);
  const [isSharing, setIsSharing] = useState(false);
  const [error, setError] = useState('');
  const { openModal, closeModal } = useModalContext();
  const requireLogin = useRequireLogin();
  const restoreCopy = useDebounce(() => setIsCopying(false));
  const restoreShare = useDebounce(() => setIsSharing(false));
  const allowEdit = session && (session.role === 'admin' || session.userId === prompt?.userId);

  const isLiked = useMemo(
    () => (prompt?.userLikes || []).some(like => like.userId === session?.userId),
    [prompt, session],
  );

  const onApplyPrompt: React.MouseEventHandler<HTMLButtonElement> = requireLogin(() => {
    setError('');
    if (Object.values(placeholdersContent).some(content => !content || content.length === 0)) {
      setError('Please enter a valid placeholder.');
      return;
    }

    setIsLoading(true);
    applyPrompt(prompt.promptId, { inputs: placeholdersContent })
      .then(question => {
        onPrompt?.(question);
        closeModal();
      })
      .catch(err => {
        setError(err.response.data || err.message);
        setIsLoading(false);
      });
  });

  const onLike: React.MouseEventHandler<HTMLButtonElement> = requireLogin(() => {
    setError('');
    (isLiked ? unlikePrompt(prompt.promptId) : likePrompt(prompt.promptId))
      .then(prompt => {
        if (prompt.categoryId) updateCategoryPrompt(prompt.categoryId, prompt);
        setPrompt(prompt);
      })
      .catch(err => {
        setError(err.response.data || err.message);
      });
  });

  const onCopy: React.MouseEventHandler<HTMLButtonElement> = () => {
    setError('');
    if (Object.values(placeholdersContent).some(content => !content || content.length === 0)) {
      setError('Please enter a valid placeholder.');
      return;
    }

    const fullText = prompt.placeholders.reduce(
      (result, placeholder) => result.replace(`{${placeholder}}`, placeholdersContent[placeholder]),
      prompt.templateContent,
    );
    copyText(fullText);
    setIsCopying(true);
    restoreCopy();
  };

  const onShare = () => {
    const url = `${window.location.origin}/prompt/${prompt.promptId}`;
    if (navigator.share) {
      navigator
        .share({
          title: 'TeamPrompt',
          text: prompt.title,
          url,
        })
        .then(() => console.log('Successful share'))
        .catch(error => console.log('Error sharing', error));
    } else {
      copyText(url);
      setIsSharing(true);
      restoreShare();
    }
  };

  const onEditPromptClick = () => {
    if (!prompt) return;

    openModal(
      <EditPromptModal
        categoryId={prompt.categoryId}
        promptId={prompt.promptId}
        promptName={prompt.title}
        promptDescription={prompt.userRemarks || ''}
        promptContent={prompt.templateContent}
        onUpdatePrompt={p => {
          if (prompt.categoryId) updateCategoryPrompt(prompt.categoryId, p);
          setPrompt(p);
        }}
        onDeletePrompt={pid => {
          if (prompt.categoryId) deleteCategoryPrompt(prompt.categoryId, pid);
          // closeModal();
        }}
      />,
    );
  };

  return (
    <Modal title={prompt.title}>
      <Form>
        <Label>{prompt.userRemarks}</Label>
        <TemplateContent>
          {prompt.templateContent
            .split(/{[\w\s]+}/)
            .filter(content => content.trim().length > 0)
            .map((word, index) => (
              <React.Fragment key={index}>
                {word}
                {prompt.placeholders[index] && <TemplatePlaceholder>{prompt.placeholders[index]}</TemplatePlaceholder>}
              </React.Fragment>
            ))}
        </TemplateContent>
        {prompt.placeholders.map((placeholder, index) => (
          <React.Fragment key={`${index}-${placeholder}`}>
            <Label>{placeholder}</Label>
            <PromptFieldTextarea
              value={placeholdersContent[placeholder]}
              onChange={e => {
                updateTextareaHeight(e);
                setIsCopying(false);
                setError('');
                setPlaceholdersContent(content => ({ ...content, [placeholder]: e.target.value }));
              }}
            />
          </React.Fragment>
        ))}
        <Actions>
          <PlainButton onClick={onLike} primary>
            <Heart />
            {/* {isLiked ? 'Liked' : 'Like'} */}
            {prompt.userLikes.length}
          </PlainButton>
          <PlainButton onClick={onCopy} primary>
            <Copy />
            {isCopying ? 'Copied!' : 'Copy prompt'}
          </PlainButton>
          <PlainButton onClick={onShare} primary>
            <Attach />
            {isSharing ? 'Copied!' : 'Copy link'}
          </PlainButton>
        </Actions>
        {error && <Error>{error}</Error>}
        <ButtonGroup>
          <Button type="button" isLoading={isLoading} onClick={onApplyPrompt} expand>
            Prompt it
          </Button>
          {allowEdit && (
            <Button type="button" onClick={onEditPromptClick}>
              Edit
            </Button>
          )}
        </ButtonGroup>
      </Form>
    </Modal>
  );
};

export default ResearchPromptModal;
