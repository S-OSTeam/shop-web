import React from 'react';
import { Box } from '@mui/material';
import TextButton from '../../atoms/Button/TextButton';

interface DetailCategoryProps {
    address: string[];
}

const DetailDepth = ({ address }: DetailCategoryProps) => {
    return (
        <Box className="depth">
            <TextButton content="Home" />
            {address.map((detail) => (
                <TextButton content={detail} />
            ))}
        </Box>
    );
};

export default DetailDepth;
