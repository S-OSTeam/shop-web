import React from 'react';
import '../../styles/CategoryAndItems.scss';
import classNames from 'classnames';
import Banner, { BannerInfoProps } from '../molecules/Banner';
import DetailDepth from '../molecules/DetailDepth';
import Items from '../organisms/Items';

const CategoryAndItems = () => {
    const imgPath: string[] = ['sasuke.svg', 'sasuke.svg', 'sasuke.svg', 'sasuke.svg', 'sasuke.svg', 'sasuke.svg'];

    const bannerInfos: BannerInfoProps[] = [
        { des: '월간 인기 항목', name: '차크라 공중 회전1' },
        { des: '월간 인기 항목', name: '주술회전2' },
        { des: '월간 인기 항목', name: '블리치3' },
        { des: '월간 인기 항목', name: '나루토4' },
        { des: '월간 인기 항목', name: '파이팅' },
        { des: '월간 인기 항목', name: '해야지6' },
    ];

    return (
        <div className={classNames('banner-itemsWrapper')}>
            <DetailDepth
                address={[
                    { id: 1, address: '캐릭터' },
                    { id: 2, address: '뎁스1' },
                    { id: 3, address: '뎁스2' },
                    {
                        id: 1,
                        address: '뎁스3',
                    },
                    { id: 4, address: '뎁스4' },
                    { id: 5, address: '리스트' },
                ]}
            />
            <Banner imgPaths={imgPath} infoList={bannerInfos} />
            <Items />
        </div>
    );
};
export default CategoryAndItems;
