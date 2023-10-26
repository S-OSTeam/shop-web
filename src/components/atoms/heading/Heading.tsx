import React from 'react';
import {Typography, TypographyProps} from '@mui/material';
import PropTypes from 'prop-types';

// h1 컴포넌트
const HeadingComponent = ({ ...props }:TypographyProps)=>{
    return(
        <Typography
            variant={props.variant}
            className={props.className}
            title={props.title}
        >
            {props.children}
        </Typography>
    );
};
// 프로토타입 지정
HeadingComponent.prototype={
    size: PropTypes.string,
}

HeadingComponent.defaultProps = {
    disabled: false,
}

export default HeadingComponent;