import React from 'react';
import { ItemCategoryTreeResponse } from '@util/test/interface/Category';
import clsN from 'classnames';
import styles from '@components/layout/header/category/listItem/styles/ListItem.module.scss';
import Text from '@atoms/text/Text';
import PropTypes from 'prop-types';

interface ListItemProps {
    className?: string;
    items: ItemCategoryTreeResponse[];
    onClick?: (title: string) => void;
}

const ListItem = ({ className, items, onClick }: ListItemProps) => {
    return (
        <ul className={clsN(className, `${styles.listItem}`)}>
            {items.map((item) => (
                <li
                    className={styles.subItem}
                    key={item.publicId}
                    onClick={() => onClick && onClick(item.title)}
                    onKeyDown={undefined}
                >
                    <Text text={item.title} />
                </li>
            ))}
        </ul>
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
