import React, { MouseEvent } from 'react';
import { Button } from '@mui/material';

interface TabButtonProps {
    isTab: boolean;
    content: string;
    onclick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

const TabButton = ({ content, isTab, onclick }: TabButtonProps) => {
    return (
        <Button className={isTab ? 'isTab active' : 'isTab'} disabled={isTab} onClick={onclick}>
            {content}
        </Button>
    );
};

TabButton.default = {
    onclick: undefined,
};

export default TabButton;
