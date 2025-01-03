import React from 'react';
import { Box, Button } from '@mui/material';
import Text from '@atoms/text/Text';
import styles from './styles/ProductDetail.module.scss';

interface ProductDetailProps {
    // 상품 등록 상태
    state: boolean;
    // 상품 클릭 이벤트
    onClick: () => void;
}

export const ProductDetail = ({ ...props }: ProductDetailProps) => {
    const [context, setContext] = React.useState<string>('');
    React.useEffect(() => {
        if (props.state) {
            setContext('작성된 상세 설명이 존재합니다.');
        }
        if (!props.state) {
            setContext('상세 설명이 존재하지 않습니다.');
        }
    }, [props.state]);
    return (
        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" gap={1}>
            <Text text={context} className={styles.text} />
            <Button className={styles.button} variant="contained" onClick={props.onClick}>
                {!props.state ? '작성하기' : '수정하기'}
            </Button>
        </Box>
    );
};
