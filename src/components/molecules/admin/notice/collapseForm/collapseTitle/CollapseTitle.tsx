import React from 'react';
import { Stack } from '@mui/material';
import Text from '@atoms/text/Text';
import { formatDate } from '@util/common/FormatDate';
import clsN from 'classnames';
import styles from './styles/CollapseTitle.module.scss';

interface CollapseTitleProps {
    uid: string;
    title: string;
    uploader: string;
    uploadDate: Date;
    fixedDate?: Date;
}

export const CollapseTitle = ({ ...props }: CollapseTitleProps) => {
    return (
        <Stack key={props.uid} className={clsN(styles['primary-container'])}>
            <Text text={props.title} className={clsN(styles['primary-container__header'])} />
            <Text variant="subtitle2" text={`업로더 - ${props.uploader}`} />
            <Stack direction="row" className={clsN(styles['secondary-container__date'])}>
                <Text
                    variant="caption"
                    text={`등록일 - ${formatDate(props.uploadDate)}`}
                    className={clsN(styles['secondary-container__date__upload'])}
                />
                {props.fixedDate && (
                    <Text
                        variant="caption"
                        text={`수정일 - ${formatDate(props.fixedDate)}`}
                        className={clsN(styles['secondary-container__date__fixed'])}
                    />
                )}
            </Stack>
        </Stack>
    );
};
