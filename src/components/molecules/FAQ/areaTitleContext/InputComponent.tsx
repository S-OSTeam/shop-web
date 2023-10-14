import React, { ChangeEvent } from 'react';
import { Box } from '@mui/material';
import { InputEventComponent } from '../Input/models/baseInput/InputEventComponent';

/*
* 2가지 파생
* 제목 인풋, 내용 인풋
* */

interface myBaseInputProps {
    primaryComponent: {
        placeholder: string,
        id: string,
        className: string,
        value: string,
        onChange: (e:ChangeEvent<HTMLInputElement>)=>void,
        'aria-label': string,
        multiline: boolean,
    },
}
export interface myInputProps extends myBaseInputProps{
    secondaryComponent: {
        placeholder: string,
        id: string,
        className: string,
        value: string,
        onChange: (e:ChangeEvent<HTMLInputElement>)=>void,
        'aria-label': string,
        multiline: boolean,
        rows?: string | number | undefined,
    }
}

export const InputComponent = ({ ...props }: myInputProps) => {

    return (
        <Box>
            <InputEventComponent
                placeholder={props.primaryComponent.placeholder}
                id={props.secondaryComponent.id}
                className={props.primaryComponent.className}
                value={props.primaryComponent.value}
                onChange={props.primaryComponent.onChange}
                aria-label={props.primaryComponent['aria-label']}
                multiline={props.primaryComponent.multiline}
            />
            <InputEventComponent
                placeholder={props.secondaryComponent.placeholder}
                id={props.secondaryComponent.id}
                className={props.secondaryComponent.className}
                value={props.secondaryComponent.value}
                onChange={props.secondaryComponent.onChange}
                aria-label={props.secondaryComponent['aria-label']}
                multiline={props.secondaryComponent.multiline}
                rows={props.secondaryComponent.rows}
            />
        </Box>
    );
};
