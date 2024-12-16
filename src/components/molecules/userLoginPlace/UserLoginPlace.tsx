import React from 'react';
import IconButton from '@molecules/button/iconButton/IconButton';
import Button from '@atoms/button/Button';
import PropTypes from 'prop-types';
import { Stack } from '@mui/material';
import { Chat, Notifications, DragHandle } from '@mui/icons-material';
import { useSetRecoilState } from 'recoil';
import { drawerAdminNavAtom } from '@recoil/atoms/admin/drawer/drawerAdminNavAtom';
import clsN from 'classnames';
import styles from './styles/UserLoginPlace.module.scss';

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
const UserLoginPlace = ({ className, notifyClsN, chatClsN, loginClsN }: UserLoginPlaceProps) => {
    /* await 로 데이터 받고 정리하기 */

    // 상태
    const setDrawState = useSetRecoilState(drawerAdminNavAtom); // 메뉴 펼치기 상태

    const handleDrawMenu = () => {
        setDrawState((prev) => !prev);
    };

    /* 알림 */

    /* 문자 */

    /*  */

    /* TODO 현재 컴포넌트에서 GQL 을 통해 알림이나 문의내역 알림 시스템 설계 */

    /* TODO : 관리자 로그인 버튼이 아닌 로그아웃 하기 + 로그인 시 보여줄 정보 설계하기 */

    return (
        <Stack className={clsN(styles.stack, className)} direction="row" gap={1}>
            <IconButton
                icon={<DragHandle />}
                className={clsN(styles.stack__icon, styles.stack__drawer)}
                onClick={handleDrawMenu}
            />
            <IconButton
                className={clsN(styles.stack__icon, styles.stack__notify, notifyClsN)}
                icon={<Notifications />}
            />
            <IconButton className={clsN(styles.stack__icon, styles.stack__chat, chatClsN)} icon={<Chat />} />
            <Button className={clsN(styles.stack__login, loginClsN)}>Login</Button>
        </Stack>
    );
};
UserLoginPlace.propTypes = {
    className: PropTypes.string,
    notifyClsN: PropTypes.string,
    chatClsN: PropTypes.string,
    loginClsN: PropTypes.string,
};
UserLoginPlace.defaultProps = {
    className: styles.stack,
    notifyClsN: styles.stack__notify,
    chatClsN: styles.stack__chat,
    loginClsN: styles.stack__login,
};
export default UserLoginPlace;
