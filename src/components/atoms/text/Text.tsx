import React from 'react';
import PropTypes from 'prop-types';
import { Typography, TypographyProps } from '@mui/material';
import clsN from 'classnames';
import styles from './styles/Text.module.scss';

interface CustomTextProps {
    text: string | undefined;
    className?: string;
    variant?: TypographyProps['variant'];
    align?: TypographyProps['align'];
    onClick?: () => void;
}

// text 원자 단위 컴포넌트
// 배열일때 arr.join('') 등으로 처리하도록 하기
// 조건 색상 크기 클래스 등등

const CustomText = ({ ...props }: CustomTextProps) => {
    const { text, className, variant, align, onClick } = props;
    return variant ? (
        <Typography
            className={clsN(className, `${styles.defaultText}`)}
            variant={variant}
            align={align}
            onClick={onClick}
        >
            {text}
        </Typography>
    ) : (
        <span className={clsN(className, `${styles.defaultText}`)} aria-hidden="true" onClick={onClick}>
            {text}
        </span>
    );
};

// 프로토타입 지정 prototype, PropType
CustomText.propTypes = {
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
};
CustomText.defaultProps = {
    className: `${styles.defaultText}`,
    variant: null,
    align: 'inherit',
    onClick: () => {},
};
export default CustomText;
