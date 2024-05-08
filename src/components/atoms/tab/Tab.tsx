import React from 'react';
import { Tab as MuiTab, TabProps as MuiTabProps } from '@mui/material';
import clsN from 'classnames';
import PropTypes from 'prop-types';
import styles from './styles/Tab.module.scss';

/** Props for Tab component */
interface TabProps extends MuiTabProps{
    /** - 탭에 표시할 레이블 영역 */
    label: MuiTabProps['label'];
    /** - 컴포넌트 클래스명, 미입력일 경우 undefined : style.styles... */
    className?: string
    value: number;
    onTabClick?:  (value: number) => void;
}

/** Tab description here
 * @param {TabProps} props - the props for component
 * @returns JSX.Element
 * @constructor
 */
const Tab = (
    {
        label,
        className,
        value,
        onTabClick
    }:TabProps
) => {
    // 콜백 함수 호출
    const handleClick = () => {
        if(onTabClick)onTabClick(value);
    }
    return(
        <MuiTab
            label={label}
            className={clsN(className, styles.tab)}
            value={value}
            onClick={handleClick}
        />
    )
}
/** PropTypes for Tab */
Tab.propTypes= {
    // eslint-disable-next-line react/forbid-prop-types
    label: PropTypes.any.isRequired,
    className: PropTypes.string,
    value: PropTypes.number.isRequired,
    onTabClick: PropTypes.func,
}
/** DefaultProps for Tab */
Tab.defaultProps = {
    className: `${styles.tab}`,
    onTabClick: undefined,
}
export default Tab;