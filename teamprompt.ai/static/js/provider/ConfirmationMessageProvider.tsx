import { ConfirmationMessage } from 'components/Chat';
import type { MessageProps } from 'components/Chat/ConfirmationMessage';
import type { PropsWithChildren } from 'react';
import React, { createContext, useContext, useState } from 'react';

const emptyFunction = function () {
  return;
};

export interface ConfirmationMessageContext {
  confirmation: any;
  showMessage: (props: MessageProps) => void;
  closeMessage: () => void;
  waiting: boolean;
}

const ConfirmationMessageContext = createContext<ConfirmationMessageContext>({
  showMessage: emptyFunction,
  closeMessage: emptyFunction,
  confirmation: emptyFunction,
  waiting: false,
});

const ConfirmationMessageProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [messageProps, setMessageProps] = useState<MessageProps>({});
  const [show, setShow] = useState<boolean>(false);

  const showMessage = (props: MessageProps) => {
    setShow(true);
    setMessageProps(props);
  };

  const closeMessage = () => {
    setShow(false);
    setMessageProps({});
  };

  const onConfirm = () => {
    messageProps.onConfirm && messageProps.onConfirm();
    closeMessage();
  };

  const onCancel = () => {
    messageProps.onCancel && messageProps.onCancel();
    closeMessage();
  };

  return (
    <ConfirmationMessageContext.Provider
      value={{
        showMessage,
        closeMessage,
        confirmation: () => (
          <>{show && <ConfirmationMessage {...messageProps} onConfirm={onConfirm} onCancel={onCancel} />}</>
        ),
        waiting: show,
      }}
    >
      {children}
    </ConfirmationMessageContext.Provider>
  );
};

export const useConfirmationMessageContext = () => useContext(ConfirmationMessageContext);
export default ConfirmationMessageProvider;
