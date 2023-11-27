import React, { useReducer, useState } from 'react';
import '../../styles/Items.scss';
import '../../styles/ItemBundle.scss';
import classNames from 'classnames';
import MiniInfo from '../molecules/MiniInfo';
import Item from '../molecules/Item';
import PaginationCustom from '../atoms/pagination/PaginationCustom';
import ButtonCustom from '../atoms/button/ButtonCustom';
import TextCustom from '../atoms/text/TextCustom';

// 아이템 목록의 타입
type ItemArrayType = Array<{
    id: number;
    price: string;
    name: string;
    des: string;
    img: string;
}>;

// 아이템 목록이 담긴 배열을 위한 리듀서 함수의 action 타입
interface ActionType {
    type: string;
}

const Items = () => {
    // 필터링 버튼 reducer 함수
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

    // 실제로 사용할 아이템들의 목록이 들어있는 state
    const [itemArray, itemDispatch] = useReducer(reducer, [
        {
            name: '귀여운 포메라니안',
            id: 0,
            price: '20,000',
            des: '스쿠나한테 더위사냥 엔딩 맞은 이 시대 최강의 범부',
            img: 'pme.png',
        },
    ]);

    // pagination에서 몇 페이지 인지 받는 state
    const [page, setPage] = useState(1);

    // 필터 버튼 활성화 state
    const [btnActive, setBtnActive] = useState([
        { active: false },
        { active: false },
        { active: false },
        { active: false },
    ]);

    // grid 모드 인지 list 모드인지를 보여주는 state
    // default는 gird로
    const [mode, setMode] = useState('grid');
    console.log(itemArray);
    const dummyOnClick = (id: number, sort: string) => {
        setBtnActive(
            btnActive.map((value, index) => (index === id ? { ...value, active: true } : { ...value, active: false })),
        );
        itemDispatch({ type: sort });
    };

    // grid 모드로 아이템들 보여주는 버튼 눌렀을 시
    const gridBtnClick = () => {
        setMode('grid');
    };

    // list 모드로 아이템들 보여주는 버튼 눌렀을 시
    const listBtnClick = () => {
        setMode('list');
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
                    <div className={classNames('Info')}>
                        <ButtonCustom
                            onClick={() => dummyOnClick(0, 'SortByPopularity')}
                            className={btnActive[0].active ? 'itemFilterButton isTabActive' : 'itemFilterButton'}
                        >
                            <TextCustom content="인기순" />
                        </ButtonCustom>

                        <ButtonCustom
                            onClick={() => dummyOnClick(1, 'SortByNewProducts')}
                            className={btnActive[1].active ? 'itemFilterButton isTabActive' : 'itemFilterButton'}
                        >
                            <TextCustom content="신상품순" />
                        </ButtonCustom>

                        <ButtonCustom
                            onClick={() => dummyOnClick(2, 'SortByHighPrice')}
                            className={btnActive[2].active ? 'itemFilterButton isTabActive' : 'itemFilterButton'}
                        >
                            <TextCustom content="높은가격순" />
                        </ButtonCustom>

                        <ButtonCustom
                            className={btnActive[3].active ? 'itemFilterButton isTabActive' : 'itemFilterButton'}
                            onClick={() => dummyOnClick(3, 'SortByLowPrice')}
                        >
                            <TextCustom content="낮은가격순" />
                        </ButtonCustom>
                    </div>
                    <div className={classNames('AddOn')}>
                        <ButtonCustom onClick={gridBtnClick} className={classNames('itemArrangementButton')}>
                            <img
                                src={require('../../asset/images/grid.svg').default}
                                alt="grid"
                                className={classNames('AddOnMedium')}
                            />
                        </ButtonCustom>

                        <ButtonCustom onClick={listBtnClick} className={classNames('itemArrangementButton')}>
                            <img
                                src={require('../../asset/images/list.svg').default}
                                alt="list"
                                className={classNames('AddOnMedium')}
                            />
                        </ButtonCustom>
                    </div>
                </div>
                <div className={classNames('ItemQuantity')}>
                    <MiniInfo info={itemQuantityInfo} size="MiniInfoBig" />
                </div>
                <div className={classNames(mode === 'list' ? '' : 'ItemBundle-grid')}>
                    <Item
                        id={itemArray[0].id}
                        name={itemArray[0].name}
                        des={itemArray[0].des}
                        price={itemArray[0].price}
                        img={itemArray[0].img}
                        mode={mode}
                    />
                    <Item
                        id={itemArray[0].id}
                        name={itemArray[0].name}
                        des={itemArray[0].des}
                        price={itemArray[0].price}
                        img={itemArray[0].img}
                        mode={mode}
                    />
                    <Item
                        id={itemArray[0].id}
                        name={itemArray[0].name}
                        des={itemArray[0].des}
                        price={itemArray[0].price}
                        img={itemArray[0].img}
                        mode={mode}
                    />
                    <Item
                        id={itemArray[0].id}
                        name={itemArray[0].name}
                        des={itemArray[0].des}
                        price={itemArray[0].price}
                        img={itemArray[0].img}
                        mode={mode}
                    />
                </div>

                <div className={classNames(mode === 'list' ? '' : 'ItemBundle-grid')}>
                    <Item
                        id={itemArray[0].id}
                        name={itemArray[0].name}
                        des={itemArray[0].des}
                        price={itemArray[0].price}
                        img={itemArray[0].img}
                        mode={mode}
                    />
                    <Item
                        id={itemArray[0].id}
                        name={itemArray[0].name}
                        des={itemArray[0].des}
                        price={itemArray[0].price}
                        img={itemArray[0].img}
                        mode={mode}
                    />
                    <Item
                        id={itemArray[0].id}
                        name={itemArray[0].name}
                        des={itemArray[0].des}
                        price={itemArray[0].price}
                        img={itemArray[0].img}
                        mode={mode}
                    />
                    <Item
                        id={itemArray[0].id}
                        name={itemArray[0].name}
                        des={itemArray[0].des}
                        price={itemArray[0].price}
                        img={itemArray[0].img}
                        mode={mode}
                    />
                </div>
                <div className={classNames(mode === 'list' ? '' : 'ItemBundle-grid')}>
                    <Item
                        id={itemArray[0].id}
                        name={itemArray[0].name}
                        des={itemArray[0].des}
                        price={itemArray[0].price}
                        img={itemArray[0].img}
                        mode={mode}
                    />
                    <Item
                        id={itemArray[0].id}
                        name={itemArray[0].name}
                        des={itemArray[0].des}
                        price={itemArray[0].price}
                        img={itemArray[0].img}
                        mode={mode}
                    />
                    <Item
                        id={itemArray[0].id}
                        name={itemArray[0].name}
                        des={itemArray[0].des}
                        price={itemArray[0].price}
                        img={itemArray[0].img}
                        mode={mode}
                    />
                    <Item
                        id={itemArray[0].id}
                        name={itemArray[0].name}
                        des={itemArray[0].des}
                        price={itemArray[0].price}
                        img={itemArray[0].img}
                        mode={mode}
                    />
                </div>
                <div className={classNames(mode === 'list' ? '' : 'ItemBundle-grid')}>
                    <Item
                        id={itemArray[0].id}
                        name={itemArray[0].name}
                        des={itemArray[0].des}
                        price={itemArray[0].price}
                        img={itemArray[0].img}
                        mode={mode}
                    />
                    <Item
                        id={itemArray[0].id}
                        name={itemArray[0].name}
                        des={itemArray[0].des}
                        price={itemArray[0].price}
                        img={itemArray[0].img}
                        mode={mode}
                    />
                    <Item
                        id={itemArray[0].id}
                        name={itemArray[0].name}
                        des={itemArray[0].des}
                        price={itemArray[0].price}
                        img={itemArray[0].img}
                        mode={mode}
                    />
                    <Item
                        id={itemArray[0].id}
                        name={itemArray[0].name}
                        des={itemArray[0].des}
                        price={itemArray[0].price}
                        img={itemArray[0].img}
                        mode={mode}
                    />
                </div>
                <div className={classNames('PagenationBox')}>
                    <PaginationCustom count={10} showOpt page={page} onChange={onChangePage} />
                </div>
            </div>
        </div>
    );
};
export default Items;
