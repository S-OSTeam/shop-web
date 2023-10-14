import React from 'react';
import '../../styles/ItemName.scss';

interface ItemNameProps {
    name: string;
    href: string;
}

// 각각 아이템의 이름.
const ItemName = ({ name, href }: ItemNameProps) => {
    return <a href={href}>{name}</a>;
};
export default ItemName;
