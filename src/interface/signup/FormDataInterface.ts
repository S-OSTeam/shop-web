export interface FormDataInterface {
    userId: string;
    pwd: string;
    confirmPwd: string;
    sex: boolean;
    birthday: string;
    zipcode: string;
    address1: string;
    address2: string;
    address3: string;
    address4: string;
    email: string;
    phone: string;
    receiveMail: boolean;
    sns: string;
    userName: string;
}

export const EmptyFormDataInterface = {
    userId: '',
    pwd: '',
    confirmPwd: '',
    sex: false,
    birthday: '',
    zipcode: '',
    address1: '',
    address2: '',
    address3: '',
    address4: '',
    email: '',
    phone: '',
    receiveMail: true,
    sns: 'NORMAL',
    userName: '',
};
