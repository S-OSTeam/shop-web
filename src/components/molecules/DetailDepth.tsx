import React from 'react';
import { Box } from '@mui/material';
import CustomButton from '../atoms/button/CustomButton';
import CustomText from '../atoms/text/CustomText';

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
            <CustomButton>
                <CustomText content="Home" />
            </CustomButton>
            {address.map((detail) => (
                <React.Fragment key={detail.id}>
                    {'>'}
                    <CustomButton>
                        <CustomText content={detail.address} />
                    </CustomButton>
                </React.Fragment>
            ))}
        </Box>
    );
};

export default DetailDepth;
