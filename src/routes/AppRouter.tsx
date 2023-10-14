import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MiniInfo from '../components/atoms/MiniInfo';
import SwiperCustom from '../components/atoms/SwiperCustom';
import Item from '../components/molecules/Item';
import BannerInfo from '../components/atoms/BannerInfo';
import DetailDepth from '../components/atoms/DetailDepth';
import CategoryAndItems from '../components/templates/CategoryAndItems';

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<CategoryAndItems />} />
            <Route path="/mini" element={<MiniInfo info="sibaㄹㄷㅈㄹ둦ㄷ절ㄷ쟈럳쟈ㅐ럳재" size="large" />} />
            <Route path="/s" element={<SwiperCustom imgPath="sasuke.svg" />} />
            <Route
                path="/item"
                element={<Item des="dmdkdkdkdkdkdkdk" name="고죠 사토루" id={1} img="pme.png" price="20000" />}
            />
            <Route path="/bannerInfo" element={<BannerInfo des="월간 인기 상품" name="차크라 공중회전" />} />
            <Route
                path="/detail"
                element={
                    <DetailDepth
                        address={[
                            { id: 1, address: '/' },
                            { id: 2, address: '/swiper' },
                        ]}
                        key={1}
                    />
                }
            />
        </Routes>
    );
};
