/* eslint-disable */
import React from 'react';
import { Box, Stack, useMediaQuery } from '@mui/material';
import Text from '@atoms/text/Text';
import { useRecoilValue } from 'recoil';
import { UserInquiryState } from '@recoil/atoms/inquiry/user/userInquiry/UserInquiryState';
import PropTypes from 'prop-types';
import clsN from 'classnames';
import style from './style/RecentCqa.module.scss';
import Chip from '@atoms/chip/Chip';
import Pagination from '@molecules/pagination/paginationCustom/Pagination';
import Button from '@atoms/button/Button';
import ButtonlessPagination from '@molecules/pagination/buttonlessPagination/ButtonlessPagination';

// 리코일을 통해 불러오기

// 인터페이스는 필요없을듯
interface RecentCqaProps {
    className?: string;
}

/*
* user, date,
* type, itemCode, itemName,
* title
* context
* img, reply
* */
const RecentCqa = (
    {
        className
    }: RecentCqaProps) => {
    // 아톰을 통해 문의내역 불러오기
    const cqaData = useRecoilValue(UserInquiryState);

    // paginationIdx
    const [cqaIdx, setCqaIdx] = React.useState<number>(1);
    // 아이템당 보여줄 개수
    const itemPerPage = 1;
    // 페이지 인덱스 범위: 마지막 인덱스 -> 현재페이지 * 보여줄아이템, 시작 인덱스 -> 마지막 인덱스 - 페이지장 보여줄아이템
    const idxLastLists = cqaIdx * itemPerPage;
    const idxFirstLists = idxLastLists - itemPerPage;
    // 인덱스 구간만큼 데이터 로드
    const currentContent = cqaData.slice(idxFirstLists, idxLastLists);

    // 페이지네이션에 쓰일 변수 페이지 크기
    const pageLength = Math.ceil(cqaData.length);

    // 미디어쿼리 변수
    const spacingSet = useMediaQuery(`()`)

    // 페이지네이션 클릭 이벤트
    const handlePageChange = (e: React.ChangeEvent<unknown>, value: number) => {
        setCqaIdx(value);
    };
    // 렌더
    const renderItem = currentContent.map((item) => {
        const {
            cqa_user,
            cqa_datetime,
            cqa_reply_type,
            cqa_item,
            cqa_item_full_name,
            cqa_title,
            cqa_content,
        } = item;
        return (
            <Stack component='article' className={clsN(`${style.articleWrapper}`)} spacing={1}>
                <Stack className={clsN(`${style.stack}`)} direction='row' spacing={1}>
                    <Chip label={cqa_user} className={clsN(`${style.context}`, `${style.user_Id}`)} />
                    <Chip label={cqa_datetime} className={clsN(style.context)} />
                </Stack>
                <Stack className={clsN(`${style.stack}`)} direction='row' spacing={1}>
                    <Chip label={cqa_reply_type} className={clsN(`${style.context}`)} />
                    <Chip label={(cqa_item).toString()} className={clsN(`${style.context}`)} />
                    <Chip label={cqa_item_full_name} className={clsN(`${style.context}`)} />
                </Stack>
                <Stack className={clsN(`${style.stack} ${style.stack_last}`)} spacing={1}>
                    <Text text={cqa_title} className={clsN(`${style.content_Title}`)} />
                    <Text text={cqa_content} className={clsN(`${style.content_Context}`)} />
                </Stack>
            </Stack>


        );
    });


    return (
        <Stack
            component='section'
            className={clsN(className, `${style.recentCqa}`)}
        >
            <Text
                text='최근 문의 목록'
                variant='h1'
                className={clsN(`${style.heading}`)}
            />
            {renderItem}
            <ButtonlessPagination
                onChange={handlePageChange}
                count={pageLength}
                navClsN={clsN(`${style.nav}`)}
                contextClsN={clsN(`${style.nav_value}`)}
                currPageClsN={clsN(`${style.current_cont}`)}
                btnCls={clsN(`${style.btn_cls}`)}
            />
        </Stack>
    );
};
export default RecentCqa;