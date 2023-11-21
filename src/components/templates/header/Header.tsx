/* eslint-disable */
import React from 'react';
import clsN from 'classnames';
import { Box, Checkbox, Tooltip } from '@mui/material';
import ChecklistIcon from '@mui/icons-material/Checklist';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import HeaderGenerator from './headerGen/HeaderGenerator';
import LinkTag from '../../atoms/link/LinkTag';
import Text from '../../atoms/text/Text';
import Button from '../../atoms/button/Button';
import styles from './styles/Header.module.scss';
import './styles/HeaderMob.scss';
import { useRecoilState } from 'recoil';
import {menuCheckState} from '../../../recoil/atoms/MobMenuCheck';

export type depthItem = {
    title: string,
    href: string,
}

export type myHeaderItemAry = {
    title: string,
    href: string,
    depth: depthItem[];
}

const Header = () => {
    const [isToggle, setIsToggle] = useRecoilState(menuCheckState);
    const handleOnChange = () => {
        setIsToggle((prev)=> !prev);
    };

    const tempTitle: myHeaderItemAry[] = [
        {
            title: '만화▾',
            href: '',
            depth: [
                {
                    title: '주술회전',
                    href: '',
                },
                {
                    title: '나루토질풍전풍둔나선수리검',
                    href: '',
                },
            ],
        },
        {
            title: '게임▾',
            href: '',
            depth: [
                {
                    title: '주술회전',
                    href: '',
                },
                {
                    title: '나루토질풍전풍둔나선수리검',
                    href: '',
                },
            ],
        },
        {
            title: '개인커스텀▾',
            href: '',
            depth: [
                {
                    title: '주술회전',
                    href: '',
                },
                {
                    title: '나루토질풍전풍둔나선수리검',
                    href: '',
                },
            ],
        },
        {
            title: '문의▾',
            href: '',
            depth: [
                {
                    title: '주술회전',
                    href: '',
                },
                {
                    title: '나루토질풍전풍둔나선수리검',
                    href: '',
                },
            ],
        },
    ];
    const headerIcons = [
        {
            title: '최근',
            href: '',
            currentIcon: <ChecklistIcon />,
        },
        {
            title: '관심',
            href: '',
            currentIcon: <FavoriteIcon />,
        },
        {
            title: '장바구니',
            href: '',
            currentIcon: <ShoppingCartIcon />,
        },
    ];

    const navLists = headerIcons.map((current) => {
        const { href, title, currentIcon } = current;
        return (
            <li><LinkTag href={href}><Tooltip title={title}>{currentIcon}</Tooltip></LinkTag></li>);
    });
    const mobileMenu =
        <p id='menuToggle' className={clsN(`${styles.mobMenu}`, { toggled: isToggle }, 'mobMenu')}>
            <Checkbox
                className={clsN(`${styles.menuCheck} menuCheck`)}
                checked={isToggle} icon={<MenuIcon />}
                checkedIcon={<CloseIcon />}
                onChange={handleOnChange}
            />
        </p>;


    // 스타일 가져오기

    return (
        <header>
            <Box className={`${styles.navWrapper} ${styles.navContainer}`}>
                <nav className={`${styles.nav} ${styles.container}`}>
                    <LinkTag className={`${styles.logoLink}`} href=''>
                        <Text text='DeamHome' className={`${styles.logoTitle} ${styles.container}`} />
                    </LinkTag>
                    <HeaderGenerator items={tempTitle}/>
                    <ul className={clsN(`${styles.navIcon}`)}>{navLists}</ul>
                    <Box component='div' className={`${styles.loginWrapper}`}>
                        <Button className={`${styles.LoginBtn}`}>
                            <Text text='로그인' className={`${styles.loginText}`} />
                        </Button>
                    </Box>
                    {mobileMenu}
                </nav>
            </Box>
        </header>
    );
};
export default Header;