import React from 'react';
import {CardActions as MuiCardActions, CardActionsProps as MuiCardActionsProps} from '@mui/material';
import PropTypes from 'prop-types';
import clsN from 'classnames';
import style from './style/CardAction.module.scss';

interface CardActionProps extends MuiCardActionsProps{
    children: React.ReactNode;
    className?: string;
}
const CardAction = (
    {
        children,
        className
    }:CardActionProps) => {

    return(
        <MuiCardActions className={clsN(className, `${style.cardAction}`)}>
            {children}
        </MuiCardActions>
    );
}
CardAction.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
}
CardAction.defaultProps = {
    className: `${style.cardAction}`
}
export default CardAction;