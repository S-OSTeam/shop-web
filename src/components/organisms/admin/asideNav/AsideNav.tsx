/* eslint-disable */
import React from 'react';
import { Box } from '@mui/material';

/**
 * 제너릭으로 받아 처리하기
 * 서브네비의 헤더는 각각 가지고 있는 정보가 다르므로 라우트 될때 서브헤더의 형제요소인 main 내부 헤더의 내용이 바뀜
 */
interface AsideNavProps<T> {
    // asideNav 클래스명
    className?: string;
    // ul 클래스명
    listClsN?: string;
    // 라우트 컨텐츠
    items: T[];
    // 랜더하는 과정
    itemFactor: (item: T, index: number) => React.ReactNode;
}

const AsideNav = <T,>({ className, listClsN, items, itemFactor }: AsideNavProps<T>) => {
    // 상수 처리
    const ItemTemp = items.map((item: T, idx: number) => {
        // 제너릭 타입 받아서 처리
        return itemFactor(item, idx);
    });
    return <Box component="nav">{ItemTemp}</Box>;
};
export default AsideNav;
