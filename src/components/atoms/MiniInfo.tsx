import React from 'react';
import '../../styles/MiniInfo.scss';
import classNames from 'classnames';

interface MiniInfoProps {
    info: string;
    size?: string;
}

const maxLength: number = 9;

const MiniInfo = ({ info, size }: MiniInfoProps) => {
    return (
        <div className={classNames('MiniInfoWrapper', size)}>
            {info.length > maxLength ? `${info.substring(0, maxLength)}...` : info}
        </div>
    );
};

MiniInfo.defaultProps = {
    size: 'small',
};
export default MiniInfo;
