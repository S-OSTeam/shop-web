import React from 'react';
import PropTypes from 'prop-types';

export interface MyTextComponentProps{
    text: string | undefined;
    className?: string;
}

// text 원자 단위 컴포넌트
// 배열일때 arr.join('') 등으로 처리하도록 하기
// 조건 색상 크기 클래스 등등

const ContentTextComponent = ({...props}:MyTextComponentProps)=>{
    return (
        <span className={props.className}>{props.text}</span>
    );
}
// 프로토타입 지정 prototype, PropType
ContentTextComponent.prototype = {
    text: PropTypes.string,
    className: PropTypes.string,
};
ContentTextComponent.defaultProps ={
    className: '',
};
export default ContentTextComponent;