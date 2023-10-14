import React, { useReducer, useState } from 'react';
import '../../styles/Items.scss';
import '../../styles/ItemBundle.scss';
import classNames from 'classnames';
import { Pagination } from '@mui/material';
import ButtonCustom from '../atoms/ButtonCustom';
import AddOnButton from '../atoms/AddOnButton';
import Item, { ItemProps } from '../molecules/Item';
import MiniInfo from '../atoms/MiniInfo';

// 아이템 목록의 타입
type ItemArrayType = Array<ItemProps>;

// 아이템 목록이 담긴 배열을 위한 리듀서 함수의 action 타입
interface ActionType {
    type: string;
}

const Items = () => {
    const reducer = (state: ItemArrayType, action: ActionType): ItemArrayType => {
        switch (action.type) {
            case 'SortByPopularity':
                return state;
            case 'SortByNewProducts':
                return state;
            case 'SortByLowPrice':
                return state;
            case 'SortByHighPrice':
                return state;
            default:
                return state;
        }
    };
    const [itemArray, itemDispatch] = useReducer(reducer, [
        {
            name: '고죠사토루 피규어',
            id: 0,
            price: '20,000',
            des: '스쿠나한테 더위사냥 엔딩 맞은 이 시대 최강의 범부',
            img: 'pme.png',
        },
    ]);

    const [page, setPage] = useState(1);

    const [btnActive, setBtnActive] = useState([
        { active: false },
        { active: false },
        { active: false },
        { active: false },
    ]);
    console.log(itemArray);
    const dummyOnClick = (id: number, sort: string) => {
        setBtnActive(
            btnActive.map((value, index) => (index === id ? { ...value, active: true } : { ...value, active: false })),
        );
        itemDispatch({ type: sort });
    };
    const addOnClick = () => {
        console.log('addOn');
    };

    const onChangePage = (event: React.ChangeEvent<unknown>, value: number) => {
        // page+1 값으로 변하면 index번호를 page관련 값을 이용해서 내용 바꿔주기
        if (event) setPage(value);
    };

    const itemQuantityInfo: string = `상품목록 : ${itemArray.length}`;

    return (
        <div className={classNames('Items')}>
            <div className={classNames('Content')}>
                <div className={classNames('ItemFilter')}>
                    <div id="Info">
                        <ButtonCustom
                            id={0}
                            height="25px"
                            width="fit-content"
                            text="인기순"
                            fontSize="16px"
                            onClick={() => dummyOnClick(0, 'SortByPopularity')}
                            active={btnActive[0].active}
                        />
                        <ButtonCustom
                            id={1}
                            height="25px"
                            width="fit-content"
                            text="신상품품순"
                            fontSize="16px"
                            onClick={() => dummyOnClick(1, 'SortByNewProducts')}
                            active={btnActive[1].active}
                        />
                        <ButtonCustom
                            id={2}
                            height="25px"
                            width="fit-content"
                            text="높은가격격순"
                            fontSize="16px"
                            onClick={() => dummyOnClick(2, 'SortByHighPrice')}
                            active={btnActive[2].active}
                        />
                        <ButtonCustom
                            id={3}
                            height="25px"
                            width="fit-content"
                            text="낮은가격순"
                            fontSize="16px"
                            onClick={() => dummyOnClick(3, 'SortByLowPrice')}
                            active={btnActive[3].active}
                        />
                    </div>
                    <div id="AddOn">
                        <AddOnButton imgPath="grid.svg" onClick={addOnClick} alt="grid" size="medium" />
                        <AddOnButton imgPath="list.svg" onClick={addOnClick} alt="list" size="medium" />
                    </div>
                </div>
                <div className={classNames('ItemQuantity')}>
                    <MiniInfo info={itemQuantityInfo} size="big" />
                </div>
                <div className={classNames('ItemBundle-grid')}>
                    <Item
                        id={itemArray[0].id}
                        name={itemArray[0].name}
                        des={itemArray[0].des}
                        price={itemArray[0].price}
                        img={itemArray[0].img}
                    />
                    <Item
                        id={itemArray[0].id}
                        name={itemArray[0].name}
                        des={itemArray[0].des}
                        price={itemArray[0].price}
                        img={itemArray[0].img}
                    />
                    <Item
                        id={itemArray[0].id}
                        name={itemArray[0].name}
                        des={itemArray[0].des}
                        price={itemArray[0].price}
                        img={itemArray[0].img}
                    />
                    <Item
                        id={itemArray[0].id}
                        name={itemArray[0].name}
                        des={itemArray[0].des}
                        price={itemArray[0].price}
                        img={itemArray[0].img}
                    />
                </div>
                <div className={classNames('ItemBundle-grid')}>
                    <Item
                        id={itemArray[0].id}
                        name={itemArray[0].name}
                        des={itemArray[0].des}
                        price={itemArray[0].price}
                        img={itemArray[0].img}
                    />
                    <Item
                        id={itemArray[0].id}
                        name={itemArray[0].name}
                        des={itemArray[0].des}
                        price={itemArray[0].price}
                        img={itemArray[0].img}
                    />
                    <Item
                        id={itemArray[0].id}
                        name={itemArray[0].name}
                        des={itemArray[0].des}
                        price={itemArray[0].price}
                        img={itemArray[0].img}
                    />
                    <Item
                        id={itemArray[0].id}
                        name={itemArray[0].name}
                        des={itemArray[0].des}
                        price={itemArray[0].price}
                        img={itemArray[0].img}
                    />
                </div>
                <div className={classNames('ItemBundle-grid')}>
                    <Item
                        id={itemArray[0].id}
                        name={itemArray[0].name}
                        des={itemArray[0].des}
                        price={itemArray[0].price}
                        img={itemArray[0].img}
                    />
                    <Item
                        id={itemArray[0].id}
                        name={itemArray[0].name}
                        des={itemArray[0].des}
                        price={itemArray[0].price}
                        img={itemArray[0].img}
                    />
                    <Item
                        id={itemArray[0].id}
                        name={itemArray[0].name}
                        des={itemArray[0].des}
                        price={itemArray[0].price}
                        img={itemArray[0].img}
                    />
                    <Item
                        id={itemArray[0].id}
                        name={itemArray[0].name}
                        des={itemArray[0].des}
                        price={itemArray[0].price}
                        img={itemArray[0].img}
                    />
                </div>
                <div className={classNames('ItemBundle-grid')}>
                    <Item
                        id={itemArray[0].id}
                        name={itemArray[0].name}
                        des={itemArray[0].des}
                        price={itemArray[0].price}
                        img={itemArray[0].img}
                    />
                    <Item
                        id={itemArray[0].id}
                        name={itemArray[0].name}
                        des={itemArray[0].des}
                        price={itemArray[0].price}
                        img={itemArray[0].img}
                    />
                    <Item
                        id={itemArray[0].id}
                        name={itemArray[0].name}
                        des={itemArray[0].des}
                        price={itemArray[0].price}
                        img={itemArray[0].img}
                    />
                    <Item
                        id={itemArray[0].id}
                        name={itemArray[0].name}
                        des={itemArray[0].des}
                        price={itemArray[0].price}
                        img={itemArray[0].img}
                    />
                </div>
                <div className={classNames('PagenationBox')}>
                    <Pagination count={10} showFirstButton showLastButton page={page} onChange={onChangePage} />
                </div>
            </div>
        </div>
    );
};
export default Items;
