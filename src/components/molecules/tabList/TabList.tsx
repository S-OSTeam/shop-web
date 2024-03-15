import React from 'react';
import { TabList as MuiTabList, TabListProps as MuiTabListProps } from '@mui/lab';
import PropTypes from 'prop-types';
import clsN from 'classnames';
import styles from './styles/TabList.module.scss';

/** Props for component */
interface TabListProps extends MuiTabListProps {
    /** - 입력시 이벤트 */
    handleChange?: MuiTabListProps['onChange'];
    /** - 자식요소 */
    children: React.ReactNode;
    /** - 레이블 영역 명 */
    ariaLabel?: string;
    /** - 클래스명 */
    className?: string;
}

/** TabList description here
 * @param {function} handleChange - 탭 핸들 이벤트
 * @param {node} children - 'Tab' 컴포넌트
 * @param {string} ariaLabel - 레이블 영역 명
 * @param {string} className - 클래스명
 * @constructor
 */
const TabList = (
    {
        handleChange,
        children,
        ariaLabel,
        className
    }: TabListProps,
) => {
    return (
        <MuiTabList onChange={handleChange} aria-label={ariaLabel} className={clsN(className, styles.tabList)}>
            {children}
        </MuiTabList>
    );
};
/** PropTypes for TabList */
TabList.propTypes = {
    handleChange: PropTypes.func,
    children: PropTypes.node.isRequired,
    ariaLabel: PropTypes.string,
    className: PropTypes.string,
}
/** DefaultProps for TabList */
TabList.defaultProps = {
    handleChange: undefined,
    ariaLabel: undefined,
    className: clsN(`${styles.tabList}`),
}
export default TabList;