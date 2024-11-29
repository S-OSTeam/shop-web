import React from 'react';
import { Paper, Stack, Divider, Box } from '@mui/material';
import Text from '@atoms/text/Text';
import Button from '@atoms/button/Button';
import styles from './styles/Calculation.module.scss';

interface CalculationProps {
    totalPrice: number;
    discountAmount: number;
    finalAmount: number;
    onCheckout?: () => void;
}

const Calculation = ({ totalPrice, discountAmount, finalAmount, onCheckout }: CalculationProps) => {
    return (
        <Paper sx={{ p: 4, mt: 4 }}>
            <Stack spacing={2}>
                <Box className={styles.calculationRow}>
                    <Text text="총 상품 금액" variant="body1" />
                    <Text text={`${totalPrice.toLocaleString()} 원`} variant="body1" />
                </Box>

                <Box className={styles.calculationRow}>
                    <Text text="할인 금액" variant="body1" />
                    <Text
                        text={`${discountAmount.toLocaleString()} 원`}
                        variant="body1"
                        className={styles.discountAmount}
                    />
                </Box>

                <Divider />

                <Box className={styles.calculationRow}>
                    <Text text="최종 금액" variant="h6" />
                    <Text text={`${finalAmount.toLocaleString()}원`} variant="h6" className={styles.finalAmount} />
                </Box>

                <Button variant="contained" onClick={onCheckout} className={styles.checkoutButton}>
                    결제하기
                </Button>
            </Stack>
        </Paper>
    );
};

export default Calculation;
