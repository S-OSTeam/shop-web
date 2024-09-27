import { atom } from 'recoil';

export const naverCodeState = atom<string | null>({
    key: 'naverCodeState',
    default: null,
});

export const kakaoCodeState = atom<string | null>({
    key: 'kakaoCodeState',
    default: null,
});
