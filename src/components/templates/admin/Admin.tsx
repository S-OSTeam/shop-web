/* eslint-disable */
import React from 'react';
import { Box } from '@mui/material';
import AsideNav from '@organisms/admin/asideNav/AsideNav';
import clsN from 'classnames';
import styles from './styles/Admin.module.scss';

// 인터페이스 타입
interface AdminAsideListITF {}

interface AdminTemplateProps {}
const AdminTemplate = ({}: AdminTemplateProps) => {
    return (
        <Box component="div" className={clsN(styles.wrapper)}>
            {/*<AsideNav
                className={clsN(styles['aside-nav'])}
                listClsN={clsN()}
                items={}
                itemFactor={(item: AdminAsideListITF, index: number) => <ul></ul>}
            />*/}
        </Box>
    );
};
export default AdminTemplate;
