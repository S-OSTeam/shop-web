import  { useState , useEffect} from 'react';
import * as React from 'react';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import "../../styles/LoginPage.scss"
import ButtonCustom from '../atoms/ButtonCustom';
import CustomText from '../atoms/TextCustom';
import CheckboxMolecule from '../molecules/CheckboxMolecules';
import InputAtom from '../atoms/Input';
import Header from '../commons/Header';

interface LoginProps {
    onSubmit: (username: string, password: string) => void;
}


const Login: React.FC<LoginProps> = ({ onSubmit }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [checked, setChecked] = React.useState([true, false]);
    const [cookies, setCookie, removeCookie] = useCookies(["rememberUserId"]);
    const [isRemember, setIsRemember] = useState(false);
    const [, setAccessToken] = useState<string>('');
    const navigate = useNavigate();

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(username, password);
        const token = "access1";
        setAccessToken(token);
        localStorage.setItem('accessToken', token);
        window.location.href = '/main';
        console.log("token")
    };
    // 체크박스
    const AutoLogin = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked([checked[0], event.target.checked]);
    }
    useEffect(() => {
        if (cookies.rememberUserId !== undefined) {
            setUsername(cookies.rememberUserId);
            setIsRemember(true);
        }
    }, []);
    const IdKeep = (event: React.ChangeEvent<HTMLInputElement>) => {
        setIsRemember(event.target.checked);
        if(event.target.checked){
            setCookie('rememberUserId', username, {maxAge: 2000});
            console.log("remember");
        } else {
            removeCookie('rememberUserId');
            console.log("remove");
        }
    };
    // 페이지 이동

    const navigateToSignUp = () => {
        navigate("/signup");
    };
    const navigateToFindId = () => {
        navigate("/findidpw");
    };
    // 카카오
    const Rest_api_key='6709d2b0e64c612eac81a0700e05401d'
    const redirect_uri = 'http://localhost:3000/'
    const kakaoURL = `https://kauth.kakao.com/oauth/authorize?client_id=${Rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`
    const handleLogin = ()=>{
        window.location.href = kakaoURL
    }
    // 네이버
    const NAVER_CLIENT_ID ='laNM303I3o17MyBiNQtt'
    const Naver_REDIRECT_URI = "http://localhost:3000";
    const STATE = "flase";
    const NAVER_AUTH_URL = `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${NAVER_CLIENT_ID}&state=${STATE}&redirect_uri=${Naver_REDIRECT_URI}`;
    const NaverLogin = () => {
        window.location.href = NAVER_AUTH_URL;
    };
    // 구글
    const CLIENT_ID = '1078233134115-61pjs7f3dut4088sa6k9m6lc14emjmfk.apps.googleusercontent.com';
    const REDIRECT_URI = "http://localhost:3000/oauth2";
    const SCOPE = 'https://www.googleapis.com/auth/userinfo.email';
    const handleGoogleLogin = () => {
        const googleOAuthUrl = `https://accounts.google.com/o/oauth2/auth?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code&scope=${SCOPE}`;
        window.location.href = googleOAuthUrl;
    };
    return (
        <><Header />
            <div className='Login'>
                <form className='LoginText' onSubmit={handleFormSubmit}>
                    <CustomText text='로그인' className='LoginLogo' variant='body1' align='center' onClick={undefined} />
                    <InputAtom type='text' className='LoginId' placeholder='아이디' value={username}
                               onChange={(e) => setUsername(e.target.value)} />
                    <InputAtom type='password' className='LoginPw' placeholder='비밀번호' value={password}
                               onChange={(e) => setPassword(e.target.value)} />
                    <div className='Check'>
                        <div className='IdCheck'>
                            <CheckboxMolecule
                                name='IdKeep'
                                checked={isRemember}
                                onChange={IdKeep}
                                label='아이디저장' />
                        </div>
                        <div className='AutoLoginCheck'>
                            <CheckboxMolecule
                                name='AutoLogin'
                                checked={checked[1]}
                                onChange={AutoLogin}
                                label='자동로그인' />
                        </div>
                    </div>
                    <ButtonCustom className='LoginButton' onClick={handleFormSubmit}>로그인</ButtonCustom>

                    <div className='OtherButton'>
                        <ButtonCustom className='SignUp' onClick={navigateToSignUp}>회원가입</ButtonCustom>
                        <ButtonCustom className='FindIdPwd' onClick={navigateToFindId}>아이디/비밀번호 찾기</ButtonCustom>
                    </div>
                    <ButtonCustom className='Naver' onClick={NaverLogin}>
                        <img className='NaverLogo' src={require('../../asset/images/image 9.svg').default}
                             alt='네이버 로고' />
                    </ButtonCustom>
                    <ButtonCustom className='Kakao' onClick={handleLogin}>
                        <img className='KakaoLogo' src={require('../../asset/images/image 10.svg').default}
                             alt='카카오 로고' />
                    </ButtonCustom>
                    <ButtonCustom className='Google' onClick={handleGoogleLogin}>
                        <img className='GoogleLogo' src={require('../../asset/images/image 11.svg').default}
                             alt='구글 로고' />
                    </ButtonCustom>
                </form>
            </div>
        </>

    );
};

export default Login;
