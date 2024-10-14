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
    onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
export const CollapseForm = ({ ...props }: CollapseFormProps) => {
    /*
     * React.useState 의 경우 컴포넌트가 많을시 성능이 하향되지만 한번 테스트해봄
     * */
    // 상태
    const [popState, setPopState] = React.useState<boolean>(false);

    const handleSetClose = () => {
        setPopState(false);
    };

    return (
        <Box key={props.uid} className={clsN(styles.collapse)}>
            <CollapseTitle
                popoverProps={{ popstate: popState, onClose: handleSetClose }}
                uid={props.uid}
                onClick={props.onClick}
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
