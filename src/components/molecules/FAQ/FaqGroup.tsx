/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { Typography } from '@mui/material';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { atomFaqItem, faqListState } from '../../../recoil/atoms/FaqItemList';
import { FaqItem } from './FaqItem';

interface FaqGroupProps {
    data: any;
}

export const FaqGroup = () => {

    const faqItem = useRecoilValue<atomFaqItem[]>(faqListState);

    return(
        <>
            <Typography variant={'h3'}>문의내역</Typography>
            {
                faqItem.map((fItem: atomFaqItem) => {
                    const {...props
                    } = fItem;
                    return(
                        <>
                            <FaqItem
                                key = {props.faq_id}
                                faq_id={props.faq_id}
                                fgr_id={props.fgr_id}
                                faq_title={props.faq_title}
                                faq_content={props.faq_content}
                                faq_datetime={props.faq_datetime}
                                faq_ip={props.faq_ip}
                                faq_is_private={props.faq_is_private}
                                faq_alert_sns={props.faq_alert_sns}
                                faq_alert_mail={props.faq_alert_mail} />
                        </>
                    );
                })
            }

        </>
    );
};

/*
faqItem.map((items: atomFaqItem) => {
            const {
                ...props
            } = items;
            return();

        })


            <ListItemButton onClick={handleClick}>
                <ListItemIcon>
                    <InboxRounded />
                </ListItemIcon>
                <ListItemText primary="제목" />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout='auto' unmountOnExit>
                <ListItemButton sx={{pl: 4}}>
                    <ListItemIcon>
                        <StarBorder/>
                    </ListItemIcon>
                    <ListItemText primary="Starred" />
                </ListItemButton>
            </Collapse>

* */