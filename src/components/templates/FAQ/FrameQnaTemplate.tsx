import React  from 'react';
import { Box, Table, TableBody } from '@mui/material';
import { useRecoilValue } from 'recoil';
import { Heading } from '../../molecules/FAQ_0_1/heading/Heading';
import { TableWrapper } from '../../organisms/qna/tableOrg/TableWrapper';
import { TableHdr } from '../../organisms/qna/tableOrg/tableHeader/TableHdr';
import { TableRowCmp } from '../../organisms/qna/tableOrg/tableBody/TableRowCmp';
import { myTableInterfaceProps } from '../../../pages/FAQ/PageQna';
import { faqTableState } from '../../../recoil/atoms/FaqItemList';


export const FrameQnaTemplate = ({ ...props }: myTableInterfaceProps) => {
    const { thContext } = props;
    const readAtom = useRecoilValue(faqTableState);

    // primary tr을 클릭 시 secondary tr [on/off] 토글상태
    // const [rqState, SetRQState] = useState<boolean>(false);

    return (
        <Box
            component='div'
            className='qna-wrapper'
        >
            <Box
                component='div'
            >
                <Heading text='Q&A' type='h1' className='qna-heading' />
                <Heading
                    text='궁금하신 점이 있으신가요?'
                    type='subtitle1'
                    className='faq-g-heading'
                />
            </Box>
            <TableWrapper>
                <Table>
                    <TableHdr th={thContext} />
                    <TableBody>
                        {readAtom.map((item) => {
                            const {
                                qna_done,
                                qna_title,
                                qna_context,
                                qna_rq_context,
                                qna_date,
                                qna_done_date,
                                user_id,
                            } = item;
                            const tempPrim = [qna_done, qna_title, user_id, qna_date];

                            return (
                                <TableRowCmp
                                    tableRowPrimary={tempPrim}
                                    context={qna_context}
                                    rq_context={qna_rq_context}
                                    qna_done_date={qna_done_date}
                                />
                            );
                        })
                        }
                    </TableBody>
                </Table>
            </TableWrapper>

        </Box>
    );
};