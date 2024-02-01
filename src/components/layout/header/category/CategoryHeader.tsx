/* eslint-disable */
import React from 'react';
import styles from '@components/layout/header/category/styles/CategoryHeader.module.scss';
import clsN from 'classnames';
import { category } from '@util/test/data/CategoryResponse';
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

const CategoryHeader = () => {
    // Menu Bar 마다 불리언 상태로 관리
    const [tglState, setTglState] = React.useState<boolean[]>([]);
    // 토글 이벤트 param(idx: 클릭한 인덱스)
    const handleClick = (idx: number) => {
        // 선택한 엘리먼트 인덱스가 같을경우에만 true 반환
        setTglState(prev => prev.map(
            (stateItem, stateIdx) => stateIdx === idx),
        );
    };
    // check title
    const onClickTitle = (title: string) => {
        console.log(title);
    };
    // 리스트 컴포넌트 랜더
    const renderListItems = category.map((item, idx) => {
        // collapse 변수들 boolean 으로 관리하기
        const currentState = tglState[idx];
        // 토글 체크
        const handleMouseOver = (e: React.MouseEvent<HTMLDivElement>) => {
            // 카테고리.map 의 idx 를 활용하여 선택된 인덱스의 파라미터 전달하고 동작
            handleClick(idx);
            // 토글 이벤트시 하위 요소 전파 방지
            e.stopPropagation();
            e.preventDefault();
        };
        // MouseClick 모바일버전은 Drawer를 사용하지만 혹시모르니 고려해보기
        const onTouch = (e:React.TouchEvent<HTMLDivElement>)=>{
            // 카테고리.map 의 idx 를 활용하여 선택된 인덱스의 파라미터 전달하고 동작
            handleClick(idx);
            // 토글 이벤트시 하위 요소 전파 방지
            e.stopPropagation();
            e.preventDefault();
        }
        // MouseOff 이벤트
        const handleMouseOff = () => {
            // 모든 아이템 자신포함해서 끄기
            setTglState(prevState => prevState.map(_ => false));
        };
        // mouseHover Check
        const handleClickAway = () => {
            const newTemp = [...tglState];
            // 마우스 in true 아닐시 false
            newTemp[idx] = false;
            setTglState(newTemp);
        };


        return (
            <ClickAwayListener onClickAway={handleClickAway} key={item.publicId}>
                <MuiListItem key={item.publicId} className={clsN(`${styles.parentCategory}`)} onKeyDown={undefined}>
                    <ListItemButton className={styles.list_item_btn} onMouseOver={handleMouseOver}
                                    onMouseOut={handleMouseOff} onTouchStart={onTouch}>
                        <ListItemText primary={item.title} className={styles.list_item_title} />
                        {currentState ? <ExpandLess className={styles.list_item_icon} /> :
                            <ExpandMore className={styles.list_item_icon} />}
                        <Collapse in={currentState} timeout='auto' unmountOnExit className={styles.collapse}>
                            <List disablePadding>
                                <ListItem
                                    className={`${styles.modalItem} ${styles.list_items_wrapper}`}
                                    items={item.children}
                                    onClick={(e) => {
                                        /* 부모인 ListItemButton 이벤트가 자식에게도 적용되는걸 방지 */
                                        e.stopPropagation();
                                    }}
                                />
                            </List>
                        </Collapse>
                    </ListItemButton>
                </MuiListItem>
            </ClickAwayListener>
        );
    });
    return (
        <List className={clsN(`${styles.list_wrapper}`)}>
            {renderListItems}
        </List>
    );
};

export default CategoryHeader;
