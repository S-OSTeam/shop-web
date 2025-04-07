import React from 'react';
import { useDraggable } from '@dnd-kit/core';
import { Button } from '@mui/material';
import clsN from 'classnames';
import styles from './styles/Draggable.module.scss';

interface DraggableProps {
    // content
    children: React.ReactNode;
    // important
    id: string;
    // button Click Event
    onClick?: () => void;
}
export const Draggable = ({ ...props }: DraggableProps) => {
    /* use Button component for Draggable
     * why ? button's basically can interact and focus with keyboard
     * role = "button" it's means good at optimizing for screen reader
     * Button compoenet has basic event example "click", "tab"
     * Button compoenet are clickable element (UX) and have cursor : pointer
     */

    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id: props.id,
    });

    const style = transform
        ? {
              transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
          }
        : undefined;

    return (
        <Button
            ref={setNodeRef} // element Referece
            className={clsN(styles.draggable)} // className
            style={style} // add transform style
            {...listeners} // add draggable event listerners
            {...attributes} // add draggable attributes
            onClick={props.onClick}
        >
            {props.children}
        </Button>
    );
};
