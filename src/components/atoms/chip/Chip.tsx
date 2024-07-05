import React from 'react';
import { Chip as MuiChip, ChipProps as MuiChipProps } from '@mui/material';
import clsN from 'classnames';
import style from './style/Chip.module.scss';

interface ChipProps extends MuiChipProps {
    className?: string; // scss를 적용시키기 위한 class이름
    label: React.ReactNode; // chip component에 글씨를 보여주기 위한 라벨
    onClick?: MuiChipProps['onClick']; // onClick 버튼
    onDelete?: MuiChipProps['onDelete']; // default값이거 Icon을 입력받으면 우측에 x버튼이나 아이콘을 제어
    variant?: MuiChipProps['variant']; // color 속성 값으로 화면을 Chip component를 채우거나 혹은 안채우고 아웃라인만 유지하는지 설정
    avatar?: MuiChipProps['avatar']; // 속성 값을 입력 받으면 좌측에 아이콘 처럼 이미지가 표출
    color?: MuiChipProps['color']; // 상황에 맞는 속성값을 받는다.
}

const Chip = ({ className, label, onClick, onDelete, variant, avatar, color }: ChipProps) => {
    return (
        <MuiChip
            className={clsN(className, `${style.chip}`)}
            label={label}
            onClick={onClick}
            onDelete={onDelete}
            variant={variant}
            avatar={avatar}
            color={color}
        />
    );
};

export default Chip;
