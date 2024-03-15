import { atom } from 'recoil';

interface searchItemType {
    id: number;
    question: string;
    answer: string;
}

const searchItemAtom = atom<searchItemType[]>({
    key: 'searchItemAtom',
    default: [],
});

export default searchItemAtom;
