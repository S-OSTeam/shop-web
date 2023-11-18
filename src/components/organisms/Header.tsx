/* eslint-disable */
import React from 'react';
import '../../styles/scss/header/Header.scss';
import classNames from 'classnames';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChecklistIcon from '@mui/icons-material/Checklist';
import Button from '../atoms/button/ButtonCustom';
import Text from '../atoms/text/TextCustom';

const Header = () => {
    return (
        <div className={classNames('header-box')}>
            <div className={classNames('headerNav')}>
                <Button>
                    <Text content="DreamHome" />
                </Button>

                <ul className={classNames('categoryNav')}>
                    <li>
                        <Button>
                            <Text content="캐릭터▾" />
                        </Button>
                        <ul className={classNames('depth-1')}>
                            <li>
                                <Button>
                                    <Text content="주술회전" />
                                </Button>
                            </li>
                            <li>
                                <Button>
                                    <Text content="나루토질풍전풍둔나선수리검" />
                                </Button>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Button>
                            <Text content="만화▾" />
                        </Button>
                        <ul className={classNames('depth-1')}>
                            <li>
                                <Button>
                                    <Text content="주술회전" />
                                </Button>
                            </li>
                            <li>
                                <Button>
                                    <Text content="나루토질풍전풍둔나선수리검" />
                                </Button>
                            </li>
                        </ul>
                    </li>

                    <li>
                        <Button>
                            <Text content="게임▾" />
                        </Button>
                        <ul className={classNames('depth-1')}>
                            <li>
                                <Button>
                                    <Text content="주술회전" />
                                </Button>
                            </li>
                            <li>
                                <Button>
                                    <Text content="나루토질풍전풍둔나선수리검" />
                                </Button>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Button>
                            <Text content="개인 커스텀▾" />
                        </Button>
                        <ul className={classNames('depth-1')}>
                            <li>
                                <Button>
                                    <Text content="주술회전" />
                                </Button>
                            </li>
                            <li>
                                <Button>
                                    <Text content="나루토질풍전풍둔나선수리검" />
                                </Button>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Button>
                            <Text content="문의" />
                        </Button>
                        <ul className={classNames('depth-1')}>
                            <li>
                                <Button>
                                    <Text content="주술회전" />
                                </Button>
                            </li>
                            <li>
                                <Button>
                                    <Text content="나루토질풍전풍둔나선수리검" />
                                </Button>
                            </li>
                        </ul>
                    </li>
                </ul>

                <div className={classNames('headerIcons')}>
                    <Button className={classNames('headerCheckListIcon icon-nav-btn')}>
                        <ChecklistIcon />
                    </Button>
                    {/*<img src={require('../../asset/images/separateLine.svg').default} alt="구분선" />*/}
                    <Button className={classNames('headerFavoriteIcon icon-nav-btn')}>
                        <FavoriteIcon />
                    </Button>
                    {/*<img src={require('../../asset/images/separateLine.svg').default} alt="구분선" />*/}
                    <Button className={classNames('headerShoppingCartIcon icon-nav-btn')}>
                        <ShoppingCartIcon />
                    </Button>
                </div>

                <Button className={classNames('headerLoginButton')}>
                    <Text content="로그인" className={classNames('loginText')} />
                </Button>
            </div>
        </div>
    );
};
export default Header;
