/* eslint-disable */
import React from 'react';
import classNames from 'classnames';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChecklistIcon from '@mui/icons-material/Checklist';
import Button from '../../atoms/button/ButtonCustom';
import Text from '../../atoms/text/CustomText';
import '../../../styles/scss/header/Header.scss';

const Header = () => {
    return (
        <div className={classNames('header-box')}>
            <div className={classNames('headerNav')}>
                <Button className="btn-logo">
                    <Text text="DreamHome" />
                </Button>

                <ul className={classNames('categoryNav')}>
                    <li>
                        <Button>
                            <Text text="캐릭터▾" />
                        </Button>
                        <ul className={classNames('depth-1')}>
                            <li>
                                <Button>
                                    <Text text="주술회전" />
                                </Button>
                            </li>
                            <li>
                                <Button>
                                    <Text text="나루토질풍전풍둔나선수리검" />
                                </Button>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Button>
                            <Text text="만화▾" />
                        </Button>
                        <ul className={classNames('depth-1')}>
                            <li>
                                <Button>
                                    <Text text="주술회전" />
                                </Button>
                            </li>
                            <li>
                                <Button>
                                    <Text text="나루토질풍전풍둔나선수리검" />
                                </Button>
                            </li>
                        </ul>
                    </li>

                    <li>
                        <Button>
                            <Text text="게임▾" />
                        </Button>
                        <ul className={classNames('depth-1')}>
                            <li>
                                <Button>
                                    <Text text="주술회전" />
                                </Button>
                            </li>
                            <li>
                                <Button>
                                    <Text text="나루토질풍전풍둔나선수리검" />
                                </Button>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Button>
                            <Text text="개인 커스텀▾" />
                        </Button>
                        <ul className={classNames('depth-1')}>
                            <li>
                                <Button>
                                    <Text text="주술회전" />
                                </Button>
                            </li>
                            <li>
                                <Button>
                                    <Text text="나루토질풍전풍둔나선수리검" />
                                </Button>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Button>
                            <Text text="문의" />
                        </Button>
                        <ul className={classNames('depth-1')}>
                            <li>
                                <Button>
                                    <Text text="주술회전" />
                                </Button>
                            </li>
                            <li>
                                <Button>
                                    <Text text="나루토질풍전풍둔나선수리검" />
                                </Button>
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
            </div>
        </div>
    );
};
export default Header;
