import { atom, selector } from 'recoil';

// 리코일 인터페이스


// 리코일 상태 생성
export const menuCheckState = atom({
        key: 'menuCheckState',
        default: false,
    },
);
export const getMenuCheckState = selector({
    key: 'getMenuCheckState',
    get: ({get})=> {
        const current = get(menuCheckState);
        return current;
    },

})
