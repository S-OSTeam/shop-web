import React from 'react';

import { Variant } from '@mui/material/styles/createTypography';
import Text from '../../../atoms/contents/Text'
import HeadingTag from '../../../atoms/heading/Heading';

interface molParentProps {
    className?: string,
    type: Variant,
    text: string,
}
export const Heading = ({...props}: molParentProps) => {
    return (
        <HeadingTag
            variant={props.type}
            className={props.className}
        >
            <Text text={props.text}/>
        </HeadingTag>
    );
};
