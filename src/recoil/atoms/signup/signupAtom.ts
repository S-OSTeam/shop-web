import { atom } from 'recoil';
import { EmptyFormDataInterface, FormDataInterface } from '@interface/signup/FormDataInterface';

export const signUpState = atom<FormDataInterface>({
    key: 'signUpState',
    default: { ...EmptyFormDataInterface },
});

export const agreementState = atom<boolean>({
    key: 'agreementState',
    default: false,
});
