import windowSizeAtom from '@recoil/atoms/windowSizeAtom';
import { useRecoilState } from 'recoil';
import { useMediaQuery } from '@mui/material';

/**
 * 윈도우 가로값을 측정하여 특정범위 이내일 경우에만 true 반환, 아닐시 false
 * @param {number} activateMenuWidth - max-width
 * @returns {boolean} isMobile - windowSizeAtom(Atom)상태값 반환
 * @type {(activateMenuWidth : number) => boolean}
 * */

export const useDomSizeCheckHook = (activateMenuWidth:number) => {
    // windowSizeAtom 아톰 상태값 사용 밑 수정
    const [isMobile, setIsMobile] = useRecoilState(windowSizeAtom);
    /*
    @mui/material 의 useMediaQuery 는 조건에 따라 boolean 타입 값 반환

    @mui/material useMediaQuery : 클라이언트가 서버측에게 HTTP 를 요청하는 Polling(정기적 데이터 가져오기)이 아니라, CSS 의 미디어 쿼리를 활용 하는 Hook 이다.
    즉 데이터가 필요하거나 서버요청을 하는 행위가 아니기 때문에 쿼리에 따라 구성 요소 렌더링 가능함, 즉 최적화에 좋음
    */
    const currentDom = useMediaQuery(`(max-width: ${activateMenuWidth}px)`);
    setIsMobile(currentDom);
    return isMobile;
}