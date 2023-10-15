import React from 'react';
import '../../styles/CategoryAndItems.scss';
import classNames from 'classnames';
import Banner from '../molecules/Banner';
import DetailDepth from '../atoms/DetailDepth';
import Items from '../organisms/Items';
import { BannerInfoProps } from '../atoms/BannerInfo';

const CategoryAndItems = () => {
    const imgPath: string[] = ['sasuke.svg', 'sasuke.svg', 'sasuke.svg', 'sasuke.svg', 'sasuke.svg', 'sasuke.svg'];

    const bannerInfos: BannerInfoProps[] = [
        { des: '월간 인기 항목', name: '차크라 공중 회전' },
        { des: '월간 인기 항목', name: '차크라 공중 회전' },
        { des: '월간 인기 항목', name: '차크라 공중 회전' },
        { des: '월간 인기 항목', name: '차크라 공중 회전' },
        { des: '월간 인기 항목', name: '차크라 공중 회전' },
        { des: '월간 인기 항목', name: '차크라 공중 회전' },
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
            <Banner imgPath={imgPath} infoList={bannerInfos} />
            <Items />
        </div>
    );
};
export default CategoryAndItems;
