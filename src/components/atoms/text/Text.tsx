import React from 'react';
import PropTypes from 'prop-types';
import { Typography, TypographyProps } from '@mui/material';
import classNames from 'classnames';

interface AtomProps extends TypographyProps {
    text: string | undefined;
    className?: string;
    variant?: TypographyProps['variant']; // PropTypes에 있는 속성들로 글자 속성 변경
    align?: TypographyProps['align']; // 글자 정렬 속성
    onClick?: TypographyProps['onClick'];
    onMouseOver?: TypographyProps['onMouseOver'];
}

const Text = ({ text, className, variant, align, onClick, onMouseOver }: AtomProps) => {
    return variant ? (
        <Typography
            className={classNames(className)}
            variant={variant}
            align={align}
            onClick={onClick}
            onMouseOver={onMouseOver}
        >
            {text}
        </Typography>
    ) : (
        <span className={classNames(className)} aria-hidden="true" onClick={onClick}>
            {text}
        </span>
    );
};

// 프로토타입 지정 prototype, PropType
Text.propTypes = {
    text: PropTypes.string,
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
    className: ``,
    variant: 'body1',
    align: 'inherit',
    onClick: undefined,
    onMouseOver: undefined,
};
export default Text;
