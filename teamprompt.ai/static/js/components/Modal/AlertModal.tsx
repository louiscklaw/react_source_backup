import { Button } from 'components/Button';
import { Text } from 'components/Text';
import React from 'react';
import Modal from './Modal';

interface Props {
  text: string;
  onConfirm: () => void;
}

export default function AlertModal({ text, onConfirm }: Props): JSX.Element {
  return (
    <Modal title="Alert" noClose>
      <Text variant="button" color="placeholderColor" style={{ marginBottom: '24px' }}>
        {text}
      </Text>
      <Button expand onClick={onConfirm}>
        Confirm
      </Button>
    </Modal>
  );
}
