import React from 'react';
import { Button, ButtonProps } from '@mui/material';
// yarn add classnames : className 성능 최적화
// eslint-disable-next-line
// import cn from 'classnames';
import PropTypes from "prop-types";

/*
* Mui Custom -> Theme : https://velog.io/@gyutato/MUI-MUI를-통한-디자인-시스템-구조-뜯어보기
* */

// sx props
// 컴포넌트 스타일링

// 버튼 컴포넌트 (param: pros 버튼 관련 속성)
const ButtonComponent = ({ ...props }: ButtonProps) => {

    return (
        <Button
            variant={props.variant}
            className={props.className}
            disabled={props.disabled}
            onClick={props.onClick}
            size={props.size}
            title={props.title}
            ref={props.ref}
        >
            {props.title}
        </Button>
    );
};
// 프로토타입 지정 자바스크립트에서 객체를 생성할때 원형이 되는 객체를 만드는거임
// PropTypes : prop-type
ButtonComponent.prototype = {
    title: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
    size: PropTypes.string,
};

ButtonComponent.defaultProps ={
    disabled: false,
}
export default ButtonComponent;