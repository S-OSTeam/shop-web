import React from 'react';
import { Box, Stack } from '@mui/material';
import Text from '@atoms/text/Text';
import clsN from 'classnames';
import styles from './styles/DashboardItem.module.scss';

interface DashboardItemProps {
    // root 클래스 명
    className?: string;
    // 모듈(제목) 명
    moduleLabel: string;
    // 아이콘
    iconPlace: React.ReactNode;
    // 아이콘 부모 클래스명
    iconPlaceClsN?: string;
    // 데이터
    data: Array<{ title: string, amount: number }>;
    // 현황 리스트 블록 클래스명
    stateListClsN?: string;
    // 현황 리스트 내부 아이템 클래스명
    stateItemClsN?: string;
    // 아이템의 텍스트 클래스명
    itemTextClsN?: string;
    // 아이템 텍스트 감싸는 클래스명
    itemContextClsN?: string;
    // 아이템 제목 영역
    itemTitleClsN?: string;
}

const DashboardItem = (
    {
        className,
        moduleLabel,
        iconPlace,
        iconPlaceClsN,
        data,
        stateListClsN,
        stateItemClsN,
        itemTextClsN,
        itemContextClsN,
        itemTitleClsN
    }: DashboardItemProps,
) => {

    /* 상태 */

    /* 함수 */
    /* 데이터를 받고 해당 데이터 순서대로 출력 */
    const dataRender = data.map((item) => {
        // 속성 조회
        const { title, amount } = item;
        const subTitleComponent = <Text variant='subtitle2' className={clsN(itemTextClsN, styles['subtitle-list__block__subtitle'])} text={title} />;
        const amountText = <Text variant='subtitle2' className={clsN(itemTextClsN, styles['subtitle-list__block__subtitle'])} text={`${amount.toString()}건`} />;
        return (
            <Stack className={clsN(stateItemClsN, styles['subtitle-list__block'])} direction='row'>
                {subTitleComponent}
                {amountText}
            </Stack>
        )
    });

    /* 렌더 */
    return (
        <Stack className={clsN(className, styles.wrapper)} direction='row' boxShadow={2}>
            <Box className={clsN(iconPlaceClsN, styles['icon-place'])} component='div'>
                {iconPlace}
            </Box>
            <Box component='div' className={clsN(itemContextClsN, styles['item-context'])}>
                <Text text={moduleLabel} className={clsN(itemTitleClsN, styles['item-context__title'])}/>
                <Stack className={clsN(stateListClsN, styles['subtitle-list'])}>
                    {dataRender}
                </Stack>
            </Box>
        </Stack>
    );
};
export default DashboardItem;