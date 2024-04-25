import React, { useEffect, useState } from 'react';
import Login from './pages/LoginPage';
import { Navigate, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import ModalProvider from './provider/ModalProvider';
import ChatRoom from 'pages/ChatRoom';
import { calculateWindowHeight } from 'utils';
import NoMatch from 'pages/NoMatch';
import { ThemeProvider } from 'styled-components';
import { theme } from 'styles';
import CategoryPage from 'pages/CategoryPage';
import { GoogleOAuthProvider } from '@react-oauth/google';
import PromptPage from 'pages/PromptPage';
import useCategoryStore from 'store';
import ConfirmationMessageProvider from 'provider/ConfirmationMessageProvider';
import DrawerProvider from 'provider/DrawerProvider';
import PromptListPage from 'pages/PromptListPage';

const App: React.FC = () => {
    const { loadCategories } = useCategoryStore();
    const [isLoading, setIsLoading] = useState(true);
    // const navigate = useNavigate();

    useEffect(() => {
        loadCategories().then(() => {
            setIsLoading(false);
        });
    }, [loadCategories]);

    const onResize = () => {
        setTimeout(() => {
            calculateWindowHeight();
        }, 350);
    };

    useEffect(() => {
        calculateWindowHeight(true);
        if (screen.orientation?.lock) {
            screen.orientation.lock('portrait').catch(() => {
                // console.error('Failed to lock screen orientation:', error);
            });
        }
        window.addEventListener('resize', onResize);
        return () => {
            window.removeEventListener('resize', onResize);
        };
    }, []);

    if (isLoading) return null;

    return (
        <GoogleOAuthProvider clientId="710332269966-boh9g9g0p6ramk5hf4dhrflqti6birg6.apps.googleusercontent.com">
            <ThemeProvider theme={theme}>
                <ModalProvider>
                    <DrawerProvider>
                        <ConfirmationMessageProvider>
                            <Routes>
                                {/* <Route path="/dashboard" element={<Authenticated />}>
                            <Route index element={<Dashboard />} />
                            <Route path="chat-room" element={<ChatRoom />} />
                            <Route path="chat-room/:conversationId" element={<ChatRoom />} />
                            <Route path="category/:categoryId" element={<CategoryPage />} />
                            <Route path="prompt/:promptId" element={<PromptPage />} />
                        </Route> */}
                                <Route index element={<Dashboard />} />
                                <Route path="login" element={<Login />} />
                                {/* chat-room: Supports queries: { question: string } */}
                                <Route path="chat-room" element={<ChatRoom />} />
                                <Route path="chat-room/:conversationId" element={<ChatRoom />} />
                                <Route path="category/:categoryId" element={<CategoryPage />} />
                                <Route path="prompts" element={<PromptListPage />} />
                                <Route path="prompt/:promptId" element={<PromptPage />} />
                                <Route path="/404" element={<NoMatch />} />
                                <Route path="*" element={<Navigate replace to="/404" />} />
                            </Routes>
                        </ConfirmationMessageProvider>
                    </DrawerProvider>
                </ModalProvider>
            </ThemeProvider>
        </GoogleOAuthProvider>
    );
};

export default App;
