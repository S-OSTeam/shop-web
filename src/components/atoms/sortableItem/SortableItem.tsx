/* eslint-disable */
import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
// utilities for CSS animation
import { CSS } from '@dnd-kit/utilities';
import { Box } from '@mui/material';
import clsN from 'classnames';
import styles from './style/SortableItem.module.scss';

interface SortableItemProps {
    id: string;
    content: React.ReactNode;
    isActive: boolean;
    className?: string;
}

export const SortableItem = ({ id, content, isActive }: SortableItemProps) => {
    const {
        attributes,
        listeners,
        setNodeRef, // Element Reference
        transform, // for element position moves
        transition, // for smooth animation
    } = useSortable({ id });

    const style = {
        transform: CSS.Transform.toString(transform), // when Drag start elemet's position changes
        transition, // when Drag end animation end as smoothely
    };

    return (
        <Box
            ref={setNodeRef}
            style={style}
            className={clsN({
                [styles['sortable-item']]: !isActive,
                [styles['sortable-item--is-active']]: isActive,
            })}
            {...attributes}
            {...listeners}
        >
            {content}
        </Box>
    );
};
