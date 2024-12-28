import React from 'react';
import { Stack } from '@mui/material';
import Button from '@atoms/button/Button';
import Text from '@atoms/text/Text';

interface QuantityControlProps {
    quantity: number;
    onIncrease: () => void;
    onDecrease: () => void;
    className?: string;
}

const QuantityControlButton = ({ quantity, onIncrease, onDecrease, className }: QuantityControlProps) => {
    return (
        <Stack direction="row" spacing={1} alignItems="center" className={className}>
            <Button variant="outlined" size="small" onClick={onDecrease} disabled={quantity <= 1}>
                -
            </Button>
            <Text text={quantity.toString()} variant="body1" />
            <Button variant="outlined" size="small" onClick={onIncrease}>
                +
            </Button>
        </Stack>
    );
};

export default QuantityControlButton;
