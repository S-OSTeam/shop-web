import React from 'react';
import { Box, Stack } from '@mui/material';
import { AsideNav } from '@organisms/admin/asideNav/AsideNav';
import { NavigateItem, NavigateITF } from '@util/test/data/admin/navigate/Navigate';
import MainNav from '@organisms/admin/mainNav/MainNav';
import { LinkProvider } from '@organisms/admin/linkProvider/LinkProvider';
import { useLocationHook } from '@hooks/useLocation.hook';
import clsN from 'classnames';
import styles from './styles/Admin.module.scss';

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

    /* Link 생성 함수  */
    /* 제너릭의 경우 결과 컴포넌트를 주는게 아닌 해당 컴포넌트를 만드는 과정을 전달해야함 */
    const storageLinks = (
        _item: NavigateITF,
        _index: number,
        _toggle: boolean[],
        _handleCollChange: (_idx: number) => void,
    ) => <LinkProvider item={_item} collIndex={_index} toggle={_toggle} handleCollClick={_handleCollChange} />;

    // 복합 링크 콜랩스 클릭 이벤트
    const handleCollClick = (idx: number) => {
        // 불변성 유지를 위해 원본 복사
        const newToggleState = [...toggle];
        // 현재 인덱스(파라미터: number) 반전 처리
        newToggleState[idx] = !newToggleState[idx];
        // 상태 업데이트
        setToggle(newToggleState);
    };

    React.useEffect(() => {
        console.log(`currentLocation: ${currentLocation}`);
    }, [currentLocation]);
    // 랜더 결과영역
    return (
        <Box component="div" className={clsN(styles.wrapper)}>
            <AsideNav
                className={clsN(styles['aside-nav'])}
                listWrapperClsN={clsN(styles.linker)}
                items={NavigateItem}
                itemFactor={(item: NavigateITF, index: number) => storageLinks(item, index, toggle, handleCollClick)}
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
