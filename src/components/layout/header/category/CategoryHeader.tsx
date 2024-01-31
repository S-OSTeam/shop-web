/* eslint-disable */
import React from 'react';
import styles from '@components/layout/header/category/styles/CategoryHeader.module.scss';
import clsN from 'classnames';
import { category } from '@util/test/data/CategoryResponse';
import { Collapse, List, ListItem as MuiListItem, ListItemButton, ListItemText } from '@mui/material';
import ListItem from '@components/layout/header/category/listItem/ListItem';
import { ExpandLess, ExpandMore } from '@mui/icons-material';

const CategoryHeader = () => {
    // 토글 상태
    const [tglState, setTglState] = React.useState<boolean[]>([]);
    // 토글 이벤트
    const handleClick = (idx: number) => {
        // 모든 아이템 자신포함해서 끄기
        setTglState(prevState => prevState.map(_=>false));
        const newState = [...tglState];
        newState[idx] = !newState[idx];
        setTglState(newState);
    };


    const onClickTitle = (title: string) => {
        console.log(title);
    };
    const renderListItems = category.map((item, idx) => {

        // collapse 변수들 boolean 으로 관리하기
        const currentState = tglState[idx];
        // 토글 체크
        const onClick = (e: React.MouseEvent<HTMLDivElement>) => {
            // 토글 이벤트시 하위 요소 전파 방지
            handleClick(idx);
            e.stopPropagation();
            e.preventDefault();
        };
        // mouseHover Check
        /*
        * 마우스 in true 아닐시 false
        * */
        const handleHoverOn = (e: React.MouseEvent<HTMLDivElement>) =>  {
            setTglState(prevState => prevState.map(_=>false));
            // 코드 세그먼트
            const newState = [...tglState];
            newState[idx] = true;
            setTglState(newState);
            e.stopPropagation();
            e.preventDefault();
        }
        const handleHoverOff = (e: React.MouseEvent<HTMLDivElement>) =>  {
            const newState = [...tglState];
            newState[idx] = false;
            setTglState(newState);
            e.stopPropagation();
            e.preventDefault();
        }


        return (
            <MuiListItem key={item.publicId} className={clsN(`${styles.parentCategory}`)} onKeyDown={undefined}>
                <ListItemButton className={styles.list_item_btn} onClick={onClick} >
                    <ListItemText primary={item.title} className={styles.list_item_title} />
                    {currentState ? <ExpandLess className={styles.list_item_icon} /> : <ExpandMore className={styles.list_item_icon} />}
                    <Collapse in={currentState} timeout='auto' unmountOnExit className={styles.collapse}>
                        <List disablePadding>
                            <ListItem
                                className={`${styles.modalItem} ${styles.list_items_wrapper}`}
                                items={item.children}
                                onClick={(e) => {
                                    /* 부모인 ListItemButton 이벤트가 자식에게도 적용되는걸 방지 */
                                    e.stopPropagation();
                                }} />
                        </List>
                    </Collapse>
                </ListItemButton>
            </MuiListItem>);
    });
    return (
        <List className={clsN(`${styles.list_wrapper}`)}>
            {renderListItems}
        </List>
    );
};

export default CategoryHeader;
