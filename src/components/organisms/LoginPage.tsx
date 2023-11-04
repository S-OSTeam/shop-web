import React, { useState } from 'react';
import InputAtom from '../atoms/Input';
import "../../styles/LoginPage.scss"
import ButtonCustom from '../atoms/ButtonCustom';
import CustomText from '../atoms/CustomText';
import CheckboxMolecule from '../molecules/CheckboxMolecules';

interface LoginProps {
    onSubmit: (username: string, password: string) => void;
}

const Login: React.FC<LoginProps> = ({ onSubmit }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(username, password);
    };
    const IdKeepCheck= () => {
        console.log("check")
    }

    return (
        <div className="Login">
            <form className="LoginText" onSubmit={handleFormSubmit}>
                <CustomText content="로그인" className="LoginLogo" variant="body1" align="center" onClick={undefined}/>
                <div className="Id">
                    <InputAtom
                        className="LoginId"
                        type="text"
                        value={username}
                        placeholder="아이디"
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="Pwd">
                    <InputAtom
                        className="LoginPwd"
                        type="password"
                        value={password}
                        placeholder="비밀번호"
                        onChange={(e) => setPassword(e.target.value)}
                        />
                </div>
                    <div className="IdCheck">
                    <CheckboxMolecule
                        name="IdKeep"
                        checked={false}
                        onChange={IdKeepCheck}
                        label="아이디저장"
                        />
                    </div>
                <ButtonCustom className="LoginButton" >로그인</ButtonCustom>

            <div className="OtherButton">
            <ButtonCustom className="SignUp">회원가입</ButtonCustom>
            <ButtonCustom className="FindIdPwd">아이디/비밀번호 찾기</ButtonCustom>
            </div>
            <ButtonCustom className="Naver">
                <img className="NaverLogo" src={require("../../asset/images/image 9.svg").default} alt="네이버 로고" />
            </ButtonCustom>
            <ButtonCustom className="Kakao">
                <img className="KakaoLogo" src={require("../../asset/images/image 10.svg").default} alt="카카오 로고" />
            </ButtonCustom>
            <ButtonCustom className="Google">
                <img className="GoogleLogo" src={require("../../asset/images/image 11.svg").default} alt="구글 로고" />
            </ButtonCustom>
            </form>
        </div>
    );
};

export default Login;
