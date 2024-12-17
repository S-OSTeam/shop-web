import { atom } from 'recoil';

export const drawerAdminNavAtom = atom<boolean>({
    key: 'drawerAdminNav',
    default: false,
});
