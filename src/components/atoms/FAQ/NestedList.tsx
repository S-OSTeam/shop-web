/*eslint-disable*/
import React, { MouseEventHandler, ReactElement, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { Collapse, List, ListItemButton, ListItemIcon, ListItemText, ListSubheader, makeStyles } from '@mui/material';
import { ExpandLess, ExpandMore, StarBorder, QuestionMark, FiberManualRecord } from '@mui/icons-material';
import { atomFaqItem, faqListState } from '../../../recoil/atoms/FaqItemList';
import '../../../styles/scss/FaqListStyles.scss';

// 폴더 디자인 리스트 컴포넌트
/* eslint-disable */
export const NestedList = () => {
    /* 리코일 */
    const faqItem = useRecoilValue<atomFaqItem[]>(faqListState);
    /* 상태 */
    // 폴더 on off 체크
    const [open, setOpen] = useState(false);

    /*
    * 어떤 버튼이 눌렸는지 알아야함
    * */

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <List
            component='ul'
            sx={{ bgcolor: 'inherit' }}
            aria-labelledby='nested-list-subheader'
            className='faq-area-list-parent'
        >
            {
                faqItem.map((item:atomFaqItem)=>{
                    const {...props} = item;
                    return(
                        <List
                            component='li'
                            className='faq-area-list'
                        >
                            <ListItemButton
                                onClick={handleClick}
                                key={item.faq_id}
                                className='title'>
                                <ListItemIcon className='icon'>
                                    <QuestionMark fontSize={'small'}/>
                                </ListItemIcon>
                                <ListItemText primary={item.faq_title} className='text' />
                                {open ? <ExpandLess />: <ExpandMore/>}
                            </ListItemButton>
                            <Collapse in={open} timeout='auto' unmountOnExit className='context'>
                                <ListItemButton sx={{pl: 4}}>
                                    <ListItemText primary={item.faq_content} className='text' />
                                </ListItemButton>
                            </Collapse>
                        </List>
                    );
                })
            }
        </List>
    );
};