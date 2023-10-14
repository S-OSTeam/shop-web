import React from 'react';
import CheckBoxComponent from '../../../atoms/checkBox/CheckBox';
import { FormGroupCustom } from '../../formGroup/FormGroupCustom';
import { ContentFormControlLabel } from '../../formControlLabel/ContentFormControlLabel';

interface MyProps {
    checked: boolean,
    onChange: ()=>void,
    name: string,
    label: string,
}

/*
* ContentFormControlLabel 컴포넌트가 곧 컨텐츠임
* */
export const CustomFormGroup = ({...props}: MyProps) => {
    return(
        <FormGroupCustom >
            <ContentFormControlLabel
                control={
                    <CheckBoxComponent
                        checked={props.checked}
                        onChange={props.onChange}
                        name={props.name}
                    />
                }
                label={props.label}
            />

        </FormGroupCustom>
    )
}