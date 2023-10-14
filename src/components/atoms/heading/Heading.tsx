import React from 'react';
import {Typography, TypographyProps} from '@mui/material';
import PropTypes from 'prop-types';

export interface MyHeadingProps{

}
// h1 컴포넌트
const HeadingComponent = ({ ...props }:TypographyProps)=>{
    return(
        <Typography
            variant={props.variant}
            className={props.className}
            title={props.title}
        >
            {props.title}
        </Typography>
    );
};
// 프로토타입 지정
HeadingComponent.prototype={
    title: PropTypes.string,
    size: PropTypes.string,
}

HeadingComponent.defaultProps = {
    disabled: false,
}

export default HeadingComponent;