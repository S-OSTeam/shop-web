/* eslint-disable */
import React from 'react';
import classNames from 'classnames';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChecklistIcon from '@mui/icons-material/Checklist';
import Button from '../../atoms/button/ButtonCustom';
import Text from '../../atoms/text/CustomText';
import '../../../styles/scss/header/Header.scss';
import { Box } from '@mui/material';
import LinkBox from '../../atoms/linkBox/LinkBox';
import LinkBoxWrapper from '../../molecules/linkBoxWrapper/LinkBoxWrapper';

/*
    <LinkBoxWrapper href='' linkBoxClassName={classNames()} text='' textClassName={classNames()} />
*/

const Header = () => {
    return (
        <Box component="header" className={classNames('header', 'wrapper')}>
            <Box component="nav" className={classNames('header', 'nav')}>
                <LinkBoxWrapper
                    href=""
                    linkBoxClassName={classNames('btn', 'logo')}
                    text="DreamHome"
                    textClassName={classNames('btn', 'logo', 'span', 'context')}
                />
                <ul className={classNames('nav', 'category', 'ul-wrapper')}>
                    <li>
                        <LinkBoxWrapper
                            href=""
                            linkBoxClassName={classNames('nav', 'link')}
                            text="캐릭터▾"
                            textClassName={classNames('link-context', 'text')}
                        />

                        <ul className={classNames('depth-1')}>
                            <li>
                                <LinkBoxWrapper
                                    href=""
                                    linkBoxClassName={classNames('secondary', 'link')}
                                    text="주술회전"
                                    textClassName={classNames('link-context', 'text')}
                                />
                            </li>
                            <li>
                                <LinkBoxWrapper
                                    href=""
                                    linkBoxClassName={classNames('secondary', 'link')}
                                    text="나루토질풍전풍둔나선수리검"
                                    textClassName={classNames('link-context', 'text')}
                                />
                            </li>
                        </ul>
                    </li>
                    <li>
                        <LinkBoxWrapper
                            href=""
                            linkBoxClassName={classNames('nav', 'link')}
                            text="만화▾"
                            textClassName={classNames('link-context', 'text')}
                        />
                        <ul className={classNames('depth-1')}>
                            <li>
                                <LinkBoxWrapper
                                    href=""
                                    linkBoxClassName={classNames('secondary', 'link')}
                                    text="주술회전"
                                    textClassName={classNames('link-context', 'text')}
                                />
                            </li>
                            <li>
                                <LinkBoxWrapper
                                    href=""
                                    linkBoxClassName={classNames('secondary', 'link')}
                                    text="나루토질풍전풍둔나선수리검"
                                    textClassName={classNames('link-context', 'text')}
                                />
                            </li>
                        </ul>
                    </li>
                    <li>
                        <LinkBox href="" className={classNames('nav', 'link')}>
                            <Text className={classNames('link-context', 'text')} text="게임▾" />
                        </LinkBox>
                        <ul className={classNames('depth-1')}>
                            <li>
                                <LinkBox href="" className={classNames('secondary', 'link')}>
                                    <Text className={classNames('link-context', 'text')} text="주술회전" />
                                </LinkBox>
                            </li>
                            <li>
                                <LinkBox href="" className={classNames('secondary', 'link')}>
                                    <Text
                                        className={classNames('link-context', 'text')}
                                        text="나루토질풍전풍둔나선수리검"
                                    />
                                </LinkBox>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <LinkBox href="" className={classNames('nav', 'link')}>
                            <Text className={classNames('link-context', 'text')} text="개인 커스텀▾" />
                        </LinkBox>
                        <ul className={classNames('depth-1')}>
                            <li>
                                <LinkBox href="" className={classNames('secondary', 'link')}>
                                    <Text className={classNames('link-context', 'text')} text="주술회전" />
                                </LinkBox>
                            </li>
                            <li>
                                <LinkBox href="" className={classNames('secondary', 'link')}>
                                    <Text
                                        className={classNames('link-context', 'text')}
                                        text="나루토질풍전풍둔나선수리검"
                                    />
                                </LinkBox>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <LinkBox href="" className={classNames('nav', 'link')}>
                            <Text className={classNames('link-context', 'text')} text="문의▾" />
                        </LinkBox>
                        <ul className={classNames('depth-1')}>
                            <li>
                                <LinkBox href="" className={classNames('secondary', 'link')}>
                                    <Text className={classNames('link-context', 'text')} text="주술회전" />
                                </LinkBox>
                            </li>
                            <li>
                                <LinkBox href="" className={classNames('secondary', 'link')}>
                                    <Text
                                        className={classNames('link-context', 'text')}
                                        text="나루토질풍전풍둔나선수리검"
                                    />
                                </LinkBox>
                            </li>
                        </ul>
                    </li>
                </ul>

                <div className={classNames('headerIcons')}>
                    <Button className={classNames('headerCheckListIcon icon-nav-btn')}>
                        <ChecklistIcon />
                    </Button>
                    <Button className={classNames('headerFavoriteIcon icon-nav-btn')}>
                        <FavoriteIcon />
                    </Button>
                    <Button className={classNames('headerShoppingCartIcon icon-nav-btn')}>
                        <ShoppingCartIcon />
                    </Button>
                </div>

                <Button className={classNames('headerLoginButton')}>
                    <Text text="로그인" className={classNames('loginText')} />
                </Button>
            </Box>
        </Box>
    );
};
export default Header;
