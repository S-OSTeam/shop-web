import { atom } from 'recoil';

export interface searchItemType {
    id: number;
    question: string;
    answer: string;
}

const searchItemAtom = atom<searchItemType[]>({
    key: 'searchItemAtom',
    default: [],
});

export default searchItemAtom;
