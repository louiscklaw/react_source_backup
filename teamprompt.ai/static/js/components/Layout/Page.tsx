import ToastProvider from 'components/ToastProvider';
import { MAX_WIDTH } from 'config';
import { AnimatePresence } from 'framer-motion';
import type { PropsWithChildren } from 'react';
import React from 'react';
import { useLocation } from 'react-router-dom';
import styled, { css } from 'styled-components';

const Background = styled.div`
    background-color: #1e1e1e;
`;
const Main = styled.main<{ isHomePage?: boolean }>`
    max-width: ${MAX_WIDTH}px;
    margin: 0 auto;
    height: var(--app-height);
    max-height: var(--app-height);
    background-color: ${(props) => props.theme.colors.primaryColor};
    overflow: hidden;
    position: relative;
    display: flex;
    flex-direction: column;

    ${(props) =>
        props.isHomePage &&
        css`
            background-color: ${props.theme.colors.homepageBackgroundColor};
        `}
`;

const LoadingOverlay = styled.div`
    position: fixed;
    z-index: 1000;
    background-color: #000000;
    opacity: 0.5;
    top: 0;
    width: 100vw;
    height: 100vh;
`;
interface Props {
    isLoading?: boolean;
}

const Page: React.FC<PropsWithChildren<Props>> = ({ isLoading, children }) => {
    const location = useLocation();

    return (
        <AnimatePresence>
            <Background>
                {isLoading && <LoadingOverlay />}
                <Main isHomePage={location.pathname === '/'}>{children}</Main>
                <ToastProvider />
            </Background>
        </AnimatePresence>
    );
};

export default Page;
