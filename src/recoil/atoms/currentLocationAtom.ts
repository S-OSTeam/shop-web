import {atom} from 'recoil';

const currentLocationAtom = atom<string>({
    key: 'currentLocationAtom',
    default: ''
});
export default currentLocationAtom;