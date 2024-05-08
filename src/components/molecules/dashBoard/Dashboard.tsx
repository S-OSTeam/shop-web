import React from 'react';
import { Box } from '@mui/material';
import Menu from '@atoms/menu/Menu';
import Button from '@atoms/button/Button';
import PropTypes from 'prop-types';
import clsN from 'classnames';
import styles from './styles/Dashboard.module.scss';

interface UserStateProps {
    // 클래스명
    className?: string;
    // 버튼 클래스명
    btnClsN?: string;
    // 버튼의 컨텐츠 텍스트 혹은 아이콘이 될 수 있으므로 제너릭 고민하기
    btnChildren: React.ReactNode;
    // 드롭다운 메뉴 클래스명
    menuClsN?: string;
    // 메뉴 내부 컨텐츠
    menuChildren: React.ReactNode;
}

/**
 * 로그인 관련 컴포넌트
 * @constructor
 */
const Dashboard = ({ className, btnClsN, btnChildren, menuClsN, menuChildren }: UserStateProps) => {
    // state
    const [isOpen, setIsOpen] = React.useState<boolean>(false);

    // fc
    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <Box component="div" className={clsN(className, styles.dashboard)}>
            <Button className={clsN(btnClsN, styles.dashboard__btn)} onClick={handleClick}>
                {btnChildren}
            </Button>
            <Menu open={isOpen} className={clsN(menuClsN, styles.dashboard__menu)}>
                {menuChildren}
            </Menu>
        </Box>
    );
};
Dashboard.propTypes = {
    className: PropTypes.string,
    btnClsN: PropTypes.string,
    btnChildren: PropTypes.node.isRequired,
    menuClsN: PropTypes.string,
    menuChildren: PropTypes.node.isRequired,
};
Dashboard.defaultProps = {
    className: styles.dashboard,
    btnClsN: styles.dashboard__btn,
    menuClsN: styles.dashboard__menu,
};
export default Dashboard;
