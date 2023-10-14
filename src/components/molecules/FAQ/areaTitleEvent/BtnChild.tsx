/* eslint-disable */
import React, { forwardRef, useImperativeHandle } from 'react';
import { ParentProps } from '../../../organisms/faq/user/OrgFrameFaq';
import Button from '../../../atoms/button/Button';

// import Button from '../../../atoms/button/Button';


export const BtnChild = ({changeParentFunc}:ParentProps) =>{
    // changeParentFunc();
    return (
        <Button
            title='문의해보세요'
            className='faq-btn'
            variant='outlined'
            onClick={()=>{
                changeParentFunc();
            }}
        />
    );
}