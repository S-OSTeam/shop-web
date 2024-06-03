/* eslint-disable */
import React from 'react';
import { Box, Stack } from '@mui/material';
import { AsideNav } from '@organisms/admin/asideNav/AsideNav';
import clsN from 'classnames';
import styles from './styles/Admin.module.scss';
import { NavigateItem, NavigateITF } from '@util/test/data/admin/navigate/Navigate';
import LinkBtn from '@molecules/link/Link';
import CollapsedList from '@molecules/collapsedList/CollapsedList';
import { Dashboard, Help, LocalShipping, Payment, Person, ShoppingBag } from '@mui/icons-material';
import MainNav from '@organisms/admin/mainNav/MainNav';
import { useLocationHook } from '@hooks/useLocation.hook';

// 인터페이스 타입
interface AdminAsideListITF {
    // 컴포넌트 클래스명
    className?: string;
    // 네비게이션 클래스명
    navClsN?: string;
}

interface AdminTemplateProps {
    children: React.ReactNode;
}

const AdminTemplate = ({ children }: AdminTemplateProps) => {
    // 상태
    const [toggle, setToggle] = React.useState<boolean[]>([]);
    // 현재 선택된 네비 (메인 네비에 사용)
    /*
     * 현재 로케이션에 따른 링크 자료 넘기기
     * 첫번째 인덱스에 로케이션 일치 시 두번째 체크
     */
    const currentLocation = useLocationHook();
    const linkPathThrower = NavigateItem.map((item) => {
        const { depthItem, title } = item;
        // 문자 필터 체크하기 해당 url 과 depthItem 가져오기
    });

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
                <Box className={clsN(styles['aside-nav__linker'], styles['parent-list'])}>
                    <LinkBtn
                        className={clsN(styles['aside-nav__linker__button'], styles['font-color'], styles['btn-set'])}
                        href={route}
                    >
                        {iconProvider}
                        {title}
                    </LinkBtn>
                </Box>
            );
        }
        // 여러 아이템이 있는 경우 콜랩스로
        if (depthEle) {
            return (
                <CollapsedList
                    className={clsN(styles.collapse, styles['font-color'], styles['parent-list'])}
                    listBtnClsN={clsN(styles['collapse__button'], styles['btn-set'])}
                    listIconClsN={clsN(styles['collapse__button__icon'], styles['font-color'])}
                    listItemRootClsN={clsN(styles['collapse__primary'])}
                    primaryClsN={clsN(styles['collapse__primary__text'])}
                    collClsN={clsN(styles['collapse__coll'])}
                    collListClsN={clsN(styles['collapse__coll__list'])}
                    onClick={onClickEvent}
                    isOpen={collState}
                    listIcon={iconProvider}
                    primary={title}
                    innerChildren={
                        <Box component="div" className={clsN(styles['inner'])}>
                            {depthEle}
                        </Box>
                    }
                />
            );
        }
    };

    React.useEffect(() => {
        console.log(`currentLocation: ${currentLocation}`);
    }, [currentLocation]);
    // 랜더 결과영역
    return (
        <Box component="div" className={clsN(styles.wrapper)}>
            <AsideNav
                className={clsN(styles['aside-nav'])}
                listWrapperClsN={clsN(styles['linker'])}
                items={NavigateItem}
                itemFactor={(item: NavigateITF, index: number) => LinkProvider(item, index)}
                hoverClsN={clsN(styles['parent-list--animate'])}
            />
            <Stack className={clsN(styles.section)}>
                <MainNav />
                {children}
            </Stack>
        </Box>
    );
};
export default AdminTemplate;
