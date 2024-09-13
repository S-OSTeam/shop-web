import { atom } from 'recoil';

const categoryIdAtom = atom<string>({
    key: 'categoryId',
    default: '',
});

export default categoryIdAtom;
