import { atom } from 'recoil';

export const soicalCodeState = atom<string | null>({
    key: 'socialCodeState',
    default: null,
});
