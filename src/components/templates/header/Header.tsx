/* eslint-disable */
import React from 'react';
import clsN from 'classnames';
import styles from './styles/Header.module.scss';
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
    const [mobChecked, setMobChecked] = React.useState<boolean>(false);
    const handleOnChange = () => {
        setMobChecked(!mobChecked);
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
            href: '',
            title: '최근',
            currentIcon: <ChecklistIcon />,
        },
        {
            href: '',
            title: '관심',
            currentIcon: <FavoriteIcon />,
        },
        {
            href: '',
            title: '장바구니',
            currentIcon: <ShoppingCartIcon />,
        },
    ];

    const navLists = headerIcons.map((current) => {
        const { href, title, currentIcon } = current;
        return (
            <li><LinkTag href={href}><Tooltip title={title}>{currentIcon}</Tooltip></LinkTag></li>);
    });
    const mobileMenu =
        <p id='menuToggle' className={clsN(`${styles.mobMenu}`, { toggled: mobChecked })}>
            <Checkbox
                className={clsN(`${styles.menuCheck}`)}
                checked={mobChecked} icon={<MenuIcon />}
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
                    <HeaderGenerator items={tempTitle} getState={mobChecked}/>
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