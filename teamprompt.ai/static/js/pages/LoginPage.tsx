import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import bg from 'assets/bg.jpg';
import logo from 'assets/logo-secondary.png';
import { Page } from 'components/Layout';
import useCategoryStore from 'store';
import { hexToRgba } from 'utils';
import LoginForm from 'components/LoginForm';

const Banner = styled.div`
    background-image: url(${bg});
    min-height: 150px;
    flex: 1;
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
    flex: 3;
    background: #ffffff;
    padding: 48px 24px;
    border-top-left-radius: 40px;
    border-top-right-radius: 40px;
    margin-top: -40px;
`;

const Title = styled.h1`
    font-weight: 600;
    font-size: 24px;
    margin-bottom: 32px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const GuestButton = styled.button`
    color: ${(props) => props.theme.colors.primaryColor};
    background: none;
    transition: 0.2s;
    padding: 8px;
    font-size: 10px;
    border-radius: 8px;

    &:hover {
        background: ${(props) => hexToRgba(props.theme.colors.primaryColor, 0.2)};
    }
`;

const LoginPage: React.FC = () => {
    const { session } = useCategoryStore();
    const navigate = useNavigate();
    const location = useLocation();

    const handleLogin = () => {
        if (location.state?.from) {
            navigate(location.state?.from);
        } else {
            navigate('/');
        }
    };

    useEffect(() => {
        if (session) {
            navigate('/');
        }
    }, []);

    return (
        <Page>
            <Banner>
                <img src={logo} />
            </Banner>
            <Body>
                <Title>
                    Login
                    <GuestButton onClick={() => navigate('/')}>Continue as a guest</GuestButton>
                </Title>
                <LoginForm onLoginSuccess={handleLogin} />
            </Body>
        </Page>
    );
};

export default LoginPage;
