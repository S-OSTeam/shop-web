import React from 'react';
import classNames from 'classnames';

interface TextTagProps {
    content: string;
}

const TextTag = ({ content }: TextTagProps) => {
    return <div className={classNames('tag')}>{content}</div>;
};

export default TextTag;
