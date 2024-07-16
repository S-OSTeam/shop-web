import React from 'react';
import { ItemCategoryTreeResponse } from '@interface/category/Category';
import { Box } from '@mui/material';

interface CategoryTemplateProps {
    categories: ItemCategoryTreeResponse[];
}

const CategoryTemplate = ({ categories }: CategoryTemplateProps) => {
    return (
        <Box style={{ marginTop: 80 }}>
            {categories ? (
                <h1>
                    {categories.map((category) => (
                        <div>{category.title}</div>
                    ))}
                </h1>
            ) : undefined}
        </Box>
    );
};

export default CategoryTemplate;
