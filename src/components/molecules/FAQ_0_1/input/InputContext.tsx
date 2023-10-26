import React from 'react';
import PropTypes, { number } from 'prop-types';
import Input from '../../../atoms/input/Input';

/*
* 라벨 + 인풋
*  */

interface MyParentProps {
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    htmlForOrName: string;
    defaultValue: string;
    labelContext?: string;
    value: string;
    ph?: string;
    required?: boolean;
    for?: string;
    type: string;
    fullWidth: boolean;
    labelClassName?: string;
    inputClassName?: string;
    helperText?: React.ReactNode;
    error?: boolean;
    multiline?: boolean;
    rows?: number;
    maxRows?: number;
}

/*
* mui input 주의점
* htmlfor 과 input:name 속성이 지정이 되어 있을 경우 인풋 엘리먼트 이벤트가 해당 이름으로 변함
* 고로 htmlfor도 state와 같이 사용
* */

const InputContext = ({ ...props }: MyParentProps) => {
    return (
            <Input
                name={props.htmlForOrName}
                onChange={props.onChange}
                className={props.inputClassName}
                label={props.labelContext}
                multiline={props.multiline}
                rows={props.rows}
                maxRows={props.maxRows}
                placeholder={props.ph}
                defaultValue={props.value}
                value={props.value}
                type={props.type}
                fullWidth={props.fullWidth}
                helperText={props.helperText}
                error={props.error}
                required={props.required}
            />
    );
};

InputContext.prototype = {
    name: PropTypes.string,
    onChange: PropTypes.func,
    required: PropTypes.bool,
    maxRows: PropTypes.number,
};
InputContext.defaultProps = {
    for: '',
    required: false,
    ph: '',
    rows: false,
    labelClassName: '',
    inputClassName: '',
    labelContext: '',
    helperText: '',
    multiline: false,
    error: false,
    maxRows: number,
};

export default InputContext;
