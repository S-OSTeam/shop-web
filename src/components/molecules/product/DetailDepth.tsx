import React from 'react';
import { Box } from '@mui/material';
import TextButton from '../../atoms/button/TextButton';
import { testAddressData } from '../../../pages/product/ProductInfo';

interface DetailCategoryProps {
    address: testAddressData[];
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
