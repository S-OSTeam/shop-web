import React from 'react';
import { Chip, ChipProps } from '@mui/material';
import PropTypes from 'prop-types';

interface AtomProps extends ChipProps {
    className?: string; // scss를 적용시키기 위한 class이름
    label: string; // chip component에 글씨를 보여주기 위한 라벨
    onClick?: ChipProps['onClick']; // onClick 버튼
    onDelete?: ChipProps['onDelete']; // default값이거 Icon을 입력받으면 우측에 x버튼이나 아이콘을 제어
    variant?: ChipProps['variant']; // color 속성 값으로 화면을 Chip component를 채우거나 혹은 안채우고 아웃라인만 유지하는지 설정
    avatar?: ChipProps['avatar']; // 속성 값을 입력 받으면 좌측에 아이콘 처럼 이미지가 표출
    color?: ChipProps['color']; // 상황에 맞는 속성값을 받는다.
}

const ChipComponent = ({ className, label, onClick, onDelete, variant, avatar, color }: AtomProps) => {
    return (
        <Chip
            className={className}
            label={label}
            onClick={onClick}
            onDelete={onDelete}
            variant={variant}
            avatar={avatar}
            color={color}
        />
    );
};

ChipComponent.PropsType = {
    className: PropTypes.string,
    label: PropTypes.string,
    onClick: PropTypes.func,
    onDelete: PropTypes.func,
    variant: PropTypes.oneOf(['filled', 'outlined']),
    avatar: PropTypes.oneOf(['none', 'letter', 'img']),
    color: PropTypes.oneOf(['default', 'primary', 'secondary', 'error', 'info', 'success', 'warning']),
};

ChipComponent.defaultProps = {
    className: '',
    onClick: () => {},
    onDelete: () => {},
    variant: 'outlined',
    avatar: 'none',
    color: 'default',
};

export default ChipComponent;
