import React from 'react';
import { Box, Divider } from '@mui/material';
import { ReactComponent as Logo } from '@asset/image/logo/Logo.svg';
import { useDomSizeCheckHook } from '@hooks/useDomSizeCheck.hook';
import Text from '@components/atoms/text/Text';
import ImageButton from '@components/molecules/button/imageButton/ImageButton';
import clsN from 'classnames';

import ImgTextButton from '@components/molecules/button/imgTextButton/ImgTextButton';
import CustomIcon from '@components/atoms/source/icon/customIcon/CustomIcon';
import style from './style/style.module.scss';

const SocialLogin = () => {
    const isInMobile = useDomSizeCheckHook(768);

    const socialPlatforms = [
        { name: 'naver', text: '네이버 로그인' },
        { name: 'kakao', text: '카카오 로그인' },
        { name: 'google', text: '구글 로그인' },
    ];

    return (
        <div>
            <Box className={clsN(`${style['social-login-wrapper']}`)}>
                {isInMobile && (
                    <Box className={clsN(`${style['mobile-social-login-wrapper']}`)}>
                        <Box className={clsN(`${style['mobile-social-login-wrapper']}`)}>
                            <Logo className={clsN(`${style['mobile-social-login-logo']}`)} />
                        </Box>
                        <Box className={clsN(`${style['mobile-social-login-wrapper__title']}`)}>
                            <Divider variant="middle" textAlign="center">
                                간편 로그인
                            </Divider>
                        </Box>
                        <Box className={clsN(`${style['mobile-social-login-wrapper__social-wrapper']}`)}>
                            {socialPlatforms.map((platform) => (
                                <ImgTextButton
                                    key={platform.name}
                                    className={clsN(
                                        `${style['mobile-social-login-wrapper__social-wrapper__btn']}`,
                                        `${style[`mobile-social-login-wrapper__social-wrapper__${platform.name}-btn`]}`,
                                    )}
                                    img={
                                        <CustomIcon
                                            name={platform.name}
                                            className={clsN(
                                                `${
                                                    style[
                                                        `mobile-social-login-wrapper__social-wrapper__${platform.name}-btn__${platform.name}-login`
                                                    ]
                                                }`,
                                            )}
                                        />
                                    }
                                    text={platform.text}
                                />
                            ))}
                        </Box>
                    </Box>
                )}

                {!isInMobile && (
                    <Box>
                        <Text
                            text="간편 로그인 "
                            variant="subtitle1"
                            className={clsN(`${style['social-login-wrapper__title']}`)}
                            align="center"
                        />
                        <Box className={clsN(`${style['social-login-wrapper__icon-wrapper']}`)}>
                            {socialPlatforms.map((platform) => (
                                <ImageButton
                                    key={platform.name}
                                    className={clsN(style.btn)}
                                    img={
                                        <CustomIcon
                                            name={platform.name}
                                            className={clsN(`${style[`social-login-wrapper__${platform.name}-icon`]}`)}
                                        />
                                    }
                                />
                            ))}
                        </Box>
                    </Box>
                )}
            </Box>
        </div>
    );
};

export default SocialLogin;
