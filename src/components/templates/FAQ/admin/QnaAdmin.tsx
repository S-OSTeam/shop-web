/* eslint-disable */
import React from 'react';
import { Box } from '@mui/material';
import clsN from 'classnames';
import styles from './styles/QnaAdmin.module.scss';
import QnaData, { QnaReplyData } from '#util/Storage/QnaData';
import CurrCont from '#organisms/faq/admin/AdminQna/currCont/CurrCont';
import { FeaturesCont } from '#organisms/faq/admin/AdminQna/featuresCont/FeaturesCont';
import { DataGridGen } from '#organisms/dataGrid/DataGridGen';
import { DataGridCol } from '#util/Functions/DataGrideRemote';
import { useRecoilValue } from 'recoil';
import { QnaItemsState } from '#recoil/atoms/QnaItemList';
import { ClickEventBtn } from '#molecules/button/ClickEvtBtn';

interface GridRowData {
    id: number;
    cit_id: number;
    cqa_type: string;
    cqa_title: string;
    mem_id: number;
    cqa_datetime: string;
    cqa_reply_datetime: string;
    cqa_is_replied: boolean;
    do_reply?: React.ReactNode; // 시험용
}

export const QnaAdminTemplate = () => {

    // 제너릭 활용해보기
    // 그리드 열
    // json 파일을 읽어들여 콘솔로 확인해보기
    // const tempGridCol = QnaReplyData;
    const tempGridCol = DataGridCol(QnaReplyData);

    const tempQna = useRecoilValue(QnaItemsState);
    const rawRender: GridRowData[] = tempQna.map((item,idx)=>{
            let tempObj: GridRowData;
            tempObj = {
                id: item.cqa_id,
                cit_id: item.cit_id,
                cqa_type: item.cqa_type,
                cqa_title: item.cqa_title,
                mem_id: item.mem_id,
                cqa_datetime: item.cqa_datetime,
                cqa_reply_datetime: item.cqa_reply_datetime,
                cqa_is_replied: item.cqa_is_replied,
            }
            return tempObj;
        });


    return (
        <Box component='main' className={clsN(`${styles.main}`)}>
            <Box component='section' className={clsN(`${styles.sectionFirst}`)}>
                <CurrCont props={QnaData} />
                <FeaturesCont
                    newStatus='1'
                    overAllStatus='1'
                    anonStatus='1'
                    pendingStatus='1'
                    featOrgModified={`${styles.featModified}`}
                />
            </Box>
            <Box component='section' className={clsN(`${styles.sectionTable}`)}>
                <DataGridGen DefProps={tempGridCol} ColData={rawRender} />
            </Box>
            <Box component='section' className={clsN(``)}>
                empty
            </Box>
        </Box>
    );
};