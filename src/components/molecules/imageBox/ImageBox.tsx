import React from 'react';
import { ImageListItem, ImageListItemBar } from '@mui/material';
import { ImageBoxPropsInterface } from '@interface/image/ImageInterface';
import clsN from 'classnames';
import styles from './styles/ImageBox.module.scss';

interface ImageBoxProps extends ImageBoxPropsInterface {
    actionIcon?: React.ReactNode;
    position?: 'bottom' | 'top' | 'below';
    actionPosition?: 'left' | 'right';
    titleBarClsN?: string;
}

export const ImageBox = ({ ...props }: ImageBoxProps) => {
    return (
        <ImageListItem
            key={props.src}
            className={clsN(props.classes?.imageBox, styles.imagebox)}
            onClick={props.onImageClick}
        >
            <img
                className={clsN(
                    props.classes?.imageBoxImg,
                    props.src ? styles.imagebox__img : styles['imagebox__img-invisible'],
                )}
                alt={props.alt}
                src={props.src}
                loading="lazy"
            />
            <ImageListItemBar
                classes={{
                    titleWrap: props.titleBarClsN,
                }}
                position={props.position}
                actionPosition={props.actionPosition}
                className={clsN(props.classes?.iamgeBoxBar, styles.imagebox__bar)}
                actionIcon={props.actionIcon}
            />
        </ImageListItem>
    );
};
