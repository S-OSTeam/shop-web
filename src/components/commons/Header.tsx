import React from 'react';
import styled from 'styled-components';

const Header = () => {
    const Positioner = styled.div`
        display: flex;
        flex-direction: column;
        position: sticky;
        top: 0;
        width: 100%;
        box-shadow: 0 0 8px 0 rgba(0, 0, 0, 0.4);
    `;
    const Background = styled.div`
        background: #80a1d4;
        display: flex;
        justify-content: center;
        height: auto;
    `;
    const HeaderContents = styled.div`
        width: 100%;
        height: 65px;
        display: flex;
        flex-direction: row;
        align-items: center;
        padding-right: 30px;
        padding-left: 30px;
    `;
    const Logo = styled.div`
        font-size: 24px;
        letter-spacing: 2px;
        color: #ffffff;
        margin-left: auto;
        margin-right: auto;
    `;

    return (
        <header>
            <Positioner>
                <Background>
                    <HeaderContents>
                        <Logo>Dream</Logo>
                    </HeaderContents>
                </Background>
            </Positioner>
        </header>
    );
};

export default Header;
