import React from 'react';
import { Paper } from '@mui/material';
import { InquiryItem } from '@organisms/admin/page/dashboard/inquiryListView/inquiryItem/inquiryItem';
import { Heading } from '@molecules/admin/layout/heading/Heading';
import clsN from 'classnames';
import styles from './styles/inquiryListView.module.scss';

export const InquiryListView = () => {
    return(
        <Paper variant='outlined' className={clsN(styles.root)}>
            <Heading
                heading="문의 알림"
                headingClsN={clsN(styles.root__heading)}
                subtitle1="총 3건"
                subtitle1ClsN={clsN(styles.root__subtitle1)}
            />

            {/* 출력 테스트 */}
            <InquiryItem userName='User1' uploadDate='2024-01-01'/>
        </Paper>
    )
}