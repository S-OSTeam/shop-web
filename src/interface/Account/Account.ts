export interface AccountResponse {
    userId: string;
    sex: boolean;
    birthday: string;
    zipcode: string;
    address1: string;
    address2: string;
    address3: string;
    address4: string;
    email: string;
    receiveMail: string;
    snsId: string;
    phone: string;
    userName: string;
    point: number;
}

export const EmptyAccountResponse: AccountResponse = {
    userId: '',
    sex: false,
    birthday: '',
    zipcode: '',
    address1: '',
    address2: '',
    address3: '',
    address4: '',
    email: '',
    receiveMail: '',
    snsId: '',
    phone: '',
    userName: '',
    point: 0,
};
