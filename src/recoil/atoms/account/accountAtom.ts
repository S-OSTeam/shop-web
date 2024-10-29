import { atom } from 'recoil';
import { AccountResponse, EmptyAccountResponse } from '@interface/Account/Account';

export const accountAtom = atom<AccountResponse>({
    key: 'account',
    default: EmptyAccountResponse,
});
