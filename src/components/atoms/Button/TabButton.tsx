import React from 'react';
import { Button } from '@mui/material';

interface TabButtonProps {
    isTab: boolean;
    content: string;
}

const TabButton = ({ content, isTab }: TabButtonProps) => {
    return (
        <Button className={isTab ? 'isTab active' : 'isTab'} disabled={isTab}>
            {content}
        </Button>
    );
};

export default TabButton;
