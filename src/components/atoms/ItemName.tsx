import React from 'react';
import '../../styles/ItemName.scss';

interface ItemNameProps {
    name: string;
}

// 각각 아이템의 이름.
const ItemName = ({ name }: ItemNameProps) => {
    return <p>{name}</p>;
};
export default ItemName;
