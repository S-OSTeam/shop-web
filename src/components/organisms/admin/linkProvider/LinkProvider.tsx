import React from 'react';
import { NavigateITF } from '@util/test/data/admin/navigate/Navigate';
import { Dashboard, Help, LocalShipping, Payment, Person, ShoppingBag } from '@mui/icons-material';
import clsN from 'classnames';
import styles from '@templates/admin/styles/Admin.module.scss';
import LinkBtn from '@molecules/link/Link';
import { Box } from '@mui/material';
import CollapsedListUnUsed from '@molecules/collapsedList_origin/CollapsedListUnUsed';

interface LinkProviderProps {
    // 네비게이션 컨텐츠
    item: NavigateITF;
    // 콜랩스 (펼침) 인덱스
    collIndex: number;
    // 토글 상태
    toggle: boolean[];
    // 콜랩스 클릭 이벤트
    handleCollClick: (idx: number) => void;
}

export const LinkProvider = ({ ...props }: LinkProviderProps) => {
    /* 상태 */
    // collapse 컴포넌트 전용 상태 상수
    const collState = props.toggle[props.collIndex];
    // 속성 요소
    const { route, title, depthItem } = props.item;

    /* 함수 */
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
    // 아이콘 저장
    const iconProvider = iconSelector(title);

    // collapse 클릭 이벤트 처리
    const onClickEvent = () => {
        props.handleCollClick(props.collIndex);
    };
    // 2차 체크
    const depthEle = depthItem?.map((item) => {
        if (!item) {
            return undefined;
        }
        const { title, ref } = item;
        return (
            <div className={clsN(styles.inner__link)}>
                <LinkBtn className={clsN(styles.inner__link__button)} href={ref}>
                    {title}
                </LinkBtn>
            </div>
        );
    });

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
            <CollapsedListUnUsed
                className={clsN(styles.collapse, styles['font-color'], styles['parent-list'])}
                listBtnClsN={clsN(styles.collapse__button, styles['btn-set'])}
                listIconClsN={clsN(styles.collapse__button__icon, styles['font-color'])}
                listItemRootClsN={clsN(styles.collapse__primary)}
                primaryClsN={clsN(styles.collapse__primary__text)}
                collClsN={clsN(styles.collapse__coll)}
                collListClsN={clsN(styles.collapse__coll__list)}
                onClick={onClickEvent}
                isOpen={collState}
                listIcon={iconProvider}
                primary={title}
                innerChildren={
                    <Box component="div" className={clsN(styles.inner)}>
                        {depthEle}
                    </Box>
                }
            />
        );
    }
    return null;
};
