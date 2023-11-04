import React from 'react';
import { Box } from '@mui/material';
import TextCustom from '../../../atoms/text/TextCustom';

interface TagsProps {
    tags: string[];
}

const Tags = ({ tags }: TagsProps) => {
    return (
        <Box className="tags">
            {tags.map((tag) => (
                <TextCustom className="tag" content={tag} key={tag} />
            ))}
        </Box>
    );
};

export default Tags;
