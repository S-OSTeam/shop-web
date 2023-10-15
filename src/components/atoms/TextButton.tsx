import React from 'react';
import { Button } from '@mui/material';

interface TextButtonProps {
    content: string;
    onclick?: () => void;
}

const TextButton = ({ content, onclick }: TextButtonProps) => {
    return (
        <Button className="textButton" onClick={onclick}>
            {content}
        </Button>
    );
};

TextButton.defaultProps = {
    onclick: undefined,
};
export default TextButton;
