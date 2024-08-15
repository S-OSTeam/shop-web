import React from 'react';
import { Masonry as MuiMasonry } from '@mui/lab';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Image from '@atoms/source/image/Image';
import PropTypes, { string } from 'prop-types';
import clsN from 'classnames';
import { ItemInterface } from '@util/test/interface/Item';
import styles from './styles/Masonry.module.scss';

interface MasonryProps {
    className?: string;
    columns?: number;
    spacing?: number;
    heights: number[];
    images: string[];
    items: ItemInterface[];
    imgClsN?: string;
    onClick?: (item: ItemInterface) => void;
}

const Masonry = ({ ...props }: MasonryProps) => {
    const heightData = props.heights;

    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(0.5),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    return (
        <MuiMasonry className={clsN(props.className, styles.masonry)} columns={props.columns} spacing={props.spacing}>
            {heightData.map((height, index) => (
                // eslint-disable-next-line react/no-array-index-key
                <Item key={index} sx={{ height }} onClick={() => props.onClick && props.onClick(props.items[index])}>
                    <Image className={clsN(props.imgClsN)} imgPath={props.images[index]} />
                </Item>
            ))}
        </MuiMasonry>
    );
};

Masonry.propTypes = {
    className: PropTypes.string,
    columns: PropTypes.number,
    spacing: PropTypes.number,
    images: PropTypes.arrayOf(string),
    imgClsN: PropTypes.string,
};

Masonry.defaultProps = {
    className: styles[''],
    columns: 3,
    spacing: 0,
    imgClsN: styles[''],
    images: [''],
    onClick: undefined,
};

export default Masonry;
