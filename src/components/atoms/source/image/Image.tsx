import React from 'react';
import PropTypes from 'prop-types';
import clsN from 'classnames';
import style from './style/Image.module.scss';

interface ImgProps {
    imgPath: string;
    className?: string;
    alt?: string;
}

const Image = ({ imgPath, className, alt }: ImgProps) => {
    return (
        <img
            className={clsN(className, `${style.img}`)}
            src={require(`../../../../asset/image/${imgPath}`)}
            alt={alt}
        />
    );
};

Image.propTypes = {
    imgPath: PropTypes.string.isRequired,
    className: PropTypes.string,
    alt: PropTypes.string,
};

Image.defaultProps = {
    className: `${style.img}`,
    alt: '이미지가 존재하지 않습니다.',
};

export default Image;
