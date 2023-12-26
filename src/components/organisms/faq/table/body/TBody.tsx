/* eslint-disable */
import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { TableBody, TableCell, TableRow } from '@mui/material';
import { faqTableState } from '../../../../../recoil/atoms/FaqItemList';
import { TCell } from '../cell/TCell';
import { BasicTCell } from '../../../../molecules/table/BasicTCell';

// 윗놈에게 전달받을 데이터 종류
// 리코일

export const TBody = () => {
    const qnaData = useRecoilValue(faqTableState);

    return (
        <TableBody>
            {qnaData.map((item) => {
                const {
                    qna_done,
                    qna_title,
                    user_id,
                    qna_date,
                    qna_done_date,
                    qna_rq_context,
                    qna_context,
                } = item;
                const [rqState, SetRQState] = useState<boolean>(false);
                const handleOnClick = () => {
                    // console.log(e);
                    // onClick?: React.MouseEventHandler<HTMLDivElement>
                    SetRQState((current) => (!current));
                };
                return (
                    <>
                        <TableRow
                            onClick={handleOnClick}
                            className=''
                        >
                            <BasicTCell text={qna_done} />
                            <BasicTCell text={qna_title} />
                            <BasicTCell text={user_id} />
                            <BasicTCell text={qna_date} />
                        </TableRow>
                        <TableRow >
                            {rqState &&
                            <TCell
                                qna_rq_context={qna_rq_context}
                                qna_context={qna_context}
                                qna_done_date={qna_done_date}
                                qna_done={qna_done} />}
                        </TableRow>


                    </>
                );
            })}
        </TableBody>
    );
};