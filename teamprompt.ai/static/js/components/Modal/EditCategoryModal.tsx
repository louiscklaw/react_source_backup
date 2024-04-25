import React, { useState } from 'react';
import { useModalContext } from 'provider/ModalProvider';
import Modal from './Modal';
import { Form, Input, Label, Error } from 'components/Form';
import { Button } from 'components/Button';
import ConfirmationModal from './ConfirmationModal';
import useCategoryStore from 'store';
import type { Category } from 'types';

interface Props {
  category: Category;
}

const EditCategoryModal: React.FC<Props> = props => {
  const { category } = props;
  const [name, setName] = useState(category.name);
  const [description, setDescription] = useState(category.description);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const { openModal, closeModal } = useModalContext();
  const { updateCategory, deleteCategory } = useCategoryStore();

  const onDelete: React.MouseEventHandler<HTMLButtonElement> = e => {
    e.preventDefault();
    setIsLoading(true);
    openModal(
      <ConfirmationModal
        title="Delete the category"
        alertText="Are you sure to delete the category? The action cannot be undone"
        onConfirm={() => {
          deleteCategory(category.categoryId)
            .then(() => {
              closeModal();
            })
            .catch(err => {
              setError(err.response.data || err.message);
              setIsLoading(false);
            });
        }}
      />,
    );
  };

  const onEdit: React.MouseEventHandler<HTMLButtonElement> = e => {
    e.preventDefault();
    setError('');
    if (!name || name.trim().length === 0 || !description || description.trim().length === 0) {
      setError('Please enter a valid category name and description');
      return;
    }

    setIsLoading(true);
    updateCategory(category.categoryId, { name, description })
      .then(() => {
        closeModal();
      })
      .catch(err => {
        setError(err.response.data || err.message);
        setIsLoading(false);
      });
  };

  return (
    <Modal title="Edit category">
      <Form>
        <Label>Category name</Label>
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
        {error && <Error>{error}</Error>}
        <Button type="submit" isLoading={isLoading} onClick={onEdit} expand>
          Confirm
        </Button>
        <Button type="button" isLoading={isLoading} onClick={onDelete} expand empty>
          Delete
        </Button>
      </Form>
    </Modal>
  );
};
export default EditCategoryModal;
