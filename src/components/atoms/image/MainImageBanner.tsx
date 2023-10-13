import React from 'react';
import '../../../styles/scss/_banner.scss';
import classNames from 'classnames';

interface MainImageBannerProps {
    img: string;
    size?: string;
}

const MainImageBanner = ({ img, size }: MainImageBannerProps) => {
    return <img className={classNames(size)} src={require(`../../../asset/images/${img}`)} alt="이미지가 없습니다." />;
};
MainImageBanner.defaultProps = { size: undefined };
export default MainImageBanner;
