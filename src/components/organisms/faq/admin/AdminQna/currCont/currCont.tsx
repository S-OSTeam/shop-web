/* eslint-disable */
import React from 'react';
import TextGroup from '../../../../../molecules/textGroup/TextGroup';
import { Box, Stack } from '@mui/material';
import Text from '../../../../../atoms/text/Text';
import Button from '../../../../../atoms/button/Button';
import IconBox from '../../../../../molecules/iconBox/IconBox';
import { Photo } from '@mui/icons-material';
import { QnaDataInterface } from '@src/util/Storage/QnaData';
import clsN from 'classnames';
import NanPagination from '../../../../../molecules/customPagiNation/NanPagination';
import styles from './styles/CurrCont.module.scss';
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
const CurrCont = ({ props }: { props: QnaDataInterface[] }) => {
    // 초기 페이지
    const [currPage, setCurrPage] = React.useState(1);
    // 페이지당 보여줄 리스트 갯수
    const itemPerPage = 1;

    // 페이지 인덱스 범위
    const idxLastLists = currPage * itemPerPage;
    const idxFirstLists = idxLastLists - itemPerPage;
    // 인덱스 구간만큼 데이터 로드
    const currItem = props.slice(idxFirstLists, idxLastLists);

    // 페이지네이션 클릭 이벤트
    const handlePageChange = (e: React.ChangeEvent<unknown>, value: number) => {
        // 활성화된 페이지 인덱스 업데이트
        setCurrPage(value);
    };
    const renderItem = currItem.map((item) => {
        const { userId, date, type, productId, productName, inquiryText, inquiryContents, image } = item;
        return (
            <Box component='div' className={clsN(`${styles.content}`)}>
                <TextGroup
                    wrapperClsN={clsN(`${styles.textGroup}`)}
                    textList={[
                        { text: userId, clsName: clsN(`${styles.userId}`, `${styles.textCont}`) },
                        { text: date, clsName: clsN(`${styles.date}`, `${styles.textCont}`) },
                    ]}
                />
                <TextGroup
                    wrapperClsN={clsN(`${styles.textGroup}`)}
                    textList={[
                        { text: type, clsName: clsN(`${styles.type}`, `${styles.textCont}`) },
                        { text: productId, clsName: clsN(`${styles.productId}`, `${styles.textCont}`) },
                        { text: productName, clsName: clsN(`${styles.productName}`, `${styles.textCont}`) },
                    ]}
                />
                <Text text={inquiryText} variant='subtitle1' className={clsN(`${styles.inquiryText}`)} />
                <Text text={inquiryContents} variant='body1' className={clsN(`${styles.inquiryContents}`)} />

                <Stack className={clsN(`${styles.clickWrapper}`)}>
                    <Button className={clsN(`${styles.btnImg}`)}>
                        <IconBox icon={<Photo />} />
                    </Button>
                    <Button className={clsN(`${styles.btnReply}`)}>답변</Button>
                </Stack>
            </Box>
        );
    });

    return (
        <Box component='article' className={clsN(`${styles.currOrg}`, `${styles.currOrgModified}`)}>
            <Text text='최근 등록된 문의' variant='h1' className={clsN(`${styles.artHeading}`)} />
            {renderItem}
            <NanPagination
                count={Math.ceil(props.length)}
                onChange={handlePageChange}
                navClsN={clsN(`${styles.pageNav}`)}
            />
        </Box>
    );
};
export default CurrCont;
