import React from 'react';
import '../../styles/ItemPrice.scss';
import classNames from 'classnames';
import TextCustom from '../atoms/text/TextCustom';

interface ItemPriceProps {
    price: string;
    size?: string;
    unit?: string; // 화폐단위
}

const ItemPrice = ({ price, size, unit = '원' }: ItemPriceProps) => {
    return (
        <div className={classNames('ItemPriceWrapper', size)}>
            <TextCustom content={price} className="number" />
            <TextCustom content={unit} className="unit" />
        </div>
    );
};
ItemPrice.defaultProps = {
    size: undefined,
    unit: '원',
};
export default ItemPrice;
