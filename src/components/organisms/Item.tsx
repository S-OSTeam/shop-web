import React from 'react';
import '../../styles/Item.scss';
import ItemName from '../atoms/ItemName';
import ItemDescription from '../atoms/ItemDescription';
import ItemPrice from '../atoms/ItemPrice';
import AddOnButton from '../atoms/AddOnButton';
import MiniInfo from '../atoms/MiniInfo';

interface ItemProps {
    price: string;
    name: string;
    des: string;
}

const Item = ({ price, name, des }: ItemProps) => {
    const onClickBookMark = () => {
        console.log('북마크');
    };
    const onClickShoppingBaske = () => {
        console.log('장바구니');
    };
    return (
        <div className="Box">
            <div className="ImageBox">
                <img src={require('../../asset/images/pme.png')} alt="더미이미지" />
            </div>
            <ItemName name={name} />
            <ItemDescription des={des} />
            <ItemPrice price={price} />
            <div className="BottomBox">
                <div id="Info">
                    <MiniInfo info="무료배송" />
                    <MiniInfo info="특가" />
                </div>
                <div id="AddOn">
                    <AddOnButton imgPath="shopping_basket.svg" onClick={onClickShoppingBaske} alt="장바구니" />
                    <AddOnButton imgPath="book_mark.svg" onClick={onClickBookMark} alt="북마크" />
                </div>
            </div>
        </div>
    );
};
export default Item;
