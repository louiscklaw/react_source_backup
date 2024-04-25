import React, { useState } from 'react';
import { useModalContext } from 'provider/ModalProvider';
import Modal from './Modal';
import { Input, Textarea, Label, Form, Error } from 'components/Form';
import { Button } from 'components/Button';
import ConfirmationModal from './ConfirmationModal';
import { updatePrompt, deletePrompt } from 'service/promptService';
import type { Prompt } from 'types';

interface Props {
  categoryId: string | null;
  promptId: string;
  promptName: string;
  promptDescription: string;
  promptContent: string;
  onUpdatePrompt?: (prompt: Prompt) => void;
  onDeletePrompt?: (promptId: string) => void;
}

const EditPromptModal: React.FC<Props> = ({
  categoryId,
  promptId,
  promptName,
  promptDescription,
  promptContent,
  onUpdatePrompt,
  onDeletePrompt,
}) => {
  const [name, setName] = useState(promptName);
  const [description, setDescription] = useState(promptDescription);
  const [content, setContent] = useState(promptContent);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const { openModal, closeModal } = useModalContext();

  const onDelete: React.MouseEventHandler<HTMLButtonElement> = e => {
    e.preventDefault();
    setIsLoading(true);
    openModal(
      <ConfirmationModal
        title="Delete the prompt"
        alertText="Are you sure to delete the prompt? The action cannot be undone"
        onConfirm={() => {
          deletePrompt(promptId)
            .then(() => {
              onDeletePrompt?.(promptId);
              closeModal();
            })
            .catch(err => {
              setError(err.response.data || err.message);
              setIsLoading(false);
            });

          closeModal();
        }}
      />,
    );
  };

  const onUpdate: React.MouseEventHandler<HTMLButtonElement> = e => {
    e.preventDefault();
    setError('');
    if (!name || name.trim().length === 0 || !content || content.trim().length === 0) {
      setError('Please enter a valid prompt.');
      return;
    }

    setIsLoading(true);
    updatePrompt(promptId, { categoryId, title: name, templateContent: content, userRemarks: description })
      .then(prompt => {
        onUpdatePrompt?.(prompt);
        closeModal();
      })
      .catch(err => {
        setError(err.response.data || err.message);
        setIsLoading(false);
      });
  };

  return (
    <Modal title="Edit prompt">
      <Form>
        <Label>Prompt name</Label>
        <Input
          value={name}
          onChange={e => {
            setError('');
            setName(e.currentTarget.value);
          }}
        />
        <Label>Description</Label>
        <Input
          value={description}
          onChange={e => {
            setError('');
            setDescription(e.currentTarget.value);
          }}
        />
        <Label>Prompt</Label>
        <Textarea
          value={content}
          rows={10}
          onChange={e => {
            setError('');
            setContent(e.currentTarget.value);
          }}
        />
        {error && <Error>{error}</Error>}
        <Button type="submit" isLoading={isLoading} onClick={onUpdate} expand>
          Confirm
        </Button>
        <Button type="button" isLoading={isLoading} onClick={onDelete} expand empty>
          Delete
        </Button>
      </Form>
    </Modal>
  );
};
export default EditPromptModal;
