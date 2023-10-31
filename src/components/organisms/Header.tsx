import React from 'react';
import '../../styles/Header.scss';
import classNames from 'classnames';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CustomButton from '../atoms/button/CustomButton';
import CustomText from '../atoms/text/CustomText';

const Header = () => {
    return (
        <div className={classNames('header-box')}>
            <div className={classNames('headerNav')}>
                <CustomButton>
                    <CustomText content="DreamHome" />
                </CustomButton>

                <ul className={classNames('categoryNav')}>
                    <li>
                        <CustomButton>
                            <CustomText content="캐릭터▾" />
                        </CustomButton>
                        <ul className={classNames('depth-1')}>
                            <li>
                                <CustomButton>
                                    <CustomText content="주술회전" />
                                </CustomButton>
                            </li>
                            <li>
                                <CustomButton>
                                    <CustomText content="나루토질풍전풍둔나선수리검" />
                                </CustomButton>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <CustomButton>
                            <CustomText content="만화▾" />
                        </CustomButton>
                        <ul className={classNames('depth-1')}>
                            <li>
                                <CustomButton>
                                    <CustomText content="주술회전" />
                                </CustomButton>
                            </li>
                            <li>
                                <CustomButton>
                                    <CustomText content="나루토질풍전풍둔나선수리검" />
                                </CustomButton>
                            </li>
                        </ul>
                    </li>

                    <li>
                        <CustomButton>
                            <CustomText content="게임▾" />
                        </CustomButton>
                        <ul className={classNames('depth-1')}>
                            <li>
                                <CustomButton>
                                    <CustomText content="주술회전" />
                                </CustomButton>
                            </li>
                            <li>
                                <CustomButton>
                                    <CustomText content="나루토질풍전풍둔나선수리검" />
                                </CustomButton>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <CustomButton>
                            <CustomText content="개인 커스텀▾" />
                        </CustomButton>
                        <ul className={classNames('depth-1')}>
                            <li>
                                <CustomButton>
                                    <CustomText content="주술회전" />
                                </CustomButton>
                            </li>
                            <li>
                                <CustomButton>
                                    <CustomText content="나루토질풍전풍둔나선수리검" />
                                </CustomButton>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <CustomButton>
                            <CustomText content="문의" />
                        </CustomButton>
                        <ul className={classNames('depth-1')}>
                            <li>
                                <CustomButton>
                                    <CustomText content="주술회전" />
                                </CustomButton>
                            </li>
                            <li>
                                <CustomButton>
                                    <CustomText content="나루토질풍전풍둔나선수리검" />
                                </CustomButton>
                            </li>
                        </ul>
                    </li>
                </ul>

                <CustomButton className={classNames('headerFavoriteIcon')}>
                    <FavoriteIcon />
                </CustomButton>
                <CustomButton className={classNames('headerShoppingCartIcon')}>
                    <ShoppingCartIcon />
                </CustomButton>
            </div>
        </div>
    );
};
export default Header;
