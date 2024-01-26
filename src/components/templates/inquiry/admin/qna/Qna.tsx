/* eslint-disable */
/* Template - Q&A Admin */
import React from 'react';
import inquiryJson from '@util/inquiry/Inquiry.json';
import { Box, Stack, useMediaQuery } from '@mui/material';
import RecentCqa from '@organisms/inquiry/article/recentCqa/RecentCqa';
import AlertBanner from '@organisms/inquiry/article/alertBanner/AlertBanner';
import TableCqa from '@organisms/inquiry/article/tableCqa/TableCqa';
import { GridColDef, GridRowsProp } from '@mui/x-data-grid';
import clsN from 'classnames';
import style from './style/Qna.module.scss';

/* interface - page 로 부터 데이터 받아오기 */

/*
* --
* - <헤더>
* - <올거니즘1>
* - <올거니즘2>
* - <푸터>
* */

const Qna = () => {
    const isMob = useMediaQuery('max-width: ');

    // type cqaTypes = '질문' | '배송'| '반품'| '취소'| '교환'| '기타';
    const ColGridDefSet: GridColDef[] = [
        { field: 'id', type: 'number', headerName: 'No', headerAlign: 'left', align: 'left', minWidth: 90, flex: 1 },
        {
            field: 'caq_item_code',
            type: 'number',
            headerName: '상품코드',
            headerAlign: 'left',
            align: 'left',
            minWidth: 140,
            flex: 1,
        },
        { field: 'caq_inquiry_type', type: 'string', headerName: '문의유형', align: 'left', minWidth: 140 },
        { field: 'caq_title', type: 'string', headerName: '문의제목', align: 'left', minWidth: 140 },
        { field: 'caq_user_name', type: 'string', headerName: '유저명', align: 'left', minWidth: 140 },
        { field: 'caq_datetime', type: 'string', headerName: '문의일자', align: 'left', minWidth: 140 },
        { field: 'caq_datetime_inquiry', type: 'string', headerName: '답변일자', align: 'left', minWidth: 140 },
        { field: 'caq_inquiry_state', type: 'boolean', headerName: '처리상태', align: 'right', minWidth: 130 },
    ];
    let RowProvider = inquiryJson.gridRow;

    return (
        <Box
            component='main'
            className={clsN(`${style.main_wrapper}`)}
        >
            <Stack className={style.dir_stack}>
                <RecentCqa />
                <AlertBanner
                    cqa_new={0}
                    cqa_all={0}
                    cqa_anon={0}
                    cqa_del={0}
                />
            </Stack>
            <TableCqa
                caq_data_Col={ColGridDefSet}
                caq_data_Row={RowProvider}
                headingClsN={clsN(`${style.table_section_heading}`)}
            />
        </Box>
    );
};

export default Qna;