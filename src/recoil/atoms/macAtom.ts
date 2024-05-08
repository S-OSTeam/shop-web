import { atom } from 'recoil';

const macAtom = atom<string>({
    key: 'macAddress',
    default: ``,
});

export default macAtom;
