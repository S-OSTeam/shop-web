import React from 'react';
import { Box } from '@mui/material';
import Shopping from '@templates/shopping/Shopping';

const ShoppingPage = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh',
            }}
        >
            <Box sx={{ flexDirection: 'column' }}>
                <Shopping />
            </Box>
        </Box>
    );
};

export default ShoppingPage;
