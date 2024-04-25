import CategoryList from 'components/CategoryList';
import Header from 'components/Header';
import { Page, Body } from 'components/Layout';
import React, { useEffect, useState } from 'react';
import { useParams, Navigate, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import PromptList from 'components/PromptList';
import { IconButton } from 'components/Button';
import { ReactComponent as Add } from 'assets/icons/add.svg';
import { AddCategoryModal } from 'components/Modal';
import { useModalContext } from 'provider/ModalProvider';
import AddPromptModal from 'components/Modal/AddPromptModal';
import useToggle from 'hooks/useToggle';
import useCategoryStore from 'store';
import { useRequireLogin } from 'hooks/useRequireLogin';
import { ActionButton, ActionMenu } from 'components/Action';
import Man from '../assets/man.png';
import { title } from 'components/Text';
import type { Category } from 'types';

const Empty = styled.div`
    color: ${(props) => props.theme.colors.primaryColor};
    ${title}
    font-weight: 700;
    text-align: center;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 75%;
    padding: 80px 24px;
    border-radius: 64px;
    margin-top: 5vh;
    background-color: ${(props) => props.theme.colors.primaryBackgroundColor};
`;

const Menu = styled(ActionMenu)`
    position: absolute;
    top: calc(56px + env(safe-area-inset-top));
    right: 16px;
    width: 160px;
`;

const Image = styled.img`
    width: 220px;
    max-width: 80%;
    height: auto;
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: 1;
`;

const MenuButton = styled(ActionButton)``;

const ChatButton = styled(IconButton)`
    position: absolute;
    right: 16px;
    bottom: 16px;
    min-height: 52px;
    min-width: 52px;
    border-radius: 100%;
`;

const CategoryPage: React.FC = () => {
    const { categoryId } = useParams<{ categoryId: string }>();
    const [showMenu, setShowMenu, menuRef, buttonRef] = useToggle<HTMLDivElement, HTMLButtonElement>();
    const [category, setCategory] = useState<Category | undefined>();
    const [isLoading, setIsLoading] = useState(true);
    const { openModal } = useModalContext();
    const { session, categories, addCategoryPrompt } = useCategoryStore();
    const requireLogin = useRequireLogin();
    const allowAddCategory = !session || session?.role === 'admin';
    const allowAddPrompt = !session || session?.role === 'admin' || session?.role === 'staff';
    const navigate = useNavigate();
    const emptyPage = category?.subCategories?.length === 0 && category?.prompts?.length === 0;

    useEffect(() => {
        if (categoryId) {
            const c = categories.find((c) => c.categoryId === categoryId);
            if (c) c.subCategories = categories.filter((c) => c.parentCategoryId === categoryId);
            setCategory(c);
            setIsLoading(false);
        }
    }, [categories, categoryId]);

    const onAddCategory = requireLogin(() => {
        if (categoryId) {
            openModal(<AddCategoryModal parentCategoryId={categoryId} />);
            setShowMenu(false);
        }
    });

    const onAddPrompt = requireLogin(() => {
        if (categoryId) {
            openModal(
                <AddPromptModal
                    categoryId={categoryId}
                    onAddPrompt={(prompt) => addCategoryPrompt(categoryId, prompt)}
                />
            );
            setShowMenu(false);
        }
    });

    const onAskNow = requireLogin(() => {
        navigate('/chat-room');
    });

    if (!category && !isLoading) return <Navigate to="/" />;

    return (
        <Page>
            <Header
                leading="back"
                title={category?.name}
                actions={
                    (allowAddCategory || allowAddPrompt) && (
                        <IconButton primary solid onClick={() => setShowMenu((i) => !i)} icon={Add} ref={buttonRef} />
                    )
                }
            >
                {showMenu && (
                    <Menu ref={menuRef}>
                        {allowAddCategory && <MenuButton onClick={onAddCategory}>Add category</MenuButton>}
                        {allowAddPrompt && <MenuButton onClick={onAddPrompt}>Add prompt</MenuButton>}
                    </Menu>
                )}
            </Header>
            <Body withSafeArea>
                {category?.subCategories && category.subCategories.length > 0 && (
                    <CategoryList categories={category.subCategories} />
                )}
                {category?.prompts && category.prompts.length > 0 && <PromptList prompts={category.prompts} />}
                {emptyPage && (
                    <>
                        <Empty>
                            No categories or prompts are found.
                            {/* <Text>No categories or prompts are found.</Text> */}
                        </Empty>
                        <Image src={Man} />
                    </>
                )}
                {!emptyPage && <ChatButton primary solid name="Comment-plus" onClick={onAskNow} />}
            </Body>
        </Page>
    );
};

export default CategoryPage;
