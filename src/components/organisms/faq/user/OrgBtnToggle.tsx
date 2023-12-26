import React from 'react';
import { useRecoilState } from 'recoil';
import { faqOrgState } from '../../../../recoil/atoms/FaqItemList';
import { ClickEventBtn } from '../../../molecules/button/ClickEvtBtn';

interface myProps{
    id: string;
}
export const OrgBtnToggle = ({...props}:myProps) => {
    const [isOpen, setIsOpen] = useRecoilState(faqOrgState);
    const handleOnClick = () => {
        setIsOpen(!isOpen);
    };
    return (
        <ClickEventBtn
            id={props.id}
            onClick={handleOnClick}
            text={
                isOpen ? '문의내역 작성 중...' : '문의하기'
            }
            molClassName='faq-btn false' />

    );
};