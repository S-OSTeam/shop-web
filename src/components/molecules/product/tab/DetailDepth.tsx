import React from 'react';
import { Box } from '@mui/material';
import ButtonCustom from '../../../atoms/button/ButtonCustom';
import TextCustom from '../../../atoms/text/TextCustom';
import { DepthAddress } from '../../../../util/GlobalTest';

interface DetailDepthProps {
    address: DepthAddress[];
}

const DetailDepth = ({ address }: DetailDepthProps) => {
    return (
        <Box className="detailDepth">
            <ButtonCustom className="depthBtn">
                <TextCustom className="depth" content="Home" />
            </ButtonCustom>
            {address.map((depth) => (
                <React.Fragment key={depth.id}>
                    {'>'}
                    <ButtonCustom className="depthBtn">
                        <TextCustom className="depth" content={depth.address} />
                    </ButtonCustom>
                </React.Fragment>
            ))}
        </Box>
    );
};

export default DetailDepth;
