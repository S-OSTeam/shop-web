import * as React from 'react';
import Box from '@mui/material/Box';
import Input from '@mui/material/Input';
import classNames from 'classnames';

const ariaLabel = { 'aria-label': 'description' };

interface InputProps {
    className?: string;
    type: string;
    value: string;
    placeholder?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputAtom: React.FC<InputProps> = ({ className,type, value, onChange ,placeholder}) => {
    return(
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 2,width:568},
                    textAlign :'center',

                }}
                noValidate
                autoComplete="off"
            >
                <Input inputProps={ariaLabel}  className={classNames(className)} type={type} value={value} onChange={onChange} placeholder={placeholder} />
            </Box>
        )
};
InputAtom.defaultProps = {
    className:undefined,
    placeholder: undefined,
};
export default InputAtom;