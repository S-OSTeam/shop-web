import React from 'react';
import { Stack } from '@mui/material';
import clsN from 'classnames';
import styles from '@templates/inquiry/notices/styles/Notices.module.scss';
import Text from '@atoms/text/Text';
import Chip from '@atoms/chip/Chip';

interface CollapseContextProps {
    context: string;
    imgUrls?: string[];
}

export const CollapseContext = ({ ...props }: CollapseContextProps) => {
    return (
        <Stack className={clsN(styles['secondary-container'])}>
            <Text text={props.context} variant="body1" />
            <Chip
                size="small"
                className={clsN(styles['secondary-container__chip'])}
                label={`${props.imgUrls?.length}건의 이미지`}
            />
        </Stack>
    );
};
