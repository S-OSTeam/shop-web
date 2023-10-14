import React from 'react';
import classNames from 'classnames';
import '../../styles/BannerInfo.scss';

interface BannerInfoProps {
    des: string;
    name: string;
}

const BannerInfo = ({ des, name }: BannerInfoProps) => {
    return (
        <div className={classNames('bannerInfo')}>
            <div className={classNames('bannerDescription')}>
                <p>{des}</p>
            </div>
            <div className={classNames('bannerItemName')}>
                <p>{name}</p>
            </div>
        </div>
    );
};
export default BannerInfo;
