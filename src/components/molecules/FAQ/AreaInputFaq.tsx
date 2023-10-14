import React from 'react';
import { InputComponent, myInputProps }  from './areaTitleContext/InputComponent';
import { HeadingTagComponent } from './areaTitleHeading/HeadingInputAreaComponent';

export interface MyFaqInputProps extends myInputProps {
    openCheck: boolean;
}

/*
* label 사용해서 input 감싸기
* */

export const AreaInputFaq = ({ ...props }: MyFaqInputProps) => {

    let component = null;
    if(props.openCheck){
        component = <>
            <HeadingTagComponent tagType='h3' summery='궁금하신 사항이 있나요?' className='primaryTitle' />
            <HeadingTagComponent tagType='h4' summery='빠르게 답변해 드리겠습니다' className='secondaryTitle' />
            <InputComponent
                primaryComponent={props.primaryComponent}
                secondaryComponent={props.secondaryComponent}
            />
        </>
    }
    return component;

};