import { Transform } from '@dnd-kit/utilities';
import type { Active, DragEndEvent } from '@dnd-kit/core';

export interface ModifierArgs {
    transform: Transform;
    acrive: Active;
    dragOveray?: boolean;
    event?: DragEndEvent;
}
