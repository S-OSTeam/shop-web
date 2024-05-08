import React from 'react';
import { ReactComponent as NaverIcon } from '@asset/image/icons/NaverIcon.svg';
import { ReactComponent as GoogleIcon } from '@asset/image/icons/GoogleIcon.svg';
import { ReactComponent as KakaoIcon } from '@asset/image/icons/KakaoIcon.svg';

interface IconProps {
    name: string;
    className?: string;
}

const CustomIcon = ({ name, className }: IconProps) => {
    let svgContent = null;
    switch (name) {
        case 'naver':
            svgContent = <NaverIcon className={className} />;
            break;
        case 'kakao':
            svgContent = <KakaoIcon className={className} />;
            break;
        case 'google':
            svgContent = <GoogleIcon className={className} />;
            break;

        default:
            svgContent = null;
            break;
    }
    return svgContent;
};

export default CustomIcon;
