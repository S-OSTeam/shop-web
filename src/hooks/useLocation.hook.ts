import {useEffect} from 'react';
import currentLocationAtom from '@recoil/atoms/currentLocationAtom';
import { useRecoilState } from 'recoil';
import { useLocation } from 'react-router-dom';

/**
 * 훅 이벤트에 따라 리코일 변경 : url
 */
export const useLocationHook = () => {
    // 상태
    const [urlState, setUrlState] = useRecoilState(currentLocationAtom);
    // 파라미터로 받은 주소
    const currentLocation = useLocation();

    useEffect(()=>{
        setUrlState(currentLocation.pathname);
    },[urlState, setUrlState]);
    return urlState;
};