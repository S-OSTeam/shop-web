import React from 'react';
import { Box, Table, TableBody } from '@mui/material';
import { useRecoilValue } from 'recoil';
import { Heading } from '../../molecules/FAQ_0_1/heading/Heading';
import { TableWrapper } from '../../organisms/qna/tableOrg/TableWrapper';
import { TableHdr } from '../../organisms/qna/tableOrg/tableHeader/TableHdr';
import { TableRowCmp } from '../../organisms/qna/tableOrg/tableBody/TableRowCmp';
import { myTableInterfaceProps } from '../../../pages/FAQ/PageQna';
import { faqTableState } from '../../../recoil/atoms/FaqItemList';
import PaginationCustom from '../../atoms/pagination/PaginationCustom';
import { TableRemote } from '../../organisms/qna/tableRemote/TableRemote';

export const QnaListTemplate = ({ ...props }: myTableInterfaceProps) => {
    const { thContext, showOpt, menuItems } = props;
    // 페이지네이션 관련

    // 리코일 faq 테이블 데이터 사용
    const readAtom = useRecoilValue(faqTableState);
    // 현재 활성화된 페이지
    const [currentPage, setCurrentPage] = React.useState(1);
    // Qna 콘텐츠 클릭 토글 이벤트
    const [tRowState, setTRowState] = React.useState<boolean[]>([]);
    // 페이지당 보여줄 리스트 갯수
    const itemPerPage = 10;

    // 페이지 인덱스 범위들
    const idxLastLists = (currentPage * itemPerPage);
    const idxFirstLists = (idxLastLists - itemPerPage);
    // 인덱스 구간만큼 데이터를 가져옴
    const CurrentItems = readAtom.slice(idxFirstLists, idxLastLists);

    // 페이지네이션 클릭 이벤트
    const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
        // 활성화된 페이지 인덱스 업데이트
        setCurrentPage(value);
        // 페이지네이션 활성화시 모두 초기화
        const tempState = tRowState.map(() => false);
        setTRowState(tempState);
    };

    // 클릭이벤트 : 누른 인덱스로 콜랩스 토글을 설정
    const handleClick = (index: number) => {
        const newState = [...tRowState];
        newState[index] = !newState[index];
        setTRowState(newState);
    };

    const renderContents = CurrentItems.map((item, idx) => {
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
        const currentOpen = tRowState[idx];
        const onClick = () => {
            handleClick(idx);
        };

        return (
            <TableRowCmp
                tableRowPrimary={tempPrim}
                context={qna_context}
                rq_context={qna_rq_context}
                qna_done_date={qna_done_date}
                currentInState={currentOpen}
                onClick={onClick}
            />);
    });
    return (

            <Box
                component='div'
                className='qna-wrapper'
            >
                <Box
                    component='div'
                    className='heading-wrapper'
                >
                    <Heading text='상품문의' type='h1' className='qna-heading' />
                    <Heading
                        text='궁금하신 점이 있으신가요?'
                        type='subtitle1'
                        className='faq-g-heading'
                    />
                </Box>
                <TableRemote
                    options={menuItems}
                />
                <TableWrapper>
                    <Table className='qna-table'>
                        <TableHdr th={thContext} />
                        <TableBody>
                            {renderContents}
                        </TableBody>
                    </Table>
                </TableWrapper>
                <PaginationCustom
                    onChange={handlePageChange}
                    page={currentPage}
                    count={Math.ceil(readAtom.length / itemPerPage)}
                    showOpt={showOpt}
                />
            </Box>

    );
};