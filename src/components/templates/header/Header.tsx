/* eslint-disable */
import React from 'react';
import classNames from 'classnames';
import {
    Box,
    Checkbox, createStyles, makeStyles, styled, Theme,
    ThemeProvider,
    Tooltip,
} from '@mui/material';
import { theme } from '../../../styles/styles';
import ChecklistIcon from '@mui/icons-material/Checklist';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import HeaderGenerator from '../../organisms/header/HeaderGenerator';
import LinkBox from '../../atoms/linkBox/LinkBox';
import Text from '../../atoms/contents/Text';
// import '../../../styles/scss/header/Header.scss';
import Button from '../../atoms/button/ButtonCustom';

export type depthItem = {
    title: string,
    href: string,
}

export type myHeaderItemAry = {
    title: string,
    href: string,
    depth: depthItem[];
}

// css 인자가 무엇인지 타입 지정을 해줘야됨 : Theme
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {

        }
    })
);
const myClasses = useStyles;

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
            <li><LinkBox href={href}><Tooltip title={title}>{currentIcon}</Tooltip></LinkBox></li>);
    });
    const mobileMenu =
        <p id='menuToggle'>
            <Checkbox className='menuCheck' checked={mobChecked} icon={<MenuIcon />} checkedIcon={<CloseIcon />}
                      onChange={handleOnChange} />
        </p>;


    return (

        <ThemeProvider theme={theme}>
            <Box component='div' className={classNames('nav-wrapper')}>
                <nav className={classNames('nav')}>
                    <LinkBox className={classNames('nav-logo nav-link')} href=''>
                        <Text text='DeamHome' className={(classNames('context'))} />
                    </LinkBox>
                    <HeaderGenerator className={mobChecked ? 'list-menu Show' : 'list-menu Off'} items={tempTitle} />
                    <ul className={classNames('nav-icon')}>{navLists}</ul>
                    <Box component='div' className={classNames('login-wrapper')}>
                        <Button className='headerLoginButton'>
                            <Text text='로그인' className={classNames('loginText')} />
                        </Button>
                    </Box>
                    {mobileMenu}
                </nav>
            </Box>
        </ThemeProvider>
    );
};
export default Header;