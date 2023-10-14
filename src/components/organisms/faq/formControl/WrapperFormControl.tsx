import React from 'react';
import MyFormLabel from '../../../molecules/formLabel/FormLabel';
import { FormControl } from '@mui/material';
import { CustomFormGroup } from '../../../molecules/FAQ/areaAlertCheck/CustomFormGroup';
import { ContentFormControlLabel } from '../../../molecules/formControlLabel/ContentFormControlLabel';

const WrapperFromControl = () => {
    return (
        <FormControl
            component={'fieldset'}
            variant={'standard'}
        >
            <MyFormLabel component={'fieldset'} >알림 설정</MyFormLabel>


        </FormControl>
    );
}


// <CustomFormGroup
//     name={}
// />