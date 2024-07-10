import React from 'react';
import { ListItem as MuiListItem, ListItemButton, ListItemText } from '@mui/material';
import clsN from 'classnames';
import styles from '@components/layout/header/category/listItem/styles/ListItem.module.scss';
import PropTypes from 'prop-types';
import { ItemCategoryTreeResponse } from '@interface/category/Category';

interface ListItemProps {
    // 카테고리 아이템 <li> 클래스명
    className?: string;
    // 리스트 아이템의 인터페이스 []
    items: ItemCategoryTreeResponse[];
    // onClick?: (title: string) => void;
    onClick?: (publicId: string, e: React.MouseEvent<HTMLDivElement>) => void;
}

const ListItem = ({ className, items, onClick }: ListItemProps) => {
    return (
        <div>
            {items &&
                items.map((item) => (
                    <MuiListItem key={item.publicId} disablePadding className={clsN(styles['list-item'], className)}>
                        <ListItemButton
                            className={clsN(styles['list-item__btn'])}
                            onClick={(e) => onClick && onClick(item.publicId, e)}
                        >
                            <ListItemText
                                primary={item.title}
                                className={clsN(styles['list-item__btn__primary-context'])}
                            />
                        </ListItemButton>
                    </MuiListItem>
                ))}
        </div>
    );
};

ListItem.propsType = {
    className: PropTypes.string,
};

ListItem.defaultProps = {
    className: undefined,
    onClick: undefined,
};

export default ListItem;
