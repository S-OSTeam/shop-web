import React from 'react';
import '../../styles/MiniInfo.scss';

interface MiniInfoProps {
    info: string;
}

const MiniInfo = ({ info }: MiniInfoProps) => {
    return <div className="MiniInfoWrapper">{info}</div>;
};
export default MiniInfo;
