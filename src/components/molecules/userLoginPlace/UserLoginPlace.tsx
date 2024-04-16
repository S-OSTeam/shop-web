/* eslint-disable */
import React from 'react';
import IconButton from '@molecules/button/iconButton/IconButton';
import Button from '@atoms/button/Button';
import PropTypes from 'prop-types';
import clsN from 'classnames';
import styles from './styles/UserLoginPlace.module.scss';
import { Stack } from '@mui/material';
import { Chat, Notifications } from '@mui/icons-material';

interface UserLoginPlaceProps {
    // 클래스명
    className?: string;
    // 알림 버튼 클래스명
    notifyClsN?: string;
    // 문자 버튼 클래스명
    chatClsN?: string;
    // 로그인 버튼 클래스 명
    loginClsN?: string;
}
const UserLoginPlace = (
    {
        className,
        notifyClsN,
        chatClsN,
        loginClsN
    }:UserLoginPlaceProps
) => {
    /* await 로 데이터 받고 정리하기 */

    // 상태
    /* 알림 */

    /* 문자 */

    /*  */

    return(
        <Stack className={clsN(styles.stack, className)} direction='row'>
            <IconButton className={clsN(styles.stack__notify, notifyClsN)} icon={<Notifications/>} />
            <IconButton className={clsN(styles.stack__chat, chatClsN)} icon={<Chat/>} />
            <Button className={clsN(styles.stack__login, loginClsN)} >Login</Button>
        </Stack>
    )
}
UserLoginPlace.propTypes = {
    className: PropTypes.string,
    notifyClsN: PropTypes.string,
    chatClsN: PropTypes.string,
    loginClsN: PropTypes.string,
}
UserLoginPlace.defaultProps = {
    className: styles.stack,
    notifyClsN: styles.stack__notify,
    chatClsN: styles.stack__chat,
    loginClsN: styles.stack__login,
}
export default UserLoginPlace;