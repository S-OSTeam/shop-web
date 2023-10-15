import React from 'react';
import '../../styles/ItemName.scss';
import classNames from 'classnames';

interface ItemNameProps {
    name: string;
    href: string;
    size?: string;
}

// 각각 아이템의 이름.
const ItemName = ({ name, href, size }: ItemNameProps) => {
    return (
        <a className={classNames(size)} href={href}>
            {name}
        </a>
    );
};
ItemName.defaultProps = {
    size: undefined,
};
export default ItemName;
