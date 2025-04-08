/* eslint-disable */
import React from 'react';
import { Box, Button, IconButton, Paper } from '@mui/material';
import {
    closestCenter,
    DndContext,
    DragEndEvent,
    KeyboardSensor,
    Modifier,
    MouseSensor,
    PointerSensor,
    TouchSensor,
    useSensor,
    useSensors,
} from '@dnd-kit/core';
import { arrayMove, rectSortingStrategy, SortableContext, sortableKeyboardCoordinates } from '@dnd-kit/sortable';
import { Draggable } from '@commons/dropAndDrop/draggable/Draggable';
import { Droppable } from '@commons/dropAndDrop/droppable/Droppable';
import { useRecoilState } from 'recoil';
import { productRegisterAtom } from '@recoil/atoms/admin/product/register/ProductRegisterAtom';
import { ImageBox } from '@molecules/imageBox/ImageBox';
import { AddToPhotos, DisabledByDefaultRounded } from '@mui/icons-material';
import { SortableItem } from '@commons/dropAndDrop/sortableItem/SortableItem';
import clsN from 'classnames';
import styles from './styles/ImageBoxManager.module.scss';
import { ActionIcon } from '@molecules/actionIcon/ActionIcon';

export const ImageBoxManager = () => {
    // recoil Product State
    const [productData, setProductData] = useRecoilState(productRegisterAtom);

    // Dnd-Kit draggable check
    const [isDraggable, setIsDraggable] = React.useState(false);

    // sortable Items : Additional image : 5
    const [sortableItems, setSortableItems] = React.useState(
        // _ : unused value : underScore, from 0 ... index + 1
        // mapfc : i + 1 ... i++
        Array.from({ length: 5 }, (_, i) => i + 1), // 1,2,3,4,5
    );
    // file input ref
    const fileInputRef = React.useRef<(HTMLInputElement | null)[]>([]);

    // sensor for pointer and keyboard
    const sensors = useSensors(
        useSensor(MouseSensor, {
            activationConstraint: {
                // drag start min distance
                distance: 8,
                delay: 100,
                tolerance: 5,
            },
        }),
        useSensor(TouchSensor, {
            activationConstraint: {
                delay: 250,
                tolerance: 5,
            },
        }),
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        }),
    );

    // image alt context
    const imageAlt = '추가 이미지';

    // Event

    // image sort mode state
    const handleDragModeToggle = () => {
        setIsDraggable((prev) => !prev);
    };

    // imageItemsChangeEvent
    const handleItemImageChange = (id: string) => {
        // from ref activate input change event
        fileInputRef.current[Number(id)]?.click();
    };

    // imageItemsRemoveEvent
    const handleItemImageRemove = (id: string) => {
        setProductData((prev) => {
            const newImageUrls = [...(prev.imageUrls || [])];
            // index 0 : thumbnail
            newImageUrls[Number(id) + 1] = '';
            return {
                ...prev,
                imageUrls: newImageUrls,
            };
        });
    };

    // Drag Event
    const handleDragEnd = (e: DragEndEvent) => {
        const { active, over } = e;

        if (over && active.id !== over.id) {
            setSortableItems((items) => {
                const oldIndex = items.indexOf(Number(active.id));

                const newIndex = items.indexOf(Number(over.id));

                return arrayMove(items, oldIndex, newIndex);
            });
        }
    };

    // JSX Element

    // element for action icon
    const actionIconGen = (id: number | string) => {
        return (
            <div className={clsN(styles['extra-imagebox__bar'])}>
                {/* file input area */}
                <ActionIcon
                    accept="file"
                    className={clsN(styles['extra-image__input'])}
                    inputRef={
                        /* ref CallBack fcn : when A React before Create or Delete Current DOM Element and CallBack Function
                         * param (el) : when element are mounted : conveys Actual DOM NODE(HTMLInputElement), when element unMounted : conveys "null"
                         * fileInputRef.current[...] = el :
                         * - fileInputRef : created by useRef, shape are Array ref Object
                         * - .current: pointed current ref Value(this sequence is Array)
                         * - [...] : save the DOM Element into Index, so can be access later easly
                         * - why using like this disaster? : becuase when Access like Hidden input elements by programming ways
                         * can handle multiple file Input element as Array
                         * */
                        (el) => (fileInputRef.current[Number(id)] = el)
                    }
                    onImageLoad={(imageUrl) => {
                        /* when imageUrl's exist */
                        setProductData((prev) => {
                            const newImageUrls = [...(prev.imageUrls || [])];
                            // index + 1, index + 0 is thumbnail
                            newImageUrls[Number(id) + 1] = imageUrl;
                            return {
                                ...prev,
                                imageUrls: newImageUrls,
                            };
                        });
                    }}
                />

                <IconButton
                    onClick={(event) => {
                        event.stopPropagation();
                        event.preventDefault();
                        handleItemImageChange(id.toString());
                    }}
                >
                    <AddToPhotos />
                </IconButton>
                <IconButton
                    onClick={(event) => {
                        event.stopPropagation();
                        event.preventDefault();
                        handleItemImageRemove(id.toString());
                    }}
                >
                    <DisabledByDefaultRounded />
                </IconButton>
            </div>
        );
    };

    // Draggable Element
    const draggableMarkup = <Draggable id="draggable1">Drage Me</Draggable>;

    // extra image upload handler
    const extraImageUpload = (index: number) => {};

    // Generate Droppable Element
    const GenerateDroppable = (elementSize: number, defaultContent: React.ReactNode) => {
        Array.from([elementSize], () => {
            return <Droppable>{defaultContent}</Droppable>;
        });
    };

    // Generate Draggable Element

    return (
        <Paper className={clsN(styles.dndpaper)} elevation={0}>
            <Box component="div" className={clsN(styles.sortablewrapper)}>
                <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
                    <SortableContext items={sortableItems} strategy={rectSortingStrategy}>
                        {sortableItems.map((id) => (
                            <SortableItem className={clsN(styles.sortablebox)} key={id} id={id} disabled={!isDraggable}>
                                <ImageBox
                                    titleBarClsN={clsN(styles.imagebox__bar__title)}
                                    classes={{
                                        imageBox: clsN(styles.imagebox, isDraggable && styles['imagebox-jiggle']),
                                        imageBoxImg: clsN(styles.imagebox__img, 'handle'),
                                        iamgeBoxBar: clsN(styles.imagebox__bar),
                                    }}
                                    src={productData.imageUrls?.[id + 1]}
                                    alt={imageAlt}
                                    onImageClick={() => {}}
                                    position="bottom"
                                    actionIcon={actionIconGen(id)}
                                />
                            </SortableItem>
                        ))}
                    </SortableContext>
                </DndContext>
            </Box>
            <Button variant="contained" className={clsN(styles['toggle-button'])} onClick={handleDragModeToggle}>
                {!isDraggable ? 'Drag On' : 'Drag Off'}
            </Button>
        </Paper>
    );
};
