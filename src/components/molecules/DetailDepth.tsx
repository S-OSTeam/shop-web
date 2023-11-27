import React from 'react';
import { Box } from '@mui/material';
import ButtonCustom from '../atoms/button/ButtonCustom';
import TextCustom from '../atoms/text/TextCustom';

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
            <ButtonCustom>
                <TextCustom content="Home" />
            </ButtonCustom>
            {address.map((detail) => (
                <React.Fragment key={detail.id}>
                    {'>'}
                    <ButtonCustom>
                        <TextCustom content={detail.address} />
                    </ButtonCustom>
                </React.Fragment>
            ))}
        </Box>
    );
};

export default DetailDepth;
