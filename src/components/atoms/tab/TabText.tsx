import React from 'react';
import { Box, Typography } from '@mui/material';

interface TabTextProps {
    content: string;
    dataRef: React.Ref<HTMLDivElement>;
}

const TabText = ({ content, dataRef }: TabTextProps) => {
    return (
        <Box className="tabText" ref={dataRef}>
            <Typography>{content}</Typography>
        </Box>
    );
};

export default TabText;
