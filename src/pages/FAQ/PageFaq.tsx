/*eslint-disable*/
import React from 'react';
// import { FaqComponentOff } from '../../components/organisms/FaqComponentOff';
import '../../styles/scss/FaqStyles.scss';
import { QnaUserPost } from '../../components/templates/FAQ/QnaUserPost';

/*
 * responsiveFontSizes
 * 사이즈별 자동 변경
 *
 * Page 컴포넌트는 data를 받아와서 useEffect로 한번 혹은 데이터가 마운트 될 때 마다 업데이트 해주기
 *
 * */

export const PageFaq = () => {
    // return <FaqComponentOff />;
    return (
        <QnaUserPost />
    );
};
