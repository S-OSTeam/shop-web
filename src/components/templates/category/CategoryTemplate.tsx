import React from 'react';
import { ItemCategoryTreeResponse } from '@interface/category/Category';
import { Box } from '@mui/material';
import { Item, ItemInterface } from '@interface/item/Item';
import Popular from '@organisms/home/product/popular/Popular';

interface CategoryTemplateProps {
    categories: ItemCategoryTreeResponse[];
    items: ItemInterface[] | Item[] | undefined;
}

const CategoryTemplate = ({ categories, items }: CategoryTemplateProps) => {
    return (
        <Box style={{ marginTop: 80 }}>
            {categories ? (
                <h1>
                    {categories.map((category) => (
                        <div>{category.title}</div>
                    ))}
                </h1>
            ) : undefined}
            {items && <Popular popularItems={items} content="" />}
        </Box>
    );
};

export default CategoryTemplate;
