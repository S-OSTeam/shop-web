import React from 'react';
import { ItemCategoryTreeResponse } from '@interface/category/Category';
import { Box } from '@mui/material';
import { ItemInterface } from '@util/test/interface/Item';
import Popular from '@organisms/home/product/popular/Popular';
import Text from '@atoms/text/Text';

interface CategoryTemplateProps {
    categoryTitle: string;
    categories: ItemCategoryTreeResponse[];
    items: ItemInterface[];
    onProductClick?: (item: ItemInterface) => void;
}

const CategoryTemplate = ({ categoryTitle, categories, items, onProductClick }: CategoryTemplateProps) => {
    return (
        <Box style={{ marginTop: 80 }}>
            <Box>
                <Text variant="subtitle1" text={categoryTitle} />
            </Box>
            {categories ? (
                <h1>
                    {categories.map((category) => (
                        <div>{category.title}</div>
                    ))}
                </h1>
            ) : undefined}
            <Popular popularItems={items} content="" onProductClick={onProductClick} />
        </Box>
    );
};

CategoryTemplate.defaultProps = {
    onProductClick: undefined,
};

export default CategoryTemplate;
