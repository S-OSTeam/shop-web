import React from 'react';
import { Box } from '@mui/material';
import { useSearchParams } from 'react-router-dom';

const CategoryPage = () => {
    const [searchPararm] = useSearchParams();
    const categoryId = searchPararm.get('categoryId');

    return (
        <Box>
            <h1 style={{ marginTop: 80 }}>{categoryId}</h1>
        </Box>
    );
};

export default CategoryPage;
