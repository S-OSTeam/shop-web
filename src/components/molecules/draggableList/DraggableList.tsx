import React from 'react';
import {
    closestCorners,
    DndContext,
    DragEndEvent,
    DragStartEvent,
    KeyboardSensor,
    PointerSensor,
    useSensor,
    useSensors,
} from '@dnd-kit/core';
import {
    arrayMove,
    horizontalListSortingStrategy,
    SortableContext,
    sortableKeyboardCoordinates,
} from '@dnd-kit/sortable';
import { Box } from '@mui/material';
import { SortableItem } from '@atoms/sortableItem/SortableItem';

export interface DraggableItmes {
    id: string;
    content: React.ReactNode;
}

interface DraggableListProps {
    items: DraggableItmes[];
}

export const DraggableList = ({ ...props }: DraggableListProps) => {
    // active ID state
    const [activeId, setActiveId] = React.useState<string | null>(null);
    // sorted Item Lists
    const [dragItems, setDragItems] = React.useState<DraggableItmes[]>(props.items);

    // useSensors for input : keybord and mouse sensors
    const sensors = useSensors(
        useSensor(PointerSensor), // enable to mouse drag
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        }), // enable to keyboard drag
    );

    // when drag event starts
    const handleDragStart = (e: DragStartEvent) => {
        // find actived id and set State
        setActiveId(e.active.id.toString());
    };

    // when drag event ends
    const handleDragEnd = (e: DragEndEvent) => {
        // get object atrributes from e
        const { active, over } = e;

        if (over && active.id !== over.id) {
            setDragItems((items) => {
                // drag start point is old index
                const oldIndex = items.findIndex((item) => item.id === activeId);
                // now drag end point is new index
                const newIndex = items.findIndex((item) => item.id === over.id);

                // arrange item list
                return arrayMove(items, oldIndex, newIndex);
            });

            // id is currently not active
            setActiveId(null);
        }
    };

    return (
        <DndContext
            sensors={sensors}
            collisionDetection={closestCorners}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
        >
            <SortableContext items={dragItems} strategy={horizontalListSortingStrategy}>
                <Box display="flex" flexDirection="row" gap={1} padding={1}>
                    {dragItems.map((item) => (
                        <SortableItem
                            key={item.id}
                            id={item.id}
                            content={item.content}
                            isActive={item.id === activeId}
                        />
                    ))}
                </Box>
            </SortableContext>
        </DndContext>
    );
};
