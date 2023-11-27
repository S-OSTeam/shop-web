import React, { useState } from 'react';
import { Box, FormControl } from '@mui/material';
// import Text from '../../../atoms/contents/Text';
import HelperText from '../../../atoms/helperText/FormHelperText';
import InputField from '../../../molecules/input/InputContext';

/* 상태 */
// input 상태
//
// const [inputs, setInputs] = useState({
//     title: '',
//     context: '',
// });
// // 비구조화 할당 접근
// const { title, context } = inputs;
// // 인풋 기본값 세팅
// const Input_0: DefaultInputProps = {
//     htmlForOrName: 'faq-input-title',
//     ph: '제목을 입력하세요',
//     value: inputs.title,  // 이 부분이 문제임 정의되지않앗다고 뜸 이걸 따로 전달하기
//     labelContext: '제목',
//     isRow: false,
//     required: true,
// };
// const Input_1: DefaultInputProps = {
//     htmlForOrName: 'faq-input-context',
//     ph: '내용을 입력하세요',
//     value: inputs.context,
//     labelContext: '문의 내용',
//     isRow: true,
//     rows: 4,
//     required: true,
// };



export const OrgInputForm = () => {
    
    const [inputs, setInputs] = useState({
        inputTitle: '',
        inputContext: '',
    });

    // 비구조화 할당 하기
    const {inputTitle, inputContext} = inputs;

    /* methods */
    // 인풋 입력 이벤트
    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setInputs({
            ...inputs,
            [name]: value,
        });
        // eslint-disable-next-line
        console.log(e);
        // eslint-disable-next-line
        console.log(e.target);
        // eslint-disable-next-line
        console.log(name, value);
        // htmlForOrName 영역으로 선택되서 꼬임
    };
    
    return (
        <Box
            className='faq-page-title'
            component='fieldset'
            sx={{
                border: 'none',
                height: 'auto',
            }}
        >
            <FormControl
                className='faq-input-wrapper'
                sx={{
                    display: 'block'
                }}
            >
                <InputField
                    inputClassName='input-title'
                    labelContext='제목'
                    htmlForOrName='inputTitle'
                    ph='제목을 입력하세요'
                    value={inputTitle}
                    defaultValue=''
                    type='text'
                    onChange={handleOnChange}
                    fullWidth
                    required
                />
                <HelperText
                    defaultText=''
                    requiredText='제목은 필수영역 입니다.' />
            </FormControl>
            <FormControl
                className='faq-input-wrapper'
                sx={{
                    display: 'block'
                }}
            >
                <InputField
                    inputClassName='input-title'
                    labelContext='내용'
                    htmlForOrName='inputContext'
                    ph='내용을 입력하세요'
                    value={inputContext}
                    type='text'
                    defaultValue=''
                    multiline
                    rows={4}
                    maxRows={4}
                    onChange={handleOnChange}
                    fullWidth
                    required
                />
                <HelperText
                    defaultText=''
                    requiredText='내용은 필수영역 입니다.' />
            </FormControl>

        </Box>
    );
};