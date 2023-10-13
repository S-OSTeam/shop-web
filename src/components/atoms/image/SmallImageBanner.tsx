import React, { MouseEvent } from 'react';
import '../../../styles/scss/_banner.scss';
import classNames from 'classnames';
import { Button } from '@mui/material';

interface SmallImageBannerProps {
    img: string;
    size?: string;
    onMouseOver?: (event: MouseEvent<HTMLButtonElement>) => void;
}

const SmallImageBanner = ({ img, size, onMouseOver }: SmallImageBannerProps) => {
    return (
        <Button className={classNames('bannerButton')} onMouseOver={onMouseOver}>
            <img className={classNames(size)} src={require(`../../../asset/images/${img}`)} alt="이미지가 없습니다." />
        </Button>
    );
};
SmallImageBanner.defaultProps = { size: undefined };
export default SmallImageBanner;
