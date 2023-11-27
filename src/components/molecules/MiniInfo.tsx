import React from 'react';
import '../../styles/MiniInfo.scss';
import classNames from 'classnames';
import TextCustom from '../atoms/text/TextCustom';

interface MiniInfoProps {
    info: string;
    size?: string;
}

const maxLength: number = 9;

const MiniInfo = ({ info, size }: MiniInfoProps) => {
    return (
        <div className={classNames('MiniInfoWrapper', size)}>
            <TextCustom
                className={size}
                content={info.length > maxLength ? `${info.substring(0, maxLength)}...` : info}
            />
        </div>
    );
};

MiniInfo.defaultProps = {
    size: undefined,
};
export default MiniInfo;
