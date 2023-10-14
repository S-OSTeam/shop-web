/*eslint-disable*/
import React, { ReactNode, useState } from 'react';
import {
    CustomCollapse,
    CustomListItemBtn,
    CustomListItemIcon,
    CustomListItemText,
    ItemComponent_Li,
} from '../../../atoms/FAQ/CustomLists';
import { QuestionMark } from '@mui/icons-material';
import { useRecoilValue } from 'recoil';
import { atomFaqItem, faqListState } from '../../../../recoil/atoms/FaqItemList';

interface MyBtnProps {
    title: string;

}

export const FaqItemListComponent = () => {
    const faqItem = useRecoilValue<atomFaqItem[]>(faqListState);

    return (

        faqItem.map((item: atomFaqItem) => {
            const { ...props } = item;
            const [isOpen,setIsOpen] = useState<boolean>(false);
            return (
                <>
                    <ItemComponent_Li
                        component='li'
                        className='faq-area-list-parent'
                        aria-labelledby='nested-list-subheader'
                    >
                    </ItemComponent_Li>
                    <CustomListItemBtn className='title' />
                    <CustomCollapse >

                    </CustomCollapse>
                </>
            );
        })

    );
};