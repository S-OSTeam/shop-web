import React from 'react';
import '../../styles/Header.scss';
import classNames from 'classnames';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChecklistIcon from '@mui/icons-material/Checklist';
import ButtonCustom from '../atoms/button/ButtonCustom';
import TextCustom from '../atoms/text/TextCustom';

const Header = () => {
    return (
        <div className={classNames('header-box')}>
            <div className={classNames('headerNav')}>
                <ButtonCustom>
                    <TextCustom content="DreamHome" />
                </ButtonCustom>

                <ul className={classNames('categoryNav')}>
                    <li>
                        <ButtonCustom>
                            <TextCustom content="캐릭터▾" />
                        </ButtonCustom>
                        <ul className={classNames('depth-1')}>
                            <li>
                                <ButtonCustom>
                                    <TextCustom content="주술회전" />
                                </ButtonCustom>
                            </li>
                            <li>
                                <ButtonCustom>
                                    <TextCustom content="나루토질풍전풍둔나선수리검" />
                                </ButtonCustom>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <ButtonCustom>
                            <TextCustom content="만화▾" />
                        </ButtonCustom>
                        <ul className={classNames('depth-1')}>
                            <li>
                                <ButtonCustom>
                                    <TextCustom content="주술회전" />
                                </ButtonCustom>
                            </li>
                            <li>
                                <ButtonCustom>
                                    <TextCustom content="나루토질풍전풍둔나선수리검" />
                                </ButtonCustom>
                            </li>
                        </ul>
                    </li>

                    <li>
                        <ButtonCustom>
                            <TextCustom content="게임▾" />
                        </ButtonCustom>
                        <ul className={classNames('depth-1')}>
                            <li>
                                <ButtonCustom>
                                    <TextCustom content="주술회전" />
                                </ButtonCustom>
                            </li>
                            <li>
                                <ButtonCustom>
                                    <TextCustom content="나루토질풍전풍둔나선수리검" />
                                </ButtonCustom>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <ButtonCustom>
                            <TextCustom content="개인 커스텀▾" />
                        </ButtonCustom>
                        <ul className={classNames('depth-1')}>
                            <li>
                                <ButtonCustom>
                                    <TextCustom content="주술회전" />
                                </ButtonCustom>
                            </li>
                            <li>
                                <ButtonCustom>
                                    <TextCustom content="나루토질풍전풍둔나선수리검" />
                                </ButtonCustom>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <ButtonCustom>
                            <TextCustom content="문의" />
                        </ButtonCustom>
                        <ul className={classNames('depth-1')}>
                            <li>
                                <ButtonCustom>
                                    <TextCustom content="주술회전" />
                                </ButtonCustom>
                            </li>
                            <li>
                                <ButtonCustom>
                                    <TextCustom content="나루토질풍전풍둔나선수리검" />
                                </ButtonCustom>
                            </li>
                        </ul>
                    </li>
                </ul>

                <div className={classNames('headerIcons')}>
                    <ButtonCustom className={classNames('headerCheckListIcon')}>
                        <ChecklistIcon />
                    </ButtonCustom>
                    <img src={require('../../asset/images/separateLine.svg').default} alt="구분선" />
                    <ButtonCustom className={classNames('headerFavoriteIcon')}>
                        <FavoriteIcon />
                    </ButtonCustom>
                    <img src={require('../../asset/images/separateLine.svg').default} alt="구분선" />
                    <ButtonCustom className={classNames('headerShoppingCartIcon')}>
                        <ShoppingCartIcon />
                    </ButtonCustom>
                </div>

                <ButtonCustom className={classNames('headerLoginButton')}>
                    <TextCustom content="로그인" className={classNames('loginText')} />
                </ButtonCustom>
            </div>
        </div>
    );
};
export default Header;
