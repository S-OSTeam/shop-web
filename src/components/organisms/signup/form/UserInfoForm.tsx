import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { Box, Divider, FormControl, Radio, RadioGroup, TextField } from '@mui/material';
import clsN from 'classnames';
import style from './style/style.module.scss';

interface UserInfoFormProps {
    onSubmit: (data: { name: string; birthDay: string; sex: boolean }) => void;
}

const UserInfoForm = ({ onSubmit }: UserInfoFormProps) => {
    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            name: '',
            birthDay: '',
            sex: true,
        },
    });

    return (
        <Box component="form" onSubmit={handleSubmit(onSubmit)} className={clsN(`${style['authentication-wrapper']}`)}>
            <Box className={clsN(`${style['authentication-wrapper__box']}`)}>
                <Controller
                    name="name"
                    control={control}
                    rules={{
                        required: '이름을 입력해주세요.',
                        pattern: {
                            value: /^[a-zA-Z가-힣]*$/,
                            message: '이름은 영어, 한글만 허용됩니다.',
                        },
                    }}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="성 함"
                            className={clsN(`${style['authentication-wrapper__name']}`)}
                            InputLabelProps={{ shrink: true }}
                            placeholder="홍 길 동"
                            error={!!errors.name}
                            helperText={errors.name?.message}
                            inputProps={{ maxLength: 50 }}
                        />
                    )}
                />

                <Controller
                    name="birthDay"
                    control={control}
                    rules={{
                        required: '생년월일을 입력해주세요.',
                        pattern: {
                            value: /^\d{4}-\d{2}-\d{2}$/,
                            message: '생년월일을 올바른 형식으로 입력해주세요. (예: 1900-01-01)',
                        },
                    }}
                    render={({ field }) => (
                        <TextField
                            {...field}
                            label="생년월일"
                            className={clsN(`${style['authentication-wrapper__birth']}`)}
                            InputLabelProps={{ shrink: true }}
                            placeholder="1900-01-01"
                            error={!!errors.birthDay}
                            helperText={errors.birthDay?.message}
                            inputProps={{ maxLength: 10 }}
                        />
                    )}
                />
            </Box>

            <Box className={clsN(`${style['gender-wrapper']}`)}>
                <Divider className={clsN(`${style['gender-wrapper__divider']}`)} variant="middle" textAlign="left">
                    성별
                </Divider>
                <FormControl className={clsN(`${style['gender-wrapper__form-control']}`)}>
                    <Controller
                        name="sex"
                        control={control}
                        render={({ field }) => (
                            <RadioGroup {...field} className={clsN(`${style['gender-wrapper__radio-group']}`)}>
                                <Radio value="true" aria-label="Male" /> 남성
                                <Radio value="false" aria-label="Female" /> 여성
                            </RadioGroup>
                        )}
                    />
                </FormControl>
            </Box>
        </Box>
    );
};

export default UserInfoForm;
