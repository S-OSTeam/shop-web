import React from 'react';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { Box } from '@mui/material';
import Collapse from '@atoms/collapse/Collapse';
import ListItemButton from '@atoms/listItemButton/ListItemButton';
import clsN from 'classnames';
import styles from './styles/CllpsdList.module.scss';

// 제너릭 T 고민해보기
interface CllpsdListProps<T> {
    // 루트 클래스명
    rootClsN?: string;
    // 열림 체크 여부
    isOpen?: boolean;
    // Expand 아이콘 위치
    expandPos?: 'start' | 'end';
    // string[] 로 제목들 받아서 맵핑 처리하기
    primaryItem: T[];
    // primary 랜더
    renderPrimary: (item: T) => React.ReactNode;
    // secondary 컨텐츠
    secondaryCont: React.ReactNode;
}

const CllpsdList = <T,>({
    rootClsN,
    isOpen,
    expandPos,
    primaryItem,
    renderPrimary,
    secondaryCont,
}: CllpsdListProps<T>) => {
    /* 상태 */
    /* 함수 */
    // 제너릭 T 타입 에 따라 map 으로 신규 컴포넌트 생성
    const mappingPrimary = primaryItem.map((item: T) => {
        return renderPrimary(item);
    });
    /* JSX */
    // 리스트 아이템 버튼
    const ListItemBtn = (
        <ListItemButton className={clsN(styles['cllpsd-root__list-item'])}>
            {mappingPrimary}
            {isOpen ? (
                <ExpandLess className={clsN(expandPos ? styles['expand__less--start'] : styles['expand__less--end'])} />
            ) : (
                <ExpandMore className={clsN(expandPos ? styles['expand__more--start'] : styles['expand__more--end'])} />
            )}
        </ListItemButton>
    );
    // 콜랩스 컴포넌트
    const Cllpsd = (
        <Collapse className={clsN()} isOpen={isOpen} unmountOnExit>
            {secondaryCont}
        </Collapse>
    );
    /* 렌더 */
    return (
        <Box component="div" className={clsN(rootClsN, styles['cllpsd-root'])}>
            {ListItemBtn}
            {Cllpsd}
        </Box>
    );
};
CllpsdList.defaultProps = {
    // 루트 클래스명
    rootClsN: styles['cllpsd-root'],
    // 열림 체크 여부
    isOpen: false,
    // Expand 아이콘 위치
    expandPos: 'start',
};
