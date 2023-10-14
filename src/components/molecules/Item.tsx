import React from 'react';
import '../../styles/Item.scss';
import ItemName from '../atoms/ItemName';
import ItemDescription from '../atoms/ItemDescription';
import ItemPrice from '../atoms/ItemPrice';
import AddOnButton from '../atoms/AddOnButton';
import MiniInfo from '../atoms/MiniInfo';

export interface ItemProps {
    id: number;
    price: string;
    name: string;
    des: string;
    img: string;
}

/* 아이템 요소 하나 보여주는 컴포넌트 */
const Item = ({ id, price, name, des, img }: ItemProps) => {
    const onClickBookMark = () => {
        console.log(`${id} 활용해서 북마크 추가`);
    };
    const onClickShoppingBasket = () => {
        console.log(`${id} 활용해서 북마크 추가`);
    };
    const onClickItem = () => {
        console.log(`${id} 활용해서 아이템 선택처리`);
    };
    return (
        <div className="ItemBox">
            <div className="ImageBox">
                <AddOnButton imgPath={img} onClick={onClickItem} alt="더미이미지" size="large" />
            </div>
            <ItemName href="/" name={name} />
            <ItemDescription href="/" des={des} />
            <ItemPrice price={price} />
            <div className="BottomBox">
                <div id="Info">
                    <MiniInfo info="무료배송" />
                    <MiniInfo info="특가" />
                </div>
                <div id="AddOn">
                    <AddOnButton imgPath="shopping_basket.svg" onClick={onClickShoppingBasket} alt="장바구니" />
                    <AddOnButton imgPath="book_mark.svg" onClick={onClickBookMark} alt="북마크" />
                </div>
            </div>
        </div>
    );
};
export default Item;
