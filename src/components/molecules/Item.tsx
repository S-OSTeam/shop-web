import React from 'react';
import '../../styles/Item.scss';
import classNames from 'classnames';
import ButtonCustom from '../atoms/button/ButtonCustom';
import TextCustom from '../atoms/text/TextCustom';
import MiniInfo from './MiniInfo';
import ItemPrice from './ItemPrice';

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
                    <ButtonCustom className={classNames('itemImgBtn')} onClick={onClickItem}>
                        <img
                            className={classNames('AddOnLarge')}
                            src={require(`../../asset/images/${img}`)}
                            alt="더미이미지"
                        />
                    </ButtonCustom>
                </div>
                <div className={classNames('infoBox')}>
                    <div className={classNames('name-addOn')}>
                        <TextCustom content={name} className={classNames('itemNameBig')} />
                        <div className={classNames('AddOn')}>
                            <ButtonCustom className={classNames('itemAddOnBtn')} onClick={onClickShoppingBasket}>
                                <img
                                    className={classNames('AddOnMedium')}
                                    src={require('../../asset/images/shopping_basket.svg').default}
                                    alt="장바구니"
                                />
                            </ButtonCustom>
                            <ButtonCustom className={classNames('itemAddOnBtn')} onClick={onClickBookMark}>
                                <img
                                    className={classNames('AddOnMedium')}
                                    src={require('../../asset/images/book_mark.svg').default}
                                    alt="북마크"
                                />
                            </ButtonCustom>
                        </div>
                    </div>
                    <div className={classNames('priceWrapper')}>
                        <ItemPrice price={price} />
                    </div>
                    <div className={classNames('ItemDesListWrapper')}>
                        <TextCustom content={des} className="itemDescriptionNormal" onClick={onClickItem} />
                    </div>

                    <div className={classNames('miniInfoBox')}>
                        <div className={classNames('Info')}>
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
                <ButtonCustom className={classNames('itemImageBtn')} onClick={onClickItem}>
                    <img
                        className={classNames('itemImage')}
                        src={require(`../../asset/images/${img}`)}
                        alt="더미이미지"
                    />
                </ButtonCustom>
            </div>
            <TextCustom content={name} className={classNames('gridItemName')} />
            <div className={classNames('ItemDescriptionWrapper')}>
                <TextCustom content={des} className={classNames('itemDescriptionNormal')} />
            </div>
            <ItemPrice price={price} />
            <div className="BottomBox">
                <div className={classNames('Info')}>
                    <MiniInfo info="무료배송" size="miniInfoGrid" />
                    <MiniInfo info="특가" size="miniInfoGrid" />
                </div>
                <div className={classNames('AddOn')}>
                    <ButtonCustom className={classNames('gridAddOnBtn')} onClick={onClickShoppingBasket}>
                        <img
                            className={classNames('gridAddOnImg')}
                            src={require('../../asset/images/shopping_basket.svg').default}
                            alt="장바구니"
                        />
                    </ButtonCustom>
                    <ButtonCustom className={classNames('gridAddOnBtn')} onClick={onClickBookMark}>
                        <img
                            className={classNames('gridAddOnImg')}
                            src={require('../../asset/images/book_mark.svg').default}
                            alt="북마크"
                        />
                    </ButtonCustom>
                </div>
            </div>
        </div>
    );
};
export default Item;
