import LoginForm from 'components/LoginForm';
import { useModalContext } from 'provider/ModalProvider';
import React from 'react';
// import styled from 'styled-components';
import Modal from './Modal';

interface Props {
  onLoginSuccess?: Function;
}

const RequireLoginModal: React.FC<Props> = ({ onLoginSuccess }) => {
  const { closeModal } = useModalContext();
  const onSuccess = () => {
    closeModal();
    onLoginSuccess?.();
  };

  return (
    <Modal title="Login">
      <LoginForm onLoginSuccess={onSuccess} />
    </Modal>
  );
};

export default RequireLoginModal;
