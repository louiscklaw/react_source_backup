import type { PropsWithChildren } from 'react';
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Container = styled(motion.div)`
    min-height: 56px;
    border-bottom: 1px solid #f4f4f4;
    gap: 0px;
    display: flex;

    svg {
        fill: #2e2e2e;
    }
`;

const MainButton = styled.button`
    flex: 1;
    padding: 8px;
    cursor: pointer;
`;

interface Props extends React.ComponentPropsWithoutRef<'button'> {
    index?: number;
    leading?: React.ReactNode;
    trailing?: React.ReactNode;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const ListItem: React.FC<PropsWithChildren<Props>> = (props) => {
    const { index = 0, leading, trailing, onClick, children, className, ...rest } = props;

    return (
        <Container
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1, transition: { delay: index * 0.03 } }}
            exit={{ x: -20, opacity: 0 }}
            transition={{ type: 'spring' }}
            className={className}
        >
            {leading}
            <MainButton onClick={onClick} {...rest}>
                {children}
            </MainButton>
            {trailing}
        </Container>
    );
};

export default ListItem;
