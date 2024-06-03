import React from 'react';
import { Paper, Stack } from '@mui/material';
import Text from '@atoms/text/Text';
import Avatar from '@atoms/avatar/Avatar';
import { AccountCircle } from '@mui/icons-material';
import clsN from 'classnames';
import styles from './styles/inquiryItem.module.scss';

interface InquiryItemProps {
    // 클래스명
    className?: string;
    // 아바타
    // 유저명
    userName: string;
    // 업로드일
    uploadDate: string;
}
export const InquiryItem = (
    {
        className,
        userName,
        uploadDate
    }:InquiryItemProps
) => {

    /* JSX 요소 */


    // 프로필 아바타
    const ProfileAvatar= <Avatar alt="gi"><AccountCircle/></Avatar>;
    // 헤드라인 1
    const Headline = <Text text={userName} className={clsN(styles['user-name'])}/>;
    // 서브타이틀1
    const UploadDate = <Text text={uploadDate} className={clsN(styles['upload-date'])}/>;
    // 유저명 + 서브타이틀 영역
    const UserInfoBlock = <Stack className={clsN(styles['inquiry__heading__user-info'])}>
        {Headline}
        {UploadDate}
    </Stack>


    // 칩 영역
    // 내용


    return(
        <Paper className={clsN(className, styles.inquiry)}>
            <Stack className={clsN(styles.inquiry__heading)} direction='row'>
                {ProfileAvatar}
                {UserInfoBlock}
            </Stack>
        </Paper>
    )
}
InquiryItem.defaultProps = {
    className: styles.inquiry
}