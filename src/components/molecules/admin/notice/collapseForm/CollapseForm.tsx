import React from 'react';
import { Box, Divider } from '@mui/material';
import { CollapseTitle } from '@molecules/admin/notice/collapseForm/collapseTitle/CollapseTitle';
import { CollapseContext } from '@molecules/admin/notice/collapseForm/collapseContext/CollapseContext';
import clsN from 'classnames';
import styles from './styles/CollapseForm.module.scss';

interface CollapseFormProps {
    uid: string;
    title: string;
    uploader: string;
    uploadDate: Date;
    context: string;
    fixedDate?: Date;
    imgUrls?: string[];
    /* 관리 속성 */
    // 수정하기 버튼 이벤트
    // onClickEdit?: (e: React.ChangeEvent<HTMLButtonElement>)=>void;
    //
}
export const CollapseForm = ({ ...props }: CollapseFormProps) => {
    return (
        <Box key={props.uid} className={clsN(styles.collapse)}>
            <CollapseTitle
                uid={props.uid}
                title={props.title}
                uploader={props.uploader}
                uploadDate={props.uploadDate}
                fixedDate={props.fixedDate}
            />
            <Divider />
            <CollapseContext context={props.context} imgUrls={props.imgUrls} />
        </Box>
    );
};

CollapseForm.defaultProps = {
    fixedDate: undefined,
    imgUrls: undefined,
};
