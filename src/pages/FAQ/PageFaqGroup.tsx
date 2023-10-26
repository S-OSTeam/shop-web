/*eslint-disable*/
import React from 'react';
// import { FaqComponentOff } from '../../components/organisms/FaqComponentOff';
import FrameQnaForm from '../../components/templates/FAQ/FrameQnaForm';
import '../../styles/scss/QnaStyles.scss';

/*
 * responsiveFontSizes
 * 사이즈별 자동 변경
 *
 * Page 컴포넌트는 data를 받아와서 useEffect로 한번 혹은 데이터가 마운트 될 때 마다 업데이트 해주기
 *
 * */

export const PageFaqGroup = () => {
    // return <FaqComponentOff />;
    return (
        <FrameQnaForm />
    );
};
