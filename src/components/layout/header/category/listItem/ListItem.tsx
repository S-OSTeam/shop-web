import React from 'react';
import { ListItem as MuiListItem, ListItemButton, ListItemText } from '@mui/material';
import { ItemCategoryTreeResponse } from '@util/test/interface/Category';
import clsN from 'classnames';
import styles from '@components/layout/header/category/listItem/styles/ListItem.module.scss';
import PropTypes from 'prop-types';

interface ListItemProps {
    // 카테고리 아이템 <li> 클래스명
    className?: string;
    // 리스트 아이템의 인터페이스 []
    items: ItemCategoryTreeResponse[];
    // onClick?: (title: string) => void;
    onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
}

const ListItem = ({ className, items, onClick }: ListItemProps) => {
    // eslint-disable-next-line react/jsx-no-useless-fragment
    return (<>
        {items && items.map((item) => (
            <MuiListItem key={item.publicId} disablePadding className={clsN(styles.listItem, className)}>
                <ListItemButton className={styles.listItem_btn} onClick={/* onClick && onClick(item.title); */onClick}>
                    <ListItemText primary={item.title} className={styles.listItem_primary_context} />
                </ListItemButton>
            </MuiListItem>
        ))}
    </>);
};

ListItem.propsType = {
    className: PropTypes.string,
};

ListItem.defaultProps = {
    className: undefined,
    onClick: undefined,
};

export default ListItem;
