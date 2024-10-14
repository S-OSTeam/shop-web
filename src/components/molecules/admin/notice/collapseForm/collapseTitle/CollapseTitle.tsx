import React from 'react';
import { Stack } from '@mui/material';
import Text from '@atoms/text/Text';
import { formatDate } from '@util/common/FormatDate';
import { TRowTitleArea } from '@molecules/admin/notice/collapseForm/tRowTitle/TRowTitle';
import clsN from 'classnames';
import styles from './styles/CollapseTitle.module.scss';

interface CollapseTitleProps {
    uid: string;
    title: string;
    uploader: string;
    uploadDate: Date;
    fixedDate?: Date;
    onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    popoverProps: {
        popstate: boolean;
        onClose: () => void;
    };
}

export const CollapseTitle = ({ ...props }: CollapseTitleProps) => {
    const { popoverProps } = props;
    return (
        <Stack key={props.uid} className={clsN(styles['primary-container'])}>
            <TRowTitleArea
                popstate={popoverProps.popstate}
                onClose={popoverProps.onClose}
                uid={props.uid}
                title={props.title}
                onClick={props.onClick}
                tRowClassNames={{
                    stackClsN: '',
                    titleClsN: clsN(styles['primary-container__header']),
                    IconClsN: '',
                }}
            />

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
