import type { PropsWithChildren } from 'react';
import React, { useMemo } from 'react';
import styled from 'styled-components';
import { IconButton } from './Button';
import type { Category } from 'types';
import { ReactComponent as Edit } from '../assets/icons/edit.svg';
import { ReactComponent as Caret } from '../assets/icons/caret-left.svg';
import { useNavigate } from 'react-router-dom';
import { EditCategoryModal } from 'components/Modal';
import { useModalContext } from 'provider/ModalProvider';
import useCategoryStore from 'store';
import ListItem from './ListItem';
import { small, Text } from 'components/Text';

const Content = styled.div`
    display: flex;
    align-items: center;
    flex: 1;
    gap: 8px;
`;

const NumFlag = styled.span`
    display: flex;
    width: 24px;
    height: 24px;
    border-radius: 50%;
    ${small}
    background: ${(props) => props.theme.colors.primaryColor};
    color: ${(props) => props.theme.colors.primaryTextColor};
    justify-content: center;
    align-items: center;
`;

interface Props {
    category: Category;
    index?: number;
    allowEdit?: boolean;
    hideNumFlag?: boolean;
    href?: string;
}

const CategoryItem: React.FC<PropsWithChildren<Props>> = (props) => {
    const { category, index, allowEdit, hideNumFlag, href } = props;
    const { getPromptCount } = useCategoryStore();
    const { openModal } = useModalContext();
    const navigate = useNavigate();

    const promptCount = useMemo(() => {
        if (hideNumFlag) return 0;
        return getPromptCount(category.categoryId);
    }, [category.categoryId, hideNumFlag, getPromptCount]);

    const onClickRoute = () => {
        navigate(href || `/category/${category.categoryId}`, { state: { from: category.categoryId } });
    };

    const onEditClick = () => {
        openModal(<EditCategoryModal category={category} />);
    };

    return (
        <ListItem
            index={index}
            leading={allowEdit && <IconButton icon={Edit} onClick={onEditClick} />}
            onClick={onClickRoute}
        >
            <Content>
                <Text style={{ marginRight: 'auto' }}>{category.name}</Text>
                {!hideNumFlag && <NumFlag>{promptCount}</NumFlag>}
                <Caret />
            </Content>
        </ListItem>
    );
};

export default CategoryItem;
