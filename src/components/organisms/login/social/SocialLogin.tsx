import React from 'react';
import { Box } from '@mui/material';
import { ReactComponent as GoogleIcon } from '@asset/image/icons/GoogleIcon.svg';
import { ReactComponent as NaverIcon } from '@asset/image/icons/NaverIcon.svg';
import { ReactComponent as KakaoIcon } from '@asset/image/icons/KakaoIcon.svg';
import { ReactComponent as Logo } from '@asset/image/logo/Logo.svg';
import { useDomSizeCheckHook } from '@hooks/useDomSizeCheck.hook';
import DividerWithText from '@components/molecules/divider/dividerWithText/DividerWithText';
import Text from '@components/atoms/text/Text';
import ImageButton from '@components/molecules/button/imageButton/ImageButton';
import clsN from 'classnames';

import ImgTextButton from '@components/molecules/button/imgTextButton/ImgTextButton';
import style from './style/style.module.scss';

const SocialLogin = () => {
    const isInMobile = useDomSizeCheckHook(768);

    return (
        <div>
            {isInMobile ? (
                <Box className={clsN(`${style['mobile-social-login-wrapper']}`)}>
                    <Box className={clsN(`${style['mobile-social-login-wrapper']}`)}>
                        <Logo className={clsN(`${style['mobile-social-login-logo']}`)} />
                    </Box>
                    <Box className={clsN(`${style['mobile-social-login-wrapper__title']}`)}>
                        <DividerWithText
                            text="간편 로그인"
                            align="center"
                            className={clsN(`${style['mobile-social-login-wrapper__text']}`)}
                        >
                            간편로그인
                        </DividerWithText>
                    </Box>
                    <Box className={clsN(`${style['mobile-social-login-wrapper__social-wrapper']}`)}>
                        <ImgTextButton
                            className={clsN(`${style['mobile-social-login-wrapper__social-wrapper__naver-btn']}`)}
                            img={
                                <NaverIcon
                                    className={clsN(
                                        `${style['mobile-social-login-wrapper__social-wrapper__naver-btn__naver-login']}`,
                                    )}
                                />
                            }
                            text="네이버 로그인"
                        />
                        <ImgTextButton
                            className={clsN(`${style['mobile-social-login-wrapper__social-wrapper__kakao-btn']}`)}
                            img={
                                <KakaoIcon
                                    className={clsN(
                                        `${style['mobile-social-login-wrapper__social-wrapper__kakao-btn__kakao-login']}`,
                                    )}
                                />
                            }
                            text="카카오 로그인"
                        />
                        <ImgTextButton
                            className={clsN(`${style['mobile-social-login-wrapper__social-wrapper__google-btn']}`)}
                            img={
                                <GoogleIcon
                                    className={clsN(
                                        `${style['mobile-social-login-wrapper__social-wrapper__google-btn__google-login']}`,
                                    )}
                                />
                            }
                            text="구글 로그인"
                        />
                    </Box>
                </Box>
            ) : (
                <Box className={clsN(`${style['social-login-wrapper']}`)}>
                    <Text
                        text="간편 로그인 "
                        variant="subtitle1"
                        className={clsN(`${style['social-login-wrapper__title']}`)}
                        align="center"
                    />
                    <Box className={clsN(`${style['social-login-wrapper__icon-wrapper']}`)}>
                        <ImageButton
                            className={clsN(style.btn)}
                            img={<NaverIcon className={clsN(`${style['social-login-wrapper__naver-icon']}`)} />}
                        />
                        <ImageButton
                            className={clsN(style.btn)}
                            img={<KakaoIcon className={clsN(`${style['social-login-wrapper__kakao-icon']}`)} />}
                        />
                        <ImageButton
                            className={clsN(style.btn)}
                            img={<GoogleIcon className={clsN(`${style['social-login-wrapper__google-icon']}`)} />}
                        />
                    </Box>
                </Box>
            )}
        </div>
    );
};

export default SocialLogin;
