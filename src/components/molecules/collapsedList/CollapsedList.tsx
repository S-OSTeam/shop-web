/* eslint-disable */
import React from 'react';
import { Box } from '@mui/material';
import ListItemButton from '@atoms/listItemButton/ListItemButton';
import Collapse from '@atoms/collapse/Collapse';
import ListItemIcon from '@atoms/listItemIcon/ListItemIcon';
import ListItemText from '@atoms/listItemText/ListItemText';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import List from '@components/layout/list/List';
import PropTypes from 'prop-types';
import clsN from 'classnames';
import styles from './styles/CollapsedList.module.scss';

interface CollapsedListProps {
    // 컴포넌트 클래스명
    className?: string;
    // 첫번째리스트 버튼 클래스명
    listBtnClsN?: string;
    // 아이콘 클래스명
    listIconClsN?: string;
    // 콜랩스 클래스명
    collClsN?: string;
    // 버튼 레이블 (내용)
    primary: React.ReactNode
    // 첫번째 리스트 아이콘
    listIcon?: React.ReactNode;
    // 체크 속성
    isOpen?: boolean;
    // 클릭 이벤트
    onClick?: React.MouseEventHandler<HTMLDivElement>;
    // 리스트 primary 텍스트 클릭 이벤트
    onPrimaryClick?: ()=> void;
    // 콜랩스 내부 컨텐츠
    innerChildren: React.ReactNode;
    // 콜랩스 내부 리스트 클래스 명
    collListClsN?: string;
    // ListItemText 의 primary 타이포그래피 클래스명
    primaryClsN?: string;
    // ListItemText root 클래스명
    listItemRootClsN?: string;
}

const CollapsedList = (
    {
        className,
        isOpen,
        onClick,
        listBtnClsN,
        listIcon,
        listIconClsN,
        primary,
        primaryClsN,
        innerChildren,
        collClsN,
        collListClsN,
        listItemRootClsN,
        onPrimaryClick
    }:CollapsedListProps
) => {

    return(
        <Box component='div' className={clsN(className, styles.wrapper)}>
            <ListItemButton className={clsN(listBtnClsN, styles['list-btn'])} onClick={onClick}>
                <ListItemIcon className={clsN(listIconClsN, styles['list-btn__icon'])}>
                    {listIcon}
                </ListItemIcon>
                <ListItemText primary={primary} className={clsN(listItemRootClsN, styles['list-btn__root'])} primaryClsN={clsN(primaryClsN, styles['list-btn__root__primary'])}/>
                {isOpen ? <ExpandLess/> : <ExpandMore/>}
            </ListItemButton>
            <Collapse className={clsN(collClsN, styles.collapse)} isOpen={isOpen} unmountOnExit>
                <List component='div' className={clsN(collListClsN, styles.collapse__list)} disablePadding>
                    {innerChildren}
                </List>
            </Collapse>
        </Box>
    )
}
CollapsedList.propTypes= {
    // 컴포넌트 클래스명
    className: PropTypes.string,
    // 첫번째리스트 버튼 클래스명
    listBtnClsN: PropTypes.string,
    // 버튼 레이블 클래스명
    primaryClsN: PropTypes.string,
    // 아이콘 클래스명
    listIconClsN: PropTypes.string,
    // 콜랩스 클래스명
    collClsN: PropTypes.string,
    // 콜랩스 내부 리스트 클래스 명
    collListClsN: PropTypes.string,
    // 버튼 레이블 (내용)
    primary: PropTypes.node.isRequired,
    // 첫번째 리스트 아이콘
    listIcon: PropTypes.node,
    // 체크 속성
    isOpen: PropTypes.bool,
    // 클릭 이벤트
    onClick: PropTypes.func,
    // 콜랩스 내부 컨텐츠
    innerChildren: PropTypes.node.isRequired,
    listItemRootClsN: PropTypes.string,
}
CollapsedList.defaultProps = {
    className: styles.wrapper, 
    listBtnClsN: styles['list-btn'],
    primaryClsN: styles['list-btn__primary'],
    listIconClsN: styles['list-btn__icon'],
    collClsN: styles.collapse,
    collListClsN: ['collapse__list'],
    listIcon: undefined, 
    isOpen: undefined,
    onClick: undefined,
    listItemRootClsN: styles['']
}
export default CollapsedList;