import React from 'react';
import { IconButton, Stack } from '@mui/material';
import Text from '@atoms/text/Text';
import { MoreVert } from '@mui/icons-material';

interface TRowTitleProps {
    title: string;
    tRowClassNames: {
        stackClsN?: string;
        titleClsN?: string;
        IconClsN?: string;
    };
    uid: string;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const TRowTitleArea = ({ ...props }: TRowTitleProps) => {
    const { stackClsN, titleClsN, IconClsN } = props.tRowClassNames;
    return (
        <Stack key={props.uid} direction="row" className={stackClsN} alignItems="center">
            <Text text={props.title} className={titleClsN} />
            <IconButton onClick={props.onClick} className={IconClsN}>
                <MoreVert />
            </IconButton>
        </Stack>
    );
};
