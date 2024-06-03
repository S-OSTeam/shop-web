import React from 'react';
import { Box } from '@mui/material';
import { Heading } from '@molecules/admin/layout/heading/Heading';
import clsN from 'classnames';
import styles from './styles/OrdersState.module.scss';

export const OrdersState = () => {

    /* 상태 */

    /* JSX 컴포넌트 */
    // 헤딩
    const headline = <Heading className={clsN(styles['headline-block'])} heading="상품 현황" headingClsN={clsN(styles['headline-block__heading'])}/>

    /* 함수 */

    return(
        <Box>
            {headline}
        </Box>
    );
}