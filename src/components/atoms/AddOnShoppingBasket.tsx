import React from 'react';
import '../../styles/AddOnButton.scss';
import shoppingBasket from '../../asset/images/shopping_basket.svg';

interface AddOnShoppingBasketProps {
    onClick: () => void;
}

const AddOnShoppingBasket = ({ onClick }: AddOnShoppingBasketProps) => {
    const handleKeyDown = (e: React.KeyboardEvent<HTMLImageElement>) => {
        if (e.key === 'enter' || e.key === ' ') {
            onClick();
        }
    };
    return <img src={shoppingBasket} alt="장바구니" onKeyDown={handleKeyDown} onClick={onClick} />;
};
export default AddOnShoppingBasket;
