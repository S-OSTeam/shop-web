/* eslint-disable */
import React from 'react';
import { Stack as MuiStack, StackProps as MuiStackProps } from '@mui/material';
import PropTypes from 'prop-types';
import clsN from 'classnames';
import style from './style/stack.module.scss';

interface StackProps extends MuiStackProps{
    children?: React.ReactNode;
    component: MuiStackProps['component'];
    direction: MuiStackProps['direction'];
    divider: MuiStackProps['divider'];
    spacing?: string|number,
    className?: string,
    useFlexGap: MuiStackProps['useFlexGap']
}

const Stack = (
    {
        children,
        component,
        direction,
        divider,
        spacing,
        className,
        useFlexGap
    }:StackProps
) => {


    return(
        <MuiStack className={clsN(className, `${style.stack}`)}>
            {children}
        </MuiStack>
    )
}
export default Stack;