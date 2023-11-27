import React from 'react';
import { Box } from '@mui/material';
import clsN from 'classnames';
import CurrCont from '../../../organisms/faq/admin/AdminQna/currCont/currCont';
import QnaData from '../../../../util/Storage/QnaData';
import styles from './styles/QnaAdmin.module.scss';

export const QnaAdminTemplate = () => {

// 제너릭 활용해보기
    return (
        <Box component='main' className={clsN(`${styles.main}`)}>
            <Box component='section' className={clsN(`${styles.sectionFirst}`)}>
                <CurrCont props={QnaData} />
                <section className={clsN(`${styles.simpleTable}`)} />
            </Box>
        </Box>
    );
};