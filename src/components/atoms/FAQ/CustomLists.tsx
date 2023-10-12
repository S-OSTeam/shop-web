import React, {
    Children,
    ComponentType,
    MouseEventHandler,
    ReactChildren,
    ReactElement,
    ReactNode,
    useState,
} from 'react';
import {
    Collapse,
    CollapseProps,
    Icon,
    IconProps,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText, ListProps,
} from '@mui/material';
import { ExpandLess, ExpandMore, QuestionMark } from '@mui/icons-material';
import { IconTypeMap } from '@mui/material/Icon/Icon';
import { OverridableComponent } from '@mui/material/OverridableComponent';

/*
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

*/
interface MyCustomListItemBtnProps extends React.ColHTMLAttributes<HTMLElement>{}


export const ItemComponent_Li = (
    {...props} : ListProps,
    component:ComponentType) => {
    /*
    * li
    * */
    return (
        <List
            component = {component}
            className={props.className}
            aria-labelledby={props['aria-labelledby']}
        >
            {props.children}
        </List>
    );
};

interface MyCustomBtnProps {
    onClick: ()=> void;
}

export const CustomListItemBtn = (
    {...props}:React.LiHTMLAttributes<HTMLButtonElement>, { onClick }:MyCustomBtnProps) => {
    return (
        <ListItemButton
            onClick={onClick}
            className={props.className}>
            <CustomListItemIcon className='icon'>
                <QuestionMark fontSize='small'/>
            </CustomListItemIcon>
            {isOpen ? <ExpandLess/> : <ExpandMore/>}
        </ListItemButton>
    );
};

export const CustomListItemIcon = ({children}: React.SVGAttributes<HTMLOrSVGImageElement>) => {

    return (
        <ListItemIcon>
            {children}
        </ListItemIcon>
    );
};

export interface MyListItemText {
    itemContext: string;
    itemClass: string;
}
export const CustomListItemText = ({...props}:MyListItemText) => {
    return (
        <ListItemText
            primary={props.itemContext} className={props.itemClass} />
    );
};
export const CustomCollapse = ({...props}: CollapseProps) => {
    return(
        <Collapse in={props.in} timeout={'auto'} unmountOnExit className={props.className} >
            {props.children}
        </Collapse>
    );
}
