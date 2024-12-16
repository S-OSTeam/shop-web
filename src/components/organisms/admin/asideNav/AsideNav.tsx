import React from 'react';
import { Box, Drawer, List } from '@mui/material';
import { useRecoilState } from 'recoil';
import { drawerAdminNavAtom } from '@recoil/atoms/admin/drawer/drawerAdminNavAtom';
import clsN from 'classnames';
import styles from './styles/AsideNav.module.scss';

/**
 * 제너릭으로 받아 처리하기
 * 서브네비의 헤더는 각각 가지고 있는 정보가 다르므로 라우트 될때 서브헤더의 형제요소인 main 내부 헤더의 내용이 바뀜
 */
interface AsideNavProps<T> {
    // asideNav 클래스명
    className?: string;
    // ul 클래스명
    listWrapperClsN?: string;
    // 라우트 컨텐츠
    items: T[];
    // 랜더하는 과정
    itemFactor: (item: T, index: number) => React.ReactNode;
    // 호버 애니메이션 클래스명
    hoverClsN?: string;
}

export const AsideNav = <T,>({ className, listWrapperClsN, items, itemFactor, hoverClsN }: AsideNavProps<T>) => {
    /* TODO GQL 로 라우트할 아이템 받고 렌더하기 */

    const [drawState, setDrawState] = useRecoilState(drawerAdminNavAtom); // 메뉴 펼치기 상태

    // 상수 처리
    const ItemTemp = items.map((item: T, idx: number) => {
        // 제너릭 타입 받아서 처리
        return itemFactor(item, idx);
    });
    return (
        <Drawer open={drawState} onClose={() => setDrawState(false)}>
            <Box component="nav" className={clsN(className, styles.nav)}>
                <h1 className={clsN(styles.nav__logo)}>
                    <span>DeamHome</span>
                </h1>
                <List component="div" className={clsN(listWrapperClsN, styles.nav__ul)}>
                    {ItemTemp}
                    <div className={clsN(styles.hover, hoverClsN)} />
                </List>
            </Box>
        </Drawer>
    );
};
AsideNav.defaultProps = {
    className: styles.nav,
    listWrapperClsN: styles.nav__ul,
    hoverClsN: styles.hover,
};
