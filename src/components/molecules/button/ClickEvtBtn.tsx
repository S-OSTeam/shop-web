import React from 'react';

import Text from '../../atoms/text/Text';
import Button from '../../atoms/button/Button';

interface molParentProps {
    id: string,
    molClassName: string;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    text: string;
}

// clickEventBtn
export const ClickEventBtn = ({ ...props }: molParentProps) => {
    return (
        <Button
            id={props.id}
            className={props.molClassName}
            onClick={props.onClick}>
            <Text className='span' text={props.text} />
        </Button>
    );
};
