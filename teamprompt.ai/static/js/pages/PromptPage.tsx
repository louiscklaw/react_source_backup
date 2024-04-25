import Header from 'components/Header';
import { Page, Body, Footer } from 'components/Layout';
import React, { useMemo, useState, useEffect } from 'react';
import { useParams, Navigate, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Button, IconButton, PlainButton } from 'components/Button';
import { ReactComponent as Edit } from 'assets/icons/edit.svg';
import { ReactComponent as Copy } from 'assets/icons/copy.svg';
import { ReactComponent as Heart } from 'assets/icons/heart.svg';
import { ReactComponent as HeartSolid } from 'assets/icons/heart-solid.svg';
import { ReactComponent as Attach } from 'assets/icons/attach.svg';
import useCategoryStore from 'store';
import { Form, Label, Textarea } from 'components/Form';
import { useRequireLogin } from 'hooks/useRequireLogin';
import { TemplateContent, TemplatePlaceholder } from 'components/Prompt';
import { EditPromptModal } from 'components/Modal';
import { useModalContext } from 'provider/ModalProvider';
import { copyText, updateTextareaHeight } from 'utils';
import { Text } from 'components/Text';
import { toast } from 'react-toastify';
import type { Prompt } from 'types';
import { getPrompt, applyPrompt, likePrompt, unlikePrompt } from 'service/promptService';
import usePageBack from 'hooks/usePageBack';

const Actions = styled.div`
    display: flex;
    gap: 8px;
    margin-bottom: 16px;
`;

const PromptFieldTextarea = styled(Textarea)`
    max-height: 122px;
`;

const PromptPage: React.FC = () => {
    const { promptId } = useParams<{ promptId: string }>();
    const [prompt, setPrompt] = useState<Prompt | undefined>();
    const [placeholdersContent, setPlaceholdersContent] = useState<Record<string, string>>({});
    const [isLoading, setIsLoading] = useState(true);
    const { session, updateCategoryPrompt, deleteCategoryPrompt } = useCategoryStore();
    const navigate = useNavigate();
    const requireLogin = useRequireLogin();
    const { openModal } = useModalContext();
    const pageBack = usePageBack();

    useEffect(() => {
        setPrompt(undefined);
        setIsLoading(true);
        if (promptId) getPrompt(promptId).then((data) => {
            setPrompt(data);
            setIsLoading(false);
        })
    }, [promptId]);

    const isLiked = useMemo(
        () => (prompt?.userLikes || []).some((like) => like.userId === session?.userId),
        [prompt, session]
    );
    const allowEdit = session && (session.role === 'admin' || session.userId === prompt?.userId);

    useEffect(() => {
        if (prompt) {
            setPlaceholdersContent(
                prompt.placeholders.reduce((content, placeholder) => ({ ...content, [placeholder]: '' }), {})
            );
        }
    }, [prompt]);

    const onEditPromptClick = () => {
        if (!prompt) return;

        openModal(
            <EditPromptModal
                categoryId={prompt.categoryId}
                promptId={prompt.promptId}
                promptName={prompt.title}
                promptDescription={prompt.userRemarks || ''}
                promptContent={prompt.templateContent}
                onUpdatePrompt={(p) => {
                    if (prompt.categoryId) updateCategoryPrompt(prompt.categoryId, p);
                    setPrompt(p);
                }}
                onDeletePrompt={(pid) => {
                    if (prompt.categoryId) deleteCategoryPrompt(prompt.categoryId, pid);
                    pageBack();
                }}
            />
        );
    };

    const onApplyPrompt = requireLogin(() => {
        if (!prompt) return;

        if (Object.values(placeholdersContent).some((content) => !content || content.length === 0)) {
            toast.error('Please enter a valid placeholder.', {
                toastId: 'invalid-input'
            });
            return;
        }

        setIsLoading(true);
        applyPrompt(prompt.promptId, { inputs: placeholdersContent })
            .then((question) => {
                navigate('/chat-room', { state: { question } });
            })
            .catch((err) => {
                toast.error(err.response.data || err.message, {
                    toastId: 'invalid-input'
                });
                setIsLoading(false);
            });
    });

    const onLike = requireLogin(() => {
        if (!prompt) return;

        (isLiked ? unlikePrompt(prompt.promptId) : likePrompt(prompt.promptId)).then((data) => {
            setPrompt(data);
        }).catch((err) => {
            toast.error(err.response.data || err.message, {
                toastId: 'invalid-input'
            });
        });
    });

    const onCopy = requireLogin(() => {
        if (!prompt) return;

        if (Object.values(placeholdersContent).some((content) => !content || content.length === 0)) {
            toast.error('Please enter a valid placeholder.', {
                toastId: 'invalid-input'
            });
            return;
        }

        const fullText = prompt.placeholders.reduce(
            (result, placeholder) => result.replace(`{${placeholder}}`, placeholdersContent[placeholder]),
            prompt.templateContent
        );
        copyText(fullText);
        toast('Copied to clipboard', {
            toastId: 'copy'
        });
    });

    const onShare = () => {
        if (!prompt) return;

        if (navigator.share) {
            navigator
                .share({
                    title: 'TeamPrompt',
                    text: prompt.title,
                    url: window.location.href
                })
                .then(() => console.log('Successful share'))
                .catch((error) => console.log('Error sharing', error));
        } else {
            copyText(window.location.href);
            toast('Copied to clipboard', {
                toastId: 'copy'
            });
        }
    };

    if (!prompt && !isLoading) return <Navigate to="/" />;

    return (
        <Page>
            <Header
                leading="back"
                title="Prompt"
                actions={allowEdit && <IconButton primary solid icon={Edit} onClick={onEditPromptClick} minimize />}
            />
            <Body>
                <Form>
                    <Text variant="body" style={{ marginBottom: '16px' }} bold>
                        {prompt?.title}
                    </Text>
                    <Label>{prompt?.userRemarks}</Label>
                    <TemplateContent>
                        {prompt?.templateContent
                            .split(/{[\w\s]+}/)
                            .filter((content) => content.trim().length > 0)
                            .map((word, index) => (
                                <React.Fragment key={index}>
                                    {word}
                                    {prompt?.placeholders[index] && (
                                        <TemplatePlaceholder>{prompt?.placeholders[index]}</TemplatePlaceholder>
                                    )}
                                </React.Fragment>
                            ))}
                        {/* {prompt.templateContent} */}
                    </TemplateContent>
                    {prompt?.placeholders.map((placeholder, index) => (
                        <React.Fragment key={`${index}-${placeholder}`}>
                            <Label>{placeholder}</Label>
                            <PromptFieldTextarea
                                value={placeholdersContent[placeholder]}
                                onChange={(e) => {
                                    updateTextareaHeight(e);
                                    setPlaceholdersContent((content) => ({
                                        ...content,
                                        [placeholder]: e.target.value
                                    }));
                                }}
                            />
                        </React.Fragment>
                    ))}
                    <Actions>
                        <PlainButton onClick={onLike} primary>
                            {isLiked ? <HeartSolid /> : <Heart />}
                            {prompt?.userLikes.length}
                        </PlainButton>
                        <PlainButton onClick={onCopy} primary>
                            <Copy />
                            Copy prompt
                        </PlainButton>
                        <PlainButton onClick={onShare} primary>
                            <Attach />
                            Copy link
                        </PlainButton>
                    </Actions>
                </Form>
            </Body>
            <Footer>
                <Button type="button" isLoading={isLoading} onClick={onApplyPrompt} expand style={{ marginTop: 'auto' }}>
                    Prompt it
                </Button>
            </Footer>
        </Page>
    );
};

export default PromptPage;
