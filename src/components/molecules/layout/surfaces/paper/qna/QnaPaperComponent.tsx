import React from 'react';
import { Paper, PaperProps } from '@mui/material';
import Chip from '@atoms/chip/Chip';
import Text from '@atoms/text/Text';
import PropTypes from 'prop-types';
import clsN from 'classnames';
import style from './style/QnaPaperComponent.module.scss';

interface QnaPaperComponentProps extends PaperProps{
    // 감싸는 메인 클래스명
    WrapperClassName?: string;
    // Paper Component 외형
    variant?: PaperProps['variant'];
    // border-radius 설정
    square?: PaperProps['square'];
    // onClick 이벤트
    onClick?:  React.MouseEventHandler<HTMLDivElement> | undefined;
    // 아이콘 chip 클래스명
    iconClassName?: string;
    // 아이콘 요소
    icon: React.ReactElement;
    // 아이콘 라벨
    iconLabel: React.ReactNode;
    // title
    title: string;
    // title className
    titleClsN?: string;
}

const QnaPaperComponent = (
    {
        WrapperClassName,
        variant,
        square,
        onClick,
        iconClassName,
        icon,
        iconLabel,
        title,
        titleClsN,
    }:QnaPaperComponentProps) => {
    return(
        <Paper className={clsN(WrapperClassName, `${style.mainWrapper}`)} variant={variant} square={square} onClick={onClick}>
            <Text text={title} className={clsN(titleClsN, `${style.text_element}`)}/>
            <Chip icon={icon} label={iconLabel} className={clsN(iconClassName, `${style.icon_clsN}`)}/>
        </Paper>
    )
}
QnaPaperComponent.propTypes = {
    WrapperClassName: PropTypes.string,
    variant: PropTypes.oneOf(["elevation", "outlined", undefined]),
    square: PropTypes.bool,
    onClick: PropTypes.func.isRequired,
    iconClassName:PropTypes.string,
    icon:PropTypes.element.isRequired,
    iconLabel: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
    titleClsN: PropTypes.string,
}
QnaPaperComponent.defaultProps = {
    WrapperClassName: `${style.mainWrapper}`,
    variant: 'elevation',
    square: false,
    titleClsN: `${style.text_element}`,
    iconClassName: `${style.icon_clsN}`,
}
export default QnaPaperComponent;