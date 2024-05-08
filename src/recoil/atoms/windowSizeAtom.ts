import { atom } from 'recoil';

const windowSizeAtom = atom<boolean>({
   key: 'windowSizeAtom',
   default: false
});
export default windowSizeAtom;