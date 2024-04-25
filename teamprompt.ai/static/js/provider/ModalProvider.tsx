import { AnimatePresence } from 'framer-motion';
import type { PropsWithChildren} from 'react';
import React, { createContext, useContext, useState } from 'react';

const emptyFunction = function () {
    return;
};

const ModalContext = createContext<{ openModal: (modal: React.ReactNode) => void; closeModal: () => void }>({
    openModal: emptyFunction,
    closeModal: emptyFunction,
});

const ModalProvider: React.FC<PropsWithChildren> = ({ children }) => {
    const [modal, setModal] = useState<React.ReactNode>(null);

    return (
        <ModalContext.Provider value={{ openModal: setModal, closeModal: () => setModal(null) }}>
            {children}
            <AnimatePresence>{modal}</AnimatePresence>
        </ModalContext.Provider>
    );
};

export const useModalContext = () => useContext(ModalContext);
export default ModalProvider;
