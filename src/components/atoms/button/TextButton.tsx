import React from 'react';
import { Button } from '@mui/material';
import classNames from 'classnames';

interface TextButtonProps {
    content: string;
    className: string;
    onclick?: () => void;
}

const TextButton = ({ content, className, onclick }: TextButtonProps) => {
    return (
        <Button className={classNames(className)} onClick={onclick}>
            {content}
        </Button>
    );
};

TextButton.defaultProps = {
    onclick: undefined,
};

export default TextButton;
