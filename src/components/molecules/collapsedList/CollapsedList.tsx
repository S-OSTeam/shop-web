import React from 'react';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { CollapseProps, Stack } from '@mui/material';
import { Collapse } from '@atoms/collapse/Collapse';
import ListItemButton from '@atoms/listItemButton/ListItemButton';
import clsN from 'classnames';
import styles from './styles/CollapsedList.module.scss';

export interface CollapsedClassesProps {
    wrapper?: string;
    listItem?: string;
    collapsed?: string;
}

// 제너릭 T 고민해보기
interface CollapsedListProps extends CollapseProps {
    // className 모음
    classes?: CollapsedClassesProps;
    // 열람 여부
    in?: boolean;
    // Expand 아이콘 위치
    expandPos?: 'start' | 'end';
    // string[] 로 제목들 받아서 맵핑 처리하기
    primaryCont: React.ReactNode;
    // primaryItem: T[];
    // primary 랜더
    // renderPrimary: (item: T) => React.ReactNode;
    // secondary 컨텐츠
    secondaryCont: React.ReactNode;
    // collapsed onClick 클릭 이벤트
    onCollapse?: (e: React.MouseEvent<HTMLElement>) => void;
}

export const CollapsedList = ({ ...props }: CollapsedListProps) => {
    const { classes } = props;
    /* 함수 */

    /* JSX */
    // 리스트 아이템 버튼
    const ListItemBtn = (
        <ListItemButton className={clsN(styles['collapsed-wrapper__list-item'], classes?.wrapper)}>
            {props.primaryCont}
            {props.in ? (
                <ExpandLess
                    className={clsN(props.expandPos ? styles['expand__less--start'] : styles['expand__less--end'])}
                />
            ) : (
                <ExpandMore
                    className={clsN(props.expandPos ? styles['expand__more--start'] : styles['expand__more--end'])}
                />
            )}
        </ListItemButton>
    );
    // 콜랩스 컴포넌트
    const CollapsedElement = (
        <Collapse
            onClick={props.onCollapse}
            className={clsN(styles['collapsed-wrapper__collapsed'], classes?.collapsed)}
            in={props.in}
            unmountOnExit
        >
            {props.secondaryCont}
        </Collapse>
    );
    /* 렌더 */
    return (
        <Stack component="div" className={clsN(classes?.wrapper, styles['collapsed-wrapper'])} direction="column">
            {ListItemBtn}
            {CollapsedElement}
        </Stack>
    );
};
CollapsedList.defaultProps = {
    // 클래스 모음
    classes: {
        wrapper: styles['collapsed-wrapper'],
        listItem: styles['collapsed-wrapper__listItem'],
        collapsed: styles['collapsed-wrapper__collapsed'],
    },
    // 열림 체크 여부
    in: false,
    // Expand 아이콘 위치
    expandPos: 'start',
    onCollapse: undefined,
};
