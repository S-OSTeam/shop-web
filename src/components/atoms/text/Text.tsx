import React from 'react';
import PropTypes from 'prop-types';
import { Typography, TypographyProps } from '@mui/material';
import clsN from 'classnames';
import style from './style/text.module.scss';

export interface TextProps extends TypographyProps {
    text: string;
    className?: string;
    variant?: TypographyProps['variant']; // PropTypes에 있는 속성들로 글자 속성 변경
    align?: TypographyProps['align']; // 글자 정렬 속성
    onClick?: TypographyProps['onClick'];
    onMouseOver?: TypographyProps['onMouseOver'];
}

const Text = ({ text, className, variant, align, onClick, onMouseOver }: TextProps) => {
    return variant ? (
        <Typography
            className={clsN(className, `${style.text}`)}
            variant={variant}
            align={align}
            onClick={onClick}
            onMouseOver={onMouseOver}
        >
            {text}
        </Typography>
    ) : (
        <> {text}</>
    );
};

// 프로토타입 지정 prototype, PropType
Text.propTypes = {
    text: PropTypes.string.isRequired,
    className: PropTypes.string,
    variant: PropTypes.oneOf([
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'subtitle1',
        'subtitle2',
        'body1',
        'body2',
        'caption',
        'button',
        'overline',
    ]),
    align: PropTypes.oneOf(['inherit', 'left', 'center', 'right', 'justify']),
    onClick: PropTypes.func,
    onMouseOver: PropTypes.func,
};

// Props 초기 셋팅
Text.defaultProps = {
    className: `${style.text}`,
    variant: 'body1',
    align: 'inherit',
    onClick: undefined,
    onMouseOver: undefined,
};
export default Text;
