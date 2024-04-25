import Header from 'components/Header';
import { Page, Body } from 'components/Layout';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import PromptList from 'components/PromptList';
import { IconButton } from 'components/Button';
import { useRequireLogin } from 'hooks/useRequireLogin';
import type { Prompt } from 'types';
import { getPrompts } from 'service/promptService';

const ChatButton = styled(IconButton)`
    position: absolute;
    right: 16px;
    bottom: 16px;
    min-height: 52px;
    min-width: 52px;
    border-radius: 100%;
`;

const PromptListPage: React.FC = () => {
    const [prompts, setPrompts] = useState<Prompt[]>([]);
    const [loading, setLoading] = useState(true);
    const requireLogin = useRequireLogin();
    const navigate = useNavigate();

    const onAskNow = requireLogin(() => {
        navigate('/chat-room');
    });

    useEffect(() => {
        setLoading(true);
        getPrompts({ noCategory: 'true' }).then((data) => {
            setPrompts(data);
            setLoading(false);
        });
    }, []);

    return (
        <Page>
            <Header leading="back" title="Others" />
            <Body withSafeArea>
                {!loading && <PromptList prompts={prompts} />}
                <ChatButton primary solid name="Comment-plus" onClick={onAskNow} />
            </Body>
        </Page>
    );
};

export default PromptListPage;
