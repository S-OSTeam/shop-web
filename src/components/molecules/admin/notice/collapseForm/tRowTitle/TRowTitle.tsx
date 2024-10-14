import React from 'react';
import { Stack } from '@mui/material';
import Text from '@atoms/text/Text';
import { MoreVert } from '@mui/icons-material';
import { PopoverButton } from '@molecules/button/popoverButton/PopoverButton';
import clsN from 'classnames';
import styles from './styles/TRowTitle.module.scss';

interface TRowTitleProps {
    title: string;
    tRowClassNames: {
        stackClsN?: string;
        titleClsN?: string;
        IconClsN?: string;
    };
    uid: string;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    onClose: () => void;
    popstate: boolean;
    innerContent?: React.ReactNode;
}

export const TRowTitleArea = ({ ...props }: TRowTitleProps) => {
    const { stackClsN, titleClsN } = props.tRowClassNames;

    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(e.currentTarget);
        props.onClick(e);
    };
    const handleClose = () => {
        setAnchorEl(null);
        props.onClose();
    };

    return (
        <Stack key={props.uid} direction="row" className={stackClsN} alignItems="center">
            <Text text={props.title} className={titleClsN} />
            <PopoverButton
                buttonProps={{
                    isIconButton: true,
                    iconButtonProps: {
                        className: clsN(styles['popover-button__icon']),
                    },
                    children: <MoreVert />,
                    className: clsN(styles['popover-button__icon']),
                    onClick: handleClick,
                }}
                popoverProps={{
                    anchorEl,
                    open: props.popstate,
                    classes: { root: '', paper: '' },
                    anchorOrigin: { horizontal: 'right', vertical: 'bottom' },
                    onClose: handleClose,
                    children: props.innerContent,
                }}
            />
        </Stack>
    );
};
