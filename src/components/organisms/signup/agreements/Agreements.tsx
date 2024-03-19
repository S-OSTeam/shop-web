import React from 'react';
import { Box, Divider } from '@mui/material';
import { useDomSizeCheckHook } from '@hooks/useDomSizeCheck.hook';

const Agreements = () => {
    const isInMobile = useDomSizeCheckHook(768);

    return (
        <div>
            {isInMobile ? (
                <Box>
                    <Divider />
                </Box>
            ) : (
                <Box>hello</Box>
            )}
        </div>
    );
};

export default Agreements;
