import React from 'react';
import '../../styles/Item.scss';
import classNames from 'classnames';
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
    mode: string;
}

/* 아이템 요소 하나 보여주는 컴포넌트 */
const Item = ({ id, price, name, des, img, mode }: ItemProps) => {
    const onClickBookMark = () => {
        console.log(`${id} 활용해서 북마크 추가`);
    };
    const onClickShoppingBasket = () => {
        console.log(`${id} 활용해서 북마크 추가`);
    };
    const onClickItem = () => {
        console.log(`${id} 활용해서 아이템 선택처리`);
    };
    if (mode === 'list')
        return (
            <div className={classNames('ListItemBox')}>
                <div className={classNames('imageBox')}>
                    <AddOnButton imgPath={img} onClick={onClickItem} alt="더미이미지" size="AddOnLarge" />
                </div>
                <div className={classNames('infoBox')}>
                    <div className={classNames('name-addOn')}>
                        <ItemName href="/" name={name} size="itemNameBig" />
                        <div id="AddOn">
                            <AddOnButton
                                imgPath="shopping_basket.svg"
                                onClick={onClickShoppingBasket}
                                alt="장바구니"
                                size="AddOnMedium"
                            />
                            <AddOnButton
                                imgPath="book_mark.svg"
                                onClick={onClickBookMark}
                                alt="북마크"
                                size="AddOnMedium"
                            />
                        </div>
                    </div>
                    <div className={classNames('priceWrapper')}>
                        <ItemPrice price={price} />
                    </div>
                    <ItemDescription href="/" des={des} isList="ItemDesListWrapper" />

                    <div className={classNames('miniInfoBox')}>
                        <div id="Info">
                            <MiniInfo info="무료배송" size="MiniInfoInList" />
                            <MiniInfo info="특가" size="MiniInfoInList" />
                        </div>
                    </div>
                </div>
            </div>
        );
    return (
        <div className="GridItemBox">
            <div className="ImageBox">
                <AddOnButton imgPath={img} onClick={onClickItem} alt="더미이미지" size="AddOnLarge" />
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
