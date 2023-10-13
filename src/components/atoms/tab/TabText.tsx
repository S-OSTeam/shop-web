import React from 'react';
import { Box } from '@mui/material';

interface TabTextProps {
    content: string;
    dataRef: React.Ref<HTMLDivElement>;
}

const TabText = ({ content, dataRef }: TabTextProps) => {
    return (
        <Box className="tabText" ref={dataRef}>
            {content}
        </Box>
    );
};

export default TabText;
