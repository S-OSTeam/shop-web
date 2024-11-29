import React from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    useTheme,
    useMediaQuery,
    Container,
} from '@mui/material';
import CheckBox from '@atoms/checkBox/CheckBox';
import QuantityControlButton from '@molecules/button/quantityButton/quantityControlButton';
import Button from '@atoms/button/Button';
import clsN from 'classnames';
import styles from './styles/CartTabel.module.scss';

interface CartTableProps {
    items: Array<{
        id: string;
        name: string;
        price: number;
        quantity: number;
        checked: boolean;
    }>;
    selectAll: boolean;
    onSelectAll: (checked: boolean) => void;
    onItemCheck: (id: string, checked: boolean) => void;
    onQuantityChange: (id: string, quantity: number) => void;
    onCouponClick: (id: string) => void;
}

const CartTable = ({ items, selectAll, onSelectAll, onItemCheck, onQuantityChange, onCouponClick }: CartTableProps) => {
    const theme = useTheme();

    const isMobile = useMediaQuery(theme.breakpoints.down(768));

    const handleSelectAllChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onSelectAll(event.target.checked);
    };

    return (
        <Container sx={{ mt: 4, mb: 4 }}>
            <TableContainer component={Paper} className={styles.tableContainer}>
                <Table
                    className={clsN(styles.table, {
                        [styles.mobile]: isMobile,
                        [styles.desktop]: !isMobile,
                    })}
                >
                    <TableHead>
                        <TableRow>
                            <TableCell padding="checkbox" className={styles.checkboxCell}>
                                <CheckBox name="select-all" checked={selectAll} onChange={handleSelectAllChange} />
                            </TableCell>
                            <TableCell className={styles.productNameColumn}>상품명</TableCell>
                            <TableCell align="center" className={styles.quantityColumn}>
                                수량
                            </TableCell>
                            <TableCell align="right" className={styles.priceColumn}>
                                가격
                            </TableCell>
                            <TableCell align="center" className={styles.couponColumn}>
                                쿠폰
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {items.length === 0 ? (
                            <TableRow className={styles.emptyRow}>
                                <TableCell colSpan={5} align="center">
                                    장바구니가 비어있습니다.
                                </TableCell>
                            </TableRow>
                        ) : (
                            items.map((item) => (
                                <TableRow key={item.id} className={styles.tableRow}>
                                    <TableCell padding="checkbox">
                                        <CheckBox
                                            name={`item-${item.id}`}
                                            checked={item.checked}
                                            onChange={(e) => onItemCheck(item.id, e.target.checked)}
                                        />
                                    </TableCell>
                                    <TableCell className={styles.productNameCell}>{item.name}</TableCell>
                                    <TableCell align="center">
                                        <QuantityControlButton
                                            quantity={item.quantity}
                                            onIncrease={() => onQuantityChange(item.id, item.quantity + 1)}
                                            onDecrease={() => onQuantityChange(item.id, item.quantity - 1)}
                                        />
                                    </TableCell>
                                    <TableCell align="right">{item.price.toLocaleString()}원</TableCell>
                                    <TableCell align="center">
                                        <Button
                                            variant="outlined"
                                            size={isMobile ? 'small' : 'medium'}
                                            onClick={() => onCouponClick(item.id)}
                                        >
                                            쿠폰
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    );
};

export default CartTable;
