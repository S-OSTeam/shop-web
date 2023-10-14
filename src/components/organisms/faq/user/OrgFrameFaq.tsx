/* eslint-disable */
import React, { ChangeEvent, useRef, useState } from 'react';
import { AreaInputFaq } from '../../../molecules/FAQ/AreaInputFaq';
import { AreaTitleFaq } from '../../../molecules/FAQ/AreaFromFaq';
import { BtnChild } from '../../../molecules/FAQ/areaTitleEvent/BtnChild';

export interface ParentProps {
    changeParentFunc: ()=> void;
}

export const OrgFrameFaq = () => {
    /* 상태 */
    const [inputs, setInputs] = useState({
        primaryValue : '',
        secondaryValue: '',
    });
    const {primaryValue, secondaryValue} = inputs;
    // 토글
    const [isOpen, setIsOpen] = useState<boolean>(false);


    /* 메서드 */
    const handleOnChange = (e:ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setInputs({
            ...inputs,
            [name]: value
        });
    };

    /* 버튼 누르면 펼쳐지는 메서드 만들기 */
    const changeParentFunc = () => {
        setIsOpen(!isOpen);
        console.log(isOpen);
    }
    const childBtnEvent = ()=>{
    }

    return(
        <>
            <AreaTitleFaq />
            <BtnChild changeParentFunc={changeParentFunc} />
            <AreaInputFaq
                openCheck={isOpen}
                primaryComponent={
                    {
                        placeholder: '제목 입력란',
                        id: 'Faq_Title_Input',
                        className: 'faq-title-input',
                        value: primaryValue, // state 쓰기
                        onChange: handleOnChange, // onChange 쓰기
                        'aria-label': 'Input-Label',
                        multiline: false,
                    }
                }
                secondaryComponent={
                    {
                        placeholder: '내용을 입력해 주세요',
                        id: 'Faq_Context_Input',
                        className: 'faq-context-input',
                        value: secondaryValue,
                        onChange: handleOnChange,
                        'aria-label': 'Input-Label',
                        multiline: true,
                        rows: 4,
                    }
                }
            />
        </>
    );
}