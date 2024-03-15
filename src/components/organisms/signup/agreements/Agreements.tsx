import React from 'react';
import { Box } from '@mui/material';
import { useDomSizeCheckHook } from '@hooks/useDomSizeCheck.hook';

const Agreements = () => {
    const isInMobile = useDomSizeCheckHook(768);

    return <div>{isInMobile ? <Box>agree?</Box> : <Box>hello</Box>}</div>;
};

export default Agreements;
