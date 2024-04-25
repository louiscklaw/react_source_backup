import { Button } from 'components/Button';
import { Text } from 'components/Text';
import React from 'react';
import Modal from './Modal';

interface Props {
  title: string;
  alertText: string;
  onConfirm: () => void;
}

export default function ConfirmationModal({ title, alertText, onConfirm }: Props): JSX.Element {
  return (
    <Modal title={title}>
      <Text variant="button" color="placeholderColor" style={{ marginBottom: '24px' }}>
        {alertText}
      </Text>
      <Button expand onClick={onConfirm}>
        Confirm
      </Button>
    </Modal>
  );
}
