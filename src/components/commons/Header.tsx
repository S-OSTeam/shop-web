import React from 'react';
import '../../styles/Header.scss';
import classNames from 'classnames';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChecklistIcon from '@mui/icons-material/Checklist';
import ButtonCustom from '../atoms/ButtonCustom';
import TextCustom from '../atoms/TextCustom';

const Header = () => {
    return (
        <div className={classNames('header-box')}>
            <div className={classNames('headerNav')}>
                <ButtonCustom>
                    <TextCustom text="DreamHome" />
                </ButtonCustom>

                <ul className={classNames('categoryNav')}>
                    <li>
                        <ButtonCustom>
                            <TextCustom text="캐릭터▾" />
                        </ButtonCustom>
                        <ul className={classNames('depth-1')}>
                            <li>
                                <ButtonCustom>
                                    <TextCustom text="주술회전" />
                                </ButtonCustom>
                            </li>
                            <li>
                                <ButtonCustom>
                                    <TextCustom text="나루토질풍전풍둔나선수리검" />
                                </ButtonCustom>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <ButtonCustom>
                            <TextCustom text="만화▾" />
                        </ButtonCustom>
                        <ul className={classNames('depth-1')}>
                            <li>
                                <ButtonCustom>
                                    <TextCustom text="주술회전" />
                                </ButtonCustom>
                            </li>
                            <li>
                                <ButtonCustom>
                                    <TextCustom text="나루토질풍전풍둔나선수리검" />
                                </ButtonCustom>
                            </li>
                        </ul>
                    </li>

                    <li>
                        <ButtonCustom>
                            <TextCustom text="게임▾" />
                        </ButtonCustom>
                        <ul className={classNames('depth-1')}>
                            <li>
                                <ButtonCustom>
                                    <TextCustom text="주술회전" />
                                </ButtonCustom>
                            </li>
                            <li>
                                <ButtonCustom>
                                    <TextCustom text="나루토질풍전풍둔나선수리검" />
                                </ButtonCustom>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <ButtonCustom>
                            <TextCustom text="개인 커스텀▾" />
                        </ButtonCustom>
                        <ul className={classNames('depth-1')}>
                            <li>
                                <ButtonCustom>
                                    <TextCustom text="주술회전" />
                                </ButtonCustom>
                            </li>
                            <li>
                                <ButtonCustom>
                                    <TextCustom text="나루토질풍전풍둔나선수리검" />
                                </ButtonCustom>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <ButtonCustom>
                            <TextCustom text="문의" />
                        </ButtonCustom>
                        <ul className={classNames('depth-1')}>
                            <li>
                                <ButtonCustom>
                                    <TextCustom text="주술회전" />
                                </ButtonCustom>
                            </li>
                            <li>
                                <ButtonCustom>
                                    <TextCustom text="나루토질풍전풍둔나선수리검" />
                                </ButtonCustom>
                            </li>
                        </ul>
                    </li>
                </ul>

                <div className={classNames('headerIcons')}>
                    <ButtonCustom className={classNames('headerCheckListIcon')}>
                        <ChecklistIcon />
                    </ButtonCustom>
                    <img src={require('../../asset/images/Rectangle 11.svg').default} alt="구분선" />
                    <ButtonCustom className={classNames('headerFavoriteIcon')}>
                        <FavoriteIcon />
                    </ButtonCustom>
                    <img src={require('../../asset/images/Rectangle 11.svg').default} alt="구분선" />
                    <ButtonCustom className={classNames('headerShoppingCartIcon')}>
                        <ShoppingCartIcon />
                    </ButtonCustom>
                </div>

                <ButtonCustom className={classNames('headerLoginButton')}>
                    <TextCustom text="로그인" className={classNames('loginText')}  />
                </ButtonCustom>
            </div>
        </div>
    );
};
export default Header;
