/* eslint-disable */
// 쿠키
import {Cookies} from 'react-cookie';


const cookies = new Cookies();

// 쿠키 셋업
export const setCookie = (name: string, value: string, option?: any) => {
    return cookies.set(name,value,{...option});
}

// 쿠키 조회
export const getCookie = (name: string) => {
    return cookies.get(name);
}

// 쿠키 제거
export const removeCookie = (name: string) => {
    return cookies.remove(name);
}