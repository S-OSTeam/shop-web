import { atom } from 'recoil';
import { FormDataInterface } from '@interface/FormDataInterface';

export const signUpState = atom<FormDataInterface>({
    key: 'signUpState',
    default: {
        userId: '',
        pwd: '',
        confirmPwd: '',
        sex: true,
        birthday: new Date(),
        zipcode: '',
        address1: '',
        address2: '',
        address3: '',
        address4: '',
        email: '',
        phone: '',
        receiveMail: false,
        sns: 'NORMAL',
        userName: '',
    },
});

export const agreementState = atom<boolean>({
    key: 'agreementState',
    default: false,
});
