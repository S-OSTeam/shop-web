/* eslint-disable */
import React from 'react';
import { Box, Chip, Stack } from '@mui/material';
import IconButton from '@molecules/button/iconButton/IconButton';
import { MoreHoriz, MoreVert } from '@mui/icons-material';
import Text from '@atoms/text/Text';
import clsN from 'classnames';
import styles from './styles/DashboardItem.module.scss';

interface DashboardItemProps<T> {
    // root 클래스명
    className?: string;
    // 항목 이름
    itemName: string;
    // 항목 이름 클래스명
    itemNameClsN?: string;
    // 아이콘
    icon: React.ReactNode;
    // 아이콘 감싸는 클래스명
    iconClsN?: string;
    // 아이템 표시건 수
    count: number;
    // 아이템 표시 클래스명
    countClsN?: string;
    // 아이템 표시 색상 강조 클래스명
    countEffectClsN?: string;

    // T 제너릭을 통해 랜더할 컴포넌트 정하기
    // 받을 내용
    moreHorizItems: T[];
    // T 타입의 아이템과 인덱스를 받고 렌더
    renderItems: (item: T, index: number) => React.ReactNode;
}

const DashboardItem = <T, >(
    {
        className,
        itemName,
        icon,
        count,
        itemNameClsN,
        countClsN,
        countEffectClsN,
        iconClsN,
        moreHorizItems,
        renderItems,

    }: DashboardItemProps<T>,
) => {

    /* 상태 */

    /* JSX 컴포넌트 */


    // 항목 주제
    const titleName = (<Text text={itemName} className={clsN(itemNameClsN, styles['root__title'])} />);
    // 항목 건
    const countState = (
        <Box className={clsN(countClsN, styles['root__state'])}>
            <Text text={`${count}`} className={clsN(countEffectClsN, styles['root__state__text-effect'])} />
            <Text text='건' />
        </Box>
    );

    // 더보기 버튼
    const expandBtn = (
        <Chip label={<MoreHoriz />} size='small' className={clsN(styles['more-horiz'])} />
    );

    // 더보기 항목
    const expandInfo = (
        <Stack className={clsN(styles['more-info'])} gap={0.4}>
            {moreHorizItems.map((item, idx) => {
                return (renderItems(item, idx));
            })}
        </Stack>
    );


    /* 렌더 */
    return (
        <Stack className={clsN(className, styles.root)} direction='row' boxShadow={1} flexGrow={1} gap={2} borderRadius={1} >
            <Stack className={clsN(iconClsN, styles['root__icon-place'])}>
                {icon}
            </Stack>
            <Stack flexDirection='column' gap={0.5}>
                {titleName}
                {countState}
            </Stack>
            {expandBtn}
            {expandInfo}
        </Stack>
    );
};
export default DashboardItem;