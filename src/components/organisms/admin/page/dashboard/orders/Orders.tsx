import React from 'react';
import Text from '@atoms/text/Text';
import DashboardItem from '@molecules/admin/layout/dashboardItem/DashboardItem';
import { CurrencyExchange,LocalShipping, PlaylistAddCheck, ShoppingCartCheckout,
} from '@mui/icons-material';
import { Stack } from '@mui/material';
import { sectionStateITF, storeState } from '@util/test/data/admin/dashboard/DashboardData';
import clsN from 'classnames';
import styles from './styles/Order.module.scss';

/*
interface OrdersProps {

}
*/

const Orders = (

) => {

    /* 상태 */

    // GQL로 데이터 받았다 가정


    /* 함수 */

    // 아이템 생성
    const componentRender = (
        storeState.map((item) => {
            const {
                title,
                count,
                sectionItems,
                categoryType
            } = item;
            // 아이콘 매핑 컴포넌트 처리
            const iconSelector = (name: string) => {
                const iconMap: Record<string, React.ReactNode> = {
                    newOrders: <ShoppingCartCheckout className={clsN(styles.icon)}/>,
                    checkedOrders: <PlaylistAddCheck className={clsN(styles.icon)}/>,
                    delivering: <LocalShipping className={clsN(styles.icon)}/>,
                    refund: <CurrencyExchange className={clsN(styles.icon)}/>,
                }
                return iconMap[name] || null;
            }

            return (
                <DashboardItem
                    className={clsN(styles.root__widget)}
                    itemName={title}
                    iconClsN={clsN(styles['root__widget__icon-place'])}
                    icon={iconSelector(categoryType)}
                    count={count}
                    countEffectClsN={styles['root__widget__state-color']}
                    moreHorizItems={sectionItems}
                    renderItems={(sectionItem: sectionStateITF,) => (
                        <Stack direction='row' gap={1} className={clsN(styles['more-horiz'])} justifyContent='space-between'>
                            <Text text={`${sectionItem.subtitle}`} className={clsN()}/>
                            <Text text={`${sectionItem.count}`} className={clsN()}/>
                        </Stack>)
                    }
                />
            );
        })
);

    /* 렌더 */
    return (
        <Stack direction='row' className={clsN(styles.root)} gap={1}>
            {componentRender}
        </Stack>
    );
};
export default Orders;