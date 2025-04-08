/* eslint-disable */
import React from 'react';
import { ProductLayerInterface } from '@interface/layer/ProductLayerInterface';
import { Divider, Paper, Stack } from '@mui/material';
import { Heading } from '@molecules/admin/layout/heading/Heading';
import { ImageBoxManager } from '@organisms/imageBoxManager/ImageBoxManager';
import { ThumbnailManager } from '@organisms/admin/thumbnailManager/ThumbnailManager';
import clsN from 'classnames';
import styles from './styles/ProductImage.module.scss';
import { useRecoilState } from 'recoil';
import { productRegisterAtom } from '@recoil/atoms/admin/product/register/ProductRegisterAtom';
import { DndContext } from '@dnd-kit/core';
import { Draggable } from '@commons/dropAndDrop/draggable/Draggable';
import { Droppable } from '@commons/dropAndDrop/droppable/Droppable';

interface ProductImageProps extends ProductLayerInterface {}

export const ProductImage = ({ className, parentHeadlineCleN, sectionHeadlineClsN }: ProductImageProps) => {
    // 전역 상태 관리 리코일
    const [productData, setProductData] = useRecoilState(productRegisterAtom);

    // 썸네일 이미지 변경 이벤트
    const handleThumbnailImageChange = (value: string) => {
        // modifiy imageUrl of index[0]
        setProductData((prev) => {
            if (!prev.imageUrls) {
                // empty images case
                return {
                    ...prev,
                    imageUrls: [value] as [string],
                };
            }

            // previous ImageUrls
            const newImageUrlStorage = [...prev.imageUrls];
            newImageUrlStorage[0] = value;

            return {
                // has image[0] case
                ...prev,
                imageUrls: newImageUrlStorage as [string],
            };
        });
    };

    // thumbnail image remove event
    const handleThumbnailImageRemove = () => {
        setProductData((prev) => {
            if (!prev.imageUrls) {
                // empty image case
                return {
                    ...prev,
                };
            }

            const previousImages = [...prev.imageUrls];
            // set index 0 of image into ''
            previousImages[0] = '';

            return {
                // has imageUrl[0] case
                ...prev,
                imageUrls: previousImages as [string],
            };
        });
    };

    return (
        <Paper className={clsN(className)}>
            <Heading heading="이미지" headingClsN={clsN(parentHeadlineCleN)} />
            <Divider />
            <Heading heading="대표 이미지" headingClsN={sectionHeadlineClsN} />
            <Stack gap={2}>
                <ThumbnailManager
                    imageBoxProps={{
                        classes: {
                            imageBox: clsN(styles.imagebox),
                            imageBoxImg: clsN(),
                            iamgeBoxBar: clsN(),
                        },
                        src: productData.imageUrls?.[0], // optional channing
                        alt: '상품 대표 이미지',
                    }}
                    changeImage={handleThumbnailImageChange}
                    removeImage={handleThumbnailImageRemove}
                />
            </Stack>
            <Heading heading="추가 이미지" headingClsN={sectionHeadlineClsN} />
            <Stack gap={2}>
                <ImageBoxManager />
            </Stack>
        </Paper>
    );
};
