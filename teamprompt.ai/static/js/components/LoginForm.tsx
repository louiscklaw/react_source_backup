import type { CredentialResponse} from '@react-oauth/google';
import { GoogleLogin } from '@react-oauth/google';
import React, { useState } from 'react';
import useCategoryStore from 'store';
import styled from 'styled-components';
import { Button } from './Button';
import { Form, Label, Input, Error } from './Form';

const OtherLoginMethod = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    align-items: center;
    margin-top: 24px;
`;

const Dividend = styled.div`
    position: relative;
    text-align: center;
    opacity: 0.4;

    &::before {
        position: absolute;
        content: '';
        width: 120px;
        height: 1px;
        top: 50%;
        left: calc(-128px);
        background-color: ${(props) => props.theme.colors.textColor};
    }

    &::after {
        position: absolute;
        content: '';
        width: 120px;
        height: 1px;
        top: 50%;
        right: calc(-128px);
        background-color: ${(props) => props.theme.colors.textColor};
    }
`;

interface Props {
    onLoginSuccess?: () => void;
}

const LoginForm: React.FC<Props> = ({ onLoginSuccess }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string>('');
    const { login } = useCategoryStore();

    const onUsernameChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        setUsername(event.target.value);
    };

    const onPasswordChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        setPassword(event.target.value);
    };

    const onUsernamePasswordLogin: React.MouseEventHandler<HTMLButtonElement> = async (e) => {
        e.preventDefault();

        if (!username || !password) {
            setError('Username / password invalid');
            return;
        }

        setIsLoading(true);
        setError('');

        try {
            await login({ username, password });
            onLoginSuccess?.();
        } catch (e: any) {
            setError(e.response?.data || e.message || 'Error');
        } finally {
            setTimeout(() => {
                setIsLoading(false);
            }, 500);
        }
    };

    const onGoogleLoginSuccess = async (credentialResponse: CredentialResponse) => {
        if (!credentialResponse.credential) {
            setError('Google account not found');
            return;
        }
        setIsLoading(true);
        setError('');

        try {
            await login({ googleIdToken: credentialResponse.credential });
            onLoginSuccess?.();
        } catch (e: any) {
            setError(e.response?.data || e.message || 'Error');
        } finally {
            setTimeout(() => {
                setIsLoading(false);
            }, 500);
        }
    };

    return (
        <Form>
            <Label>Username</Label>
            <Input type="text" value={username} onChange={onUsernameChange} />
            <Label>Password</Label>
            <Input type="password" value={password} onChange={onPasswordChange} />
            <Button type="submit" isLoading={isLoading} mt={20} onClick={onUsernamePasswordLogin} expand>
                Login
            </Button>
            {error && !isLoading && <Error>{error}</Error>}
            <OtherLoginMethod>
                <Dividend>or</Dividend>
                <GoogleLogin
                    size="large"
                    width="100%"
                    useOneTap
                    onSuccess={onGoogleLoginSuccess}
                    onError={() => {
                        setError('Google login failed');
                    }}
                />
            </OtherLoginMethod>
        </Form>
    );
};

export default LoginForm;
