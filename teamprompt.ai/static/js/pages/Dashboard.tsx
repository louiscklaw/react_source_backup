import React, { useMemo } from 'react';
import { AddCategoryModal } from 'components/Modal';
import CategoryList from '../components/CategoryList';
import { useNavigate } from 'react-router-dom';
import { useModalContext } from 'provider/ModalProvider';
import Header from 'components/Header';
import { IconButton, PlainButton } from 'components/Button';
import { ReactComponent as CommentAdd } from 'assets/icons/comment-plus.svg';
import { ReactComponent as SquareAdd } from 'assets/icons/add.svg';
import SearchBar from 'components/SearchBar';
import { Flex } from 'components/Box';
import useCategoryStore from 'store';
import { Page, Body } from 'components/Layout';
import { useRequireLogin } from 'hooks/useRequireLogin';
import { Text } from 'components/Text';
import styled from 'styled-components';

const Fixed = styled.div`
    position: sticky;
    z-index: 10;
    top: 0;
`;

const ChatButton = styled(IconButton)`
    position: absolute;
    right: 16px;
    bottom: 16px;
    min-height: 52px;
    min-width: 52px;
    border-radius: 100%;
`;

const Dashboard: React.FC = () => {
    const navigate = useNavigate();
    const { openModal } = useModalContext();
    const { categories, session } = useCategoryStore();
    const requireLogin = useRequireLogin();
    const allowAddCategory = session?.role === 'admin';

    const mainCategories = useMemo(() => categories.filter((c) => !c.parentCategoryId), [categories]);

    const onNewCategoryClick = requireLogin(() => {
        openModal(<AddCategoryModal />);
    });

    const onAskNow = requireLogin(() => {
        // @todo - pass template
        navigate('/chat-room');
    });

    return (
        <Page>
            <Header withProfile />
            <Body noPadding withSafeArea>
                <Fixed>
                    <SearchBar />
                </Fixed>
                <Flex justifyContent="space-between" padding="32px 24px 0 24px">
                    <Text variant="title">Main Category</Text>
                    {allowAddCategory && (
                        <PlainButton primary onClick={onNewCategoryClick}>
                            <SquareAdd />
                            Add category
                        </PlainButton>
                    )}
                </Flex>
                <Flex flexDirection="column" padding="0 16px 32px">
                    <CategoryList categories={mainCategories} hideDescription withNullCategory />
                </Flex>
                <ChatButton primary solid icon={CommentAdd} onClick={onAskNow} />
            </Body>
        </Page>
    );
};

export default Dashboard;
