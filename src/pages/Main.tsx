import React from "react";
import ButtonCustom from '../components/atoms/ButtonCustom';

const MainPage = () => {
    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        localStorage.removeItem('accessToken');
        console.log("remove token");
        window.location.href = '/login';
    };


    return <div>
        MainPage
        <ButtonCustom className='LogoutButton' onClick={handleFormSubmit}>로그아웃</ButtonCustom>
    </div>
};

export default MainPage;
