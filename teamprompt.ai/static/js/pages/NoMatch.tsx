import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import bg from '../assets/bg.jpg';
import logo from '../assets/logo-secondary.png';
import { Page } from 'components/Layout';
import { Button } from 'components/Button';
import { Box } from 'components/Box';

const Banner = styled.div`
    background-image: url(${bg});
    min-height: 150px;
    height: 25vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-size: 100%;
    padding-bottom: 40px;

    img {
        width: 33vw;
        max-width: 260px;
    }
`;

const Body = styled.div`
    flex: 1;
    background: #ffffff;
    padding: 48px 24px;
    border-top-left-radius: 40px;
    border-top-right-radius: 40px;
    margin-top: -40px;
    text-align: center;
`;

const Title = styled.h1`
    font-weight: 600;
    font-size: 40px;
    margin-bottom: 32px;
`;

const NoMatch: React.FC = () => {
    const navigate = useNavigate();
    return (
        <Page>
            <Banner>
                <img src={logo} />
            </Banner>
            <Body>
                <Title>404</Title>
                <Box mb="32px">
                    <span>This page could not be found.</span>
                </Box>
                <Button expand onClick={() => navigate('/')}>
                    Back
                </Button>
            </Body>
        </Page>
    );
};
export default NoMatch;
