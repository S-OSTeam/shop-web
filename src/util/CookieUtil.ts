import { Cookies } from 'react-cookie';

const cookies = new Cookies();

export const setCookie = <T>(name: string, value: string, option?: T) => {
    return cookies.set(name, value, { ...option });
};

export const getCookie = (name: string) => {
    return cookies.get(name);
};

export const removeCookie = <T>(name: string, option?: T) => {
    return cookies.remove(name, { ...option });
};
