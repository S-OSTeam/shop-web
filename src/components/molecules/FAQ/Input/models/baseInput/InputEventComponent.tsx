import React, { ChangeEvent } from 'react';
import InputComponent from '../../../../../atoms/input/Input';

export interface MyInputProps {
    placeholder: string;
    id: string;
    className: string;
    rows?: string | number | undefined;
    fullWidth?: boolean;
    autoFocus?: boolean;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    value: string;
    'aria-label': string,
    multiline: boolean,
    /* 인풋 상태가 한줄인지 아닌지 설정하기 */
}

export const InputEventComponent = ({ ...props }: MyInputProps) => {
    return (

        <InputComponent
            placeholder={props.placeholder}
            className={props.className}
            value={props.value}
            rows={props.rows}
            fullWidth={props.fullWidth}
            autoFocus={props.autoFocus}
            onChange={props.onChange}
            aria-label={props['aria-label']}
            multiline={props.multiline}
        />
    );
};