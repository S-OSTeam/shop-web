import React from 'react';
import { Box } from '@mui/material';
import TextButton from './TextButton';

interface DetailCategoryProps {
    address: addressData[];
}

interface addressData {
    id: number;
    address: string;
}

const DetailDepth = ({ address }: DetailCategoryProps) => {
    return (
        <Box className="depth">
            <TextButton content="Home" />
            {address.map((detail) => (
                <React.Fragment key={detail.id}>
                    {'>'}
                    <TextButton content={detail.address} />
                </React.Fragment>
            ))}
        </Box>
    );
};

export default DetailDepth;
