export interface AccountResponse {
    userId: string;
    sex: boolean;
    birthday: string;
    zipcode: string;
    address1: string;
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
    email: '',
    receiveMail: '',
    snsId: '',
    phone: '',
    userName: '',
    point: 0,
};
