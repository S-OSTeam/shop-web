import React from 'react';
import { Button } from '@mui/material';

interface TextButtonProps {
    content: string;
}

const TextButton = ({ content }: TextButtonProps) => {
    return <Button className="textButton">{content}</Button>;
};

export default TextButton;
