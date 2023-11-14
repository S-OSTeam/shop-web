/* eslint-disable */
import React  from 'react';
import classNames from 'classnames';
import { Box, Checkbox, Tooltip } from '@mui/material';
import ChecklistIcon from '@mui/icons-material/Checklist';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import HeaderGenerator from '../../organisms/header/HeaderGenerator';
import LinkBox from '../../atoms/linkBox/LinkBox';
import Text from '../../atoms/contents/Text';
import '../../../styles/scss/header/Header.scss';
import Button from '../../atoms/button/ButtonCustom';
import MenuCheckBox from '../../atoms/checkBox/CheckBox';

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
    }
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

    return (

            <Box component='div' className={classNames('nav-wrapper')}>
                <nav className={classNames('nav')}>
                    <LinkBox className={classNames('nav-logo nav-link')} href=''>
                        <Text text='DeamHome' className={(classNames('context'))} />
                    </LinkBox>
                    <HeaderGenerator className={mobChecked ? 'list-menu Show' : 'list-menu Off'} items={tempTitle} />
                    <ul className={classNames('nav-icon')}>
                        {headerIcons.map((current) => {const { href, title, currentIcon } = current; return (<li><LinkBox href={href}><Tooltip title={title}>{currentIcon}</Tooltip></LinkBox></li>);})}
                    </ul>
                    <Box component='div' className={classNames('login-wrapper')}>
                        <Button className='headerLoginButton'>
                            <Text text='로그인' className={classNames('loginText')} />
                        </Button>
                    </Box>
                    <p id='menuToggle'>
                        <Checkbox
                            className='menuCheck'
                            checked={mobChecked}
                            icon={<MenuIcon/>}
                            checkedIcon={<CloseIcon/>}
                            onChange={handleOnChange}
                        />
                    </p>
                </nav>
            </Box>

    );
};
export default Header;