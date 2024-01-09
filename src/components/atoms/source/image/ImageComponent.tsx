import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

interface ImgProps {
    img: string;
    className?: string;
    alt?: string;
}

const ImageComponent = ({ img, className, alt }: ImgProps) => {
    return <img className={classNames(className)} src={require(`../../../../asset/image/${img}`)} alt={alt} />;
};

ImageComponent.propsType = {
    img: PropTypes.string,
    className: PropTypes.string,
    alt: PropTypes.string,
};

ImageComponent.defaultProps = {
    className: ``,
    alt: '이미지가 존재하지 않습니다.',
};

export default ImageComponent;
