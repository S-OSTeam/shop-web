/* eslint-disable */
import React from 'react';
import { Box } from '@mui/material';
import AsideNav from '@organisms/admin/asideNav/AsideNav';
import clsN from 'classnames';
import styles from './styles/Admin.module.scss';
import { NavigateItem, NavigateITF } from '@util/test/data/admin/navigate/Navigate';
import LinkBtn from '@molecules/link/Link';
import CollapsedList from '@molecules/collapsedList/CollapsedList';
import { Dashboard, Help, LocalShipping, Payment, Person, ShoppingBag } from '@mui/icons-material';

// 인터페이스 타입
interface AdminAsideListITF {
    // 컴포넌트 클래스명
    className?: string;
    // 네비게이션 클래스명
    navClsN?: string;
}

interface AdminTemplateProps {
}

const AdminTemplate = (
    {
        className,
        navClsN,
    }: AdminAsideListITF,
) => {
    // 상태
    const [toggle, setToggle] = React.useState<boolean[]>([]);
    // 복합 링크 콜랩스 클릭 이벤트
    const handleCollClick = (idx: number) => {
        // 불변성 유지를 위해 원본 복사
        const newToggleState = [...toggle];
        // 현재 인덱스(파라미터: number) 반전 처리
        newToggleState[idx] = !newToggleState[idx];
        // 상태 업데이트
        setToggle(newToggleState);
    };

    // 링크 생성기
    const LinkProvider = (item: NavigateITF, collIdx: number) => {
        // collapse 컴포넌트 전용 상태 상수
        const collState = toggle[collIdx];

        const { navigateId, route, title, depthItem } = item;
        // 단일 컴포넌트인지 정하기
        let isSingle = false;
        // title 에 따라 아이콘 처리
        /*
        * switch 문 버전
        const iconSelector = (name: string) => {
            switch (name){
                case 'Dashboard' : return <Dashboard/>;
                case 'Product': return <ShoppingBag/>;
                case 'Delivery': return <LocalShipping/>;
                case 'Order': return <Payment/>;
                case 'Clients': return <Person/>;
                case 'Inquiry': return <Help/>;
            }
        }
        */
        // 아이콘 셀렉터 매핑처리
        const iconSelector = (name: string) => {
            // Construct a type with a set of properties K of type T
            // 타입 T 의 K 속성들의 구조를 A 로 설정할 수 있음
            const iconMap: Record<string, React.ReactNode> = {
                Dashboard: <Dashboard />,
                Product: <ShoppingBag />,
                Delivery: <LocalShipping />,
                Order: <Payment />,
                Clients: <Person />,
                Inquiry: <Help />,
            };
            return iconMap[name] || null;
        };

        // collapse 클릭 이벤트 처리
        const onClickEvent = () => {
            handleCollClick(collIdx);
        };
        // 2차 체크
        const depthEle = depthItem?.map((item, idx) => {
            if (!item) {
                isSingle = true;
                return;
            }
            const { id, title, ref } = item;
            return (
                <div className={clsN(styles['inner__link'])}>
                    <LinkBtn className={clsN(styles['inner__link__button'])} href={ref}>
                        {title}
                    </LinkBtn>
                </div>
            );
        });
        // 아이콘 저장
        const iconProvider = iconSelector(title);

        // 첫번째 링크 영역 렌더
        // 단일 링크일 경우
        if (!depthEle) {
            return (
                <div className={clsN(styles['aside-nav__linker'])}>
                    <LinkBtn className={clsN(styles['aside-nav__linker__button'])} href={route}>
                        {iconProvider}
                        {title}
                    </LinkBtn>
                </div>
            );
        }
        // 여러 아이템이 있는 경우 콜랩스로
        if (depthEle) {
            return (
                <CollapsedList
                    className={clsN(styles['aside-nav__linker'], styles['aside-nav__linker__common'])}
                    primaryClsN={clsN(styles['aside-nav__linker__button'], styles['aside-nav__linker__common'])}
                    listIconClsN={clsN(styles['aside-nav__linker__icon'], styles['aside-nav__linker__common'])}
                    onClick={onClickEvent}
                    isOpen={collState}
                    listIcon={iconProvider}
                    primary={title}
                    innerChildren={<Box component='div' className={clsN(styles['inner'])}>{depthEle}</Box>}
                />
            );
        }
    };
    // 랜더 결과영역
    return (
        <Box component='div' className={clsN(styles.wrapper)}>
            <AsideNav
                className={clsN(styles['aside-nav'])}
                listWrapperClsN={clsN(styles['linker'])}
                items={NavigateItem}
                itemFactor={
                    (item: NavigateITF, index: number) => LinkProvider(item, index)
                }
            />
            <div>
                main container
            </div>
        </Box>
    );
};
export default AdminTemplate;
