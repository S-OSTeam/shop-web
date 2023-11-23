import React from 'react';
import TextGroup from '../../../../../molecules/textGroup/TextGroup';
import { Box } from '@mui/material';
import Text from '../../../../../atoms/text/Text';
import Button from '../../../../../atoms/button/Button';
import IconBox from '../../../../../molecules/iconBox/IconBox';
import { Photo } from '@mui/icons-material';
import { QnaDataInterface } from '../../../../../../util/Storage/QnaData';
import clsN from 'classnames';
import PaginationCustom from '../../../../../atoms/pagination/PaginationCustom';

/*
* 제목
* 아이콘
* 유저명
* 날짜
* 문의유형
* 상품번호
* 상품명
* 제목
* 내용
* 이미지버튼(추가로 이미지 목록도)
* 활성화버튼
* 페이지네이션
* */
const CurrCont = (QnaDataInterface[]) => {
    // 초기 페이지
    const [currPage, setCurrPage] = React.useState(1);
    // 페이지당 보여줄 리스트 갯수
    const itemPerPage = 1;

    // 페이지 인덱스 범위
    const idxLastLists = (currPage * itemPerPage);
    const idxFirstLists = (idxLastLists - itemPerPage);
    // 인덱스 구간만큼 데이터 로드
    const currItem = propsData.slice(idxFirstLists, idxLastLists);

    // 페이지네이션 클릭 이벤트
    const handlePageChange = (e: React.ChangeEvent<unknown>, value: number) => {
        // 활성화된 페이지 인덱스 업데이트
        setCurrPage(value);
    };
    const renderItem = currItem.map((item, idx) => {
        const { userId, date, type, productId, productName, inquiryText, inquiryContents, image } = item;

        return (
            <Box component='article'>
                <TextGroup textList={[
                    { text: userId, clsName: 'userId' },
                    { text: date, clsName: 'date'},
                ]} />
                <TextGroup textList={[
                    { text: type, clsName: 'type' },
                    { text: productId, clsName: 'productId'},
                    { text: productName, clsName: 'productName'},
                ]} />
                <Text text={inquiryText} variant='subtitle1' />
                <Text text={inquiryContents} variant='body1' />
                <Button className={clsN('btnImg')}>
                    <IconBox icon={Photo} />
                </Button>
                <Button className={clsN('btnReply')}>답변</Button>
            </Box>
        );
    });

    return (
        <Box component='section'>
            <Text text='최근 등록된 문의' variant='h1' />
            {
                renderItem
            }
            <PaginationCustom
                onChange={handlePageChange}
                page={currPage}
                count={Math.ceil(propsData.length)}
                showOpt={false}
            />
        </Box>
    );
};
export default CurrCont;