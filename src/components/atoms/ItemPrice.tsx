import React from 'react';
import '../../styles/ItemPrice.scss';

interface ItemPriceProps {
    price: string;
}

const ItemPrice = ({ price }: ItemPriceProps) => {
    return (
        <div className="ItemPriceWrapper">
            <p id="number">{price}</p>
            <p id="unit">원</p>
        </div>
    );
};
export default ItemPrice;
