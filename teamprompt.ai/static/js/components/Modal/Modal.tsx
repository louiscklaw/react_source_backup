import { ReactComponent as Cross } from 'assets/icons/cross.svg';
import { useModalContext } from 'provider/ModalProvider';
import React from 'react';
import styled from 'styled-components';
import { IconButton } from 'components/Button';
import { MAX_WIDTH } from 'config';
import { motion } from 'framer-motion';
import { Text } from 'components/Text';

interface Props {
    title: string;
    noClose?: boolean;
}

const Background = styled(motion.div)`
    background-color: rgba(0, 0, 0, 0.8);
    position: fixed;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 101;
    top: 0px;
    height: var(--app-height);
    padding-top: var(--sat);
`;

const Container = styled(motion.div)`
    max-width: ${MAX_WIDTH - 100}px;
    width: calc(100% - 32px);
    padding: 24px;
    background-color: white;
    position: relative;
    max-height: calc(100% - 32px - var(--sat));
    overflow: auto;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
`;

const CloseButton = styled(IconButton)`
    position: absolute;
    color: ${(props) => props.theme.colors.textColor};
    top: 16px;
    right: 16px;

    svg {
        stroke: ${(props) => props.theme.colors.textColor};
    }
`;

const Modal: React.FC<React.PropsWithChildren<Props>> = (props) => {
    const { title, children, noClose = false } = props;
    const { closeModal } = useModalContext();
    return (
        <Background initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <Container
                initial={{ y: -40 }}
                animate={{ y: 0, transition: { delay: 0.1, ease: 'easeInOut' } }}
                exit={{ y: -40, transition: { delay: 0.1, ease: 'easeInOut' } }}
            >
                <Text variant="subtitle" style={{ marginBottom: '16px', marginRight: '32px' }}>
                    {title}
                </Text>
                {!noClose && <CloseButton onClick={closeModal} icon={Cross} />}
                {children}
            </Container>
        </Background>
    );
};

export default Modal;
