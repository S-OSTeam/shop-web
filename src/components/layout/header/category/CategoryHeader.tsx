/* eslint-disable */
import React from 'react';
import styles from '@components/layout/header/category/styles/CategoryHeader.module.scss';
import clsN from 'classnames';
import {
    ClickAwayListener,
    Collapse,
    List,
    ListItem as MuiListItem,
    ListItemButton,
    ListItemText,
} from '@mui/material';
import ListItem from '@components/layout/header/category/listItem/ListItem';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { ItemCategoryTreeResponse } from '@interface/category/Category';

interface CategoryHeaderProps {
    onClick: (publicId: string) => void;
    categories: ItemCategoryTreeResponse[];
}

const CategoryHeader = ({ onClick, categories }: CategoryHeaderProps) => {
    // Menu Bar 마다 불리언 상태로 관리
    const [toggleState, setToggleState] = React.useState<boolean[]>([]);
    // 토글 이벤트 param(idx: 클릭한 인덱스)
    const handleClick = (idx: number) => {
        // 선택한 엘리먼트 인덱스가 같을경우에만 true 반환
        setToggleState((prev) => prev.map((stateItem, stateIdx) => stateIdx === idx));
    };

    // 리스트 컴포넌트 랜더
    const renderListItems = categories.map((item, idx) => {
        // collapse 변수들 boolean 으로 관리하기
        const currentState = toggleState[idx];
        // 토글 체크
        const handleMouseOver = (e: React.MouseEvent<HTMLDivElement>) => {
            // 카테고리.map 의 idx 를 활용하여 선택된 인덱스의 파라미터 전달하고 동작
            handleClick(idx);
            // 토글 이벤트시 하위 요소 전파 방지
            e.stopPropagation();
            e.preventDefault();
        };
        // MouseClick 모바일버전은 Drawer를 사용하지만 혹시모르니 고려해보기
        const onTouch = (e: React.TouchEvent<HTMLDivElement>) => {
            // 카테고리.map 의 idx 를 활용하여 선택된 인덱스의 파라미터 전달하고 동작
            handleClick(idx);
            // 토글 이벤트시 하위 요소 전파 방지
            e.stopPropagation();
            e.preventDefault();
        };
        // MouseOff 이벤트
        const handleMouseOff = () => {
            // 모든 아이템 자신포함해서 끄기
            setToggleState((prevState) => prevState.map((_) => false));
        };
        // mouseHover Check
        const handleClickAway = () => {
            const newTemp = [...toggleState];
            // 마우스 in true 아닐시 false
            newTemp[idx] = false;
            setToggleState(newTemp);
        };

        return (
            <ClickAwayListener onClickAway={handleClickAway} key={item.publicId}>
                <MuiListItem
                    key={item.publicId}
                    className={clsN(`${styles['list-wrapper__parent-category']}`)}
                    onKeyDown={undefined}
                >
                    <ListItemButton
                        className={styles['list-wrapper__parent-category__btn']}
                        onMouseOver={handleMouseOver}
                        onMouseOut={handleMouseOff}
                        onTouchStart={onTouch}
                        onClick={() => onClick(item.publicId)}
                    >
                        <ListItemText
                            primary={item.title}
                            className={styles['list-wrapper__parent-category__btn__title']}
                        />
                        {currentState ? (
                            <ExpandLess className={styles['list-wrapper__parent-category__btn__icon']} />
                        ) : (
                            <ExpandMore className={styles['list-wrapper__parent-category__btn__icon']} />
                        )}
                        <Collapse
                            in={currentState}
                            timeout="auto"
                            unmountOnExit
                            className={styles['list-wrapper__parent-category__btn__collapse']}
                        >
                            <List disablePadding>
                                <ListItem
                                    className={`${styles['list-items-wrapper']}`}
                                    items={item.children}
                                    onClick={(publicId, e) => {
                                        onClick(publicId);
                                        e.stopPropagation(); // 부모 이벤트 전파 방지
                                    }}
                                />
                            </List>
                        </Collapse>
                    </ListItemButton>
                </MuiListItem>
            </ClickAwayListener>
        );
    });
    return <List className={clsN(`${styles['list-wrapper']}`)}>{renderListItems}</List>;
};

export default CategoryHeader;
