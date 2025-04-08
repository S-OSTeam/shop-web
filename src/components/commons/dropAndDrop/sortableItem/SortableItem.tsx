import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Box } from '@mui/material';
import clsN from 'classnames';
import styles from './styles/SortableItem.module.scss';
import type { Disabled } from '@dnd-kit/sortable/dist/types';
import type { UniqueIdentifier } from '@dnd-kit/core/dist/types';

interface SortableItemProps {
    // uniqueIdentifier type : string | number
    id: UniqueIdentifier;
    children: React.ReactNode;
    className?: string;
    draggingClassName?: string;
    disabled?: boolean | Disabled;
}

export const SortableItem = ({ id, children, className, draggingClassName, disabled }: SortableItemProps) => {
    const { attributes, listeners, setNodeRef, transform, transition, isDragging, setActivatorNodeRef } = useSortable({
        id,
        disabled,
    });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
        opacity: isDragging ? 0.5 : 1,
        zIndex: isDragging ? 1 : 'auto',
        position: 'relative' as const,
        touchAction: 'none',
    };
    // inject CSS(dnd-Kit) style for "transform", "transition"

    // return JSX Element
    return (
        <Box
            component="div"
            className={clsN(className, isDragging && `${styles.dragging} ${draggingClassName}`)}
            ref={(node: HTMLElement | null) => {
                setNodeRef(node);
                setActivatorNodeRef(node);
            }}
            style={style}
            {...attributes}
            {...listeners}
            data-handle
        >
            {children}
        </Box>
    );
};

SortableItem.defaultProps = {
    className: clsN(styles.box),
};
