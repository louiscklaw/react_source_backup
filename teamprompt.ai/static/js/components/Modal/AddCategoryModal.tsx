import React, { useState } from 'react';
import { useModalContext } from 'provider/ModalProvider';
import Modal from './Modal';
import { Form, Input, Label, Error } from 'components/Form';
import { Button } from 'components/Button';
import useCategoryStore from 'store';

interface Props {
    parentCategoryId?: string;
}

const AddCategoryModal: React.FC<Props> = ({ parentCategoryId }) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const { closeModal } = useModalContext();
    const { addCategory } = useCategoryStore();

    const onCreate: React.MouseEventHandler<HTMLButtonElement> = (e) => {
        e.preventDefault();
        setError('');
        if (!name || name.trim().length === 0) {
            setError('Please enter a valid category name and description');
            return;
        }

        setIsLoading(true);
        addCategory({ name, description, parentCategoryId })
            .then(() => {
                closeModal();
            })
            .catch((err) => {
                setError(err.response.data || err.message);
                setIsLoading(false);
            });
    };

    return (
        <Modal title="Add category">
            <Form>
                <Label>Category name</Label>
                <Input
                    value={name}
                    onChange={(e) => {
                        setError('');
                        setName(e.currentTarget.value);
                    }}
                />
                <Label>Description</Label>
                <Input
                    value={description}
                    onChange={(e) => {
                        setError('');
                        setDescription(e.currentTarget.value);
                    }}
                />
                {error && <Error>{error}</Error>}
                <Button type="submit" isLoading={isLoading} expand onClick={onCreate}>
                    Create
                </Button>
            </Form>
        </Modal>
    );
};
export default AddCategoryModal;
