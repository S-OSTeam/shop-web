import React from 'react';
import '../../styles/ItemPrice.scss';
import classNames from 'classnames';
import CustomText from '../atoms/text/CustomText';

interface ItemPriceProps {
    price: string;
    size?: string;
    unit?: string; // 화폐단위
}

const ItemPrice = ({ price, size, unit = '원' }: ItemPriceProps) => {
    return (
        <div className={classNames('ItemPriceWrapper', size)}>
            <CustomText content={price} className="number" />
            <CustomText content={unit} className="unit" />
        </div>
    );
};
ItemPrice.defaultProps = {
    size: undefined,
    unit: '원',
};
export default ItemPrice;
