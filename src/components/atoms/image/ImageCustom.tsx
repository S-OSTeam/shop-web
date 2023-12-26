import React from 'react';
import '../../../styles/scss/_banner.scss';
import classNames from 'classnames';

interface ImageCustomProps {
    img: string;
    size?: string;
    alt?: string;
}

const ImageCustom = ({ img, size, alt }: ImageCustomProps) => {
    return <img className={classNames(size)} src={require(`../../../asset/images/${img}`)} alt={alt} />;
};
ImageCustom.prototype = {};
ImageCustom.defaultProps = { size: undefined, alt: '이미지가 없습니다.' };
export default ImageCustom;
