import React from 'react';
import classNames from 'classnames';

interface ImageCustomProps {
    img: string;
    size?: string;
    alt: string;
}

const ImageCustom = ({ img, size, alt }: ImageCustomProps) => {
    return <img className={classNames(size)} src={require(`../../../asset/images/${img}`)} alt={alt} />;
};
ImageCustom.defaultProps = { size: undefined };
export default ImageCustom;
