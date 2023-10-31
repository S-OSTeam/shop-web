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
            <TextButton className="textButton" content="Home" />
            {address.map((detail) => (
                <React.Fragment key={detail.id}>
                    {'>'}
                    <TextButton className="textButton" content={detail.address} />
                </React.Fragment>
            ))}
        </Box>
    );
};

export default DetailDepth;
