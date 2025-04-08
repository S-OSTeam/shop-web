import React from 'react';
import { useDroppable } from '@dnd-kit/core';
import { Box } from '@mui/material';
import clsN from 'classnames';
import styles from './styles/Droppable.module.scss';

interface DroppableProps {
    children: React.ReactNode;
}

// for Draggable Item Landing Place
export const Droppable = ({ ...props }: DroppableProps) => {
    const { isOver, setNodeRef } = useDroppable({
        id: 'droppable',
    });

    const style = {
        color: isOver ? 'green' : undefined,
    };

    return (
        <Box
            ref={setNodeRef}
            className={clsN({
                [styles['droppable__is-over']]: isOver,
            })}
            style={style}
        >
            {props.children}
        </Box>
    );
};
