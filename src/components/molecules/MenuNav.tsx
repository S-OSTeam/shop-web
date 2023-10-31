import React from 'react';
import '../../styles/MenuNav.scss';
import classNames from 'classnames';
import CustomButton from '../atoms/button/CustomButton';
import CustomText from '../atoms/text/CustomText';

// 리스트 아이템의 타입
type liArrayType = Array<{
    text: string;
    link: string;
}>;

// children은 맨 위 마우스를 hover 할 컴포넌트를 받는다.
interface MenuNavProps {
    children: React.ReactNode;
    liArray: liArrayType;
}

// 마우스를 올렸을 때 메뉴가 보여지는 컴포넌트 리스트 아이템들은 무슨 내용으로 쓰일것인지,어디로 이동할 건지에 대한 정보를 갖는다.
const MenuNav = ({ children, liArray }: MenuNavProps) => {
    return (
        <nav className={classNames('headerMenuNav')}>
            <ul>
                {children}
                {liArray.map((value) => (
                    <li>
                        <CustomButton>
                            <CustomText content={value.text} />
                        </CustomButton>
                    </li>
                ))}
            </ul>
        </nav>
    );
};
export default MenuNav;
