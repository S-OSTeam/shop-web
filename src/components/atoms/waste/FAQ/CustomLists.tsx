/*eslint-disable*/
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
    const isOpen =false;
    return (
        <ListItemButton
            onClick={onClick}
            className={props.className}>
            <CustomListItemIcon className='icon'>
                {
                    /*
                    ReactNode 로 인식하여 렌더
                    */
                }
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
