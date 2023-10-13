import React from 'react';
import "../../styles/header.scss"
import Heart from '../../asset/image/\uD83E\uDD86 icon _heart_.svg'
import Rectangle from '../../asset/image/Group 12.svg'
import Cart from '../../asset/image/\uD83E\uDD86 icon _cart_.svg'
import Line from '../../asset/image/Rectangle 11.svg'

const Header: React.FC = () => {
    return (
        <header className="header">
            <div>
                <nav className="menu">
                    <li><a className="home" href="www.google.com">DeamHome</a></li>
                    <li><a className="character" href="www.google.com">캐릭터</a></li>
                    <li><a className="animation" href="www.google.com">만화</a></li>
                    <li><a className="game" href="www.google.com">게임</a></li>
                    <li><a className="private_custom" href="www.google.com">개인 커스텀</a></li>
                    <li><a className="qna" href="www.google.com">문의</a></li>

                    <div className="icons">
                        <a className="rectangle" href="www.google.com">
                            <img src={Rectangle} alt="복사인가"/>
                        </a>
                        <img className="line" src={Line} alt="선"/>
                        <a className="heart" href="www.google.com">
                            <img src={Heart} alt="찜목록"/>
                        </a>
                        <img className="line" src={Line} alt="선"/>
                        <a className="cart" href="www.google.com">
                            <img src={Cart} alt="장바구니"/>
                        </a>
                    </div>
                    <a className="login" href="www.google.com">로그인</a>
                </nav>
            </div>
        </header>
    );
};

export default Header;
