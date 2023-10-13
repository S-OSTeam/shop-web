import React from 'react';
import classNames from 'classnames';
import TextTag from '../../atoms/tag/TextTag';
import '../../../styles/scss/_tag.scss';

interface TagsProps {
    tags: string[];
}

const Tags = ({ tags }: TagsProps) => {
    return (
        <div className={classNames('tags')}>
            {tags.map((tag) => (
                <TextTag content={tag} key={tag} />
            ))}
        </div>
    );
};

export default Tags;
