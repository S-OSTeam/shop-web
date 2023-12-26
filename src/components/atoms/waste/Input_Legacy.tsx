import React from 'react';
import {TextField, TextFieldProps } from '@mui/material';
import PropTypes from 'prop-types';

// const useStyles = makeStyles((theme:Theme) => {
//     const x = theme.spacing(2);
//     const y = theme.spacing(1);
//     return {
//         root(props: InputProps) {
//             return{
//
//             }
//         }
//     }
// })

// export interface MyInputProps{
//     inputBaseProps?: InputBaseProps;
// }

const InputComponentLegacy = ({ ...props }:TextFieldProps)=>{
    return(
        <TextField
            label={props.label}
            className={props.className}
            name={props.name}
            rows={props.rows}
            type={props.type}
            autoFocus={props.autoFocus}
            onChange={props.onChange}
            placeholder={props.placeholder}
            aria-label={props['aria-label']}
            multiline={props.multiline}
        />
    )
}


InputComponentLegacy.prototype={
    id: PropTypes.string,
    className: PropTypes.string,
    label: PropTypes.string,
    name: PropTypes.string,
    fullWidth: PropTypes.bool,
    rows: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    autoFocus: PropTypes.bool,
    onChange: PropTypes.func,
};
InputComponentLegacy.defaultProps = {
    autoFocus: false,
}
export default InputComponentLegacy;