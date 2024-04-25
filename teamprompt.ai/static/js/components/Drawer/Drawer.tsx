import { ReactComponent as Cross } from 'assets/icons/cross.svg';
import { useDrawerContext } from 'provider/DrawerProvider';
import React from 'react';
import styled from 'styled-components';
import { IconButton } from 'components/Button';
import { MAX_WIDTH } from 'config';
import { motion } from 'framer-motion';
import { Text } from 'components/Text';

interface Props {
    title?: string;
}

const Background = styled(motion.div)`
    max-width: ${MAX_WIDTH}px;
    margin: 0 auto;
    height: var(--app-height);
    max-height: var(--app-height);
    position: fixed;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    z-index: 101;
    top: 0px;
    background-color: rgba(0, 0, 0, 0.25);
`;

const Container = styled(motion.div)`
    max-height: var(--app-height);
    height: 100%;
    width: 280px;
    background-color: white;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 8px;
    box-shadow: -6px 0 16px rgb(0 17 40 / 8%);
`;

const Head = styled.div`
    display: flex;
    justify-content: space-between;
    flex: 0 0 auto;
    padding: 8px;
    padding-top: calc(var(--sat) + 8px);
`;

const Body = styled.div`
    flex: 1;
    overflow: auto;
`;

const CloseButton = styled(IconButton)`
    /* position: absolute; */
    color: ${(props) => props.theme.colors.textColor};
    top: 16px;
    right: 16px;

    svg {
        stroke: ${(props) => props.theme.colors.textColor};
    }
`;

const Drawer: React.FC<React.PropsWithChildren<Props>> = (props) => {
    const { title, children } = props;
    const { closeDrawer } = useDrawerContext();
    return (
        <Background>
            <Container
            // initial={{ x: '0%' }}
            // animate={{ x: 0, transition: { delay: 0.1, ease: 'easeInOut' } }}
            // exit={{ x: '0%', transition: { delay: 0.1, ease: 'easeInOut' } }}
            >
                <Head>
                    <div>
                        {title && (
                            <Text variant="subtitle" style={{ marginBottom: '16px' }}>
                                {title}
                            </Text>
                        )}
                    </div>
                    <CloseButton onClick={closeDrawer} icon={Cross} />
                </Head>
                <Body>{children}</Body>
            </Container>
        </Background>
    );
};

export default Drawer;
