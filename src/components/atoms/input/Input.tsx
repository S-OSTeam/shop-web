import React from 'react';
import { TextField, TextFieldProps } from '@mui/material';
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
// aria-label : 요소의 라벨을 문자열로 표현한단 뜻

/* multiline : 참일경우 TextareaAutosize 렌더링된다. */
// interface MyProps {
//     className?: string;
//     name: string;
//     rows?: string | number;
//     type?: React.HTMLInputTypeAttribute | undefined;
//     autoFocus?: boolean | undefined;
//     onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
//     placeholder?: string;
//     multiline?: boolean | undefined;
//     variant?: 'outlined' | 'filled' | 'standard';
//     value: string;
// }
/*
* <TextField/>는 내부적으로 Material UI의 다른 컴포넌트인 <InputLabel/>, <Input/>, <FormHelperText.tsx/> 등으로 구성되어 있는 고수준 컴포넌트입니다
*/
const InputComponent = ({ ...props }: TextFieldProps) => {

    return (
        <TextField
            variant={props.variant}
            label={props.label}
            className={props.className}
            name={props.name}
            rows={props.rows}
            type={props.type}
            autoFocus={props.autoFocus}
            onChange={props.onChange}
            placeholder={props.placeholder}
            multiline={props.multiline}
            value={props.value}
            defaultValue={props.defaultValue}
            fullWidth={props.fullWidth}
            helperText={props.helperText}
            required={props.required}
            color='primary'
        />
    );
};


InputComponent.prototype = {
    className: PropTypes.string,
    name: PropTypes.string,
    rows: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
    type: PropTypes.string,
    autoFocus: PropTypes.bool,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    multiline: PropTypes.bool,
    fullWidth: PropTypes.bool,
};
InputComponent.defaultProps = {
    rows: 1,
    autoFocus: false,
    multiline: false,
    variant: 'outlined',
    fullWidth: true,
};
export default InputComponent;