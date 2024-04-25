import React from 'react';
import CategoryItem from './CategoryItem';
import type { Category, Prompt } from '../types';
import useCategoryStore from 'store';
import { Box } from './Box';
import styled from 'styled-components';
import { Text } from './Text';

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 8px;
`;

const SmallText = styled(Text).attrs(() => ({ variant: 'small', color: 'placeholderColor' }))`
  &::before {
    content: '';
    width: 8px;
    height: 8px;
    background-color: ${props => props.theme.colors.primaryColor};
    display: inline-block;
    margin-right: 6px;
    border-radius: 50%;
  }
`;

interface Props {
  categories: Category[];
  prompts?: Prompt[];
  hideDescription?: boolean;
  withNullCategory?: boolean;
}

const CategoryList: React.FC<Props> = props => {
  const { hideDescription, categories, withNullCategory } = props;
  const { session } = useCategoryStore();
  const allowEdit = session && session?.role === 'admin';

  return (
    <>
      {!hideDescription && (
        <Header>
          <Text variant="body" color="placeholderColor" bold>
            Categories
          </Text>
          <SmallText>Number of prompts</SmallText>
        </Header>
      )}
      <Box padding="8px 0 32px 0">
        {categories.length === 0 && 'No category is found'}
        {categories.length > 0 &&
          categories.map((category, index) => (
            <CategoryItem
              key={category.categoryId}
              index={index}
              category={category}
              allowEdit={allowEdit}
              hideNumFlag={hideDescription}
            />
          ))}
        {withNullCategory && (
          <CategoryItem key="others" href="/prompts" category={{ name: 'Others', categoryId: '' }} hideNumFlag />
        )}
      </Box>
    </>
  );
};

export default CategoryList;
