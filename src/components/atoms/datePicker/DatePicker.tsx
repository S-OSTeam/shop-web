import React from 'react';
import { Dayjs } from 'dayjs';
import { DatePicker as MuiDatePicker, DatePickerProps as MuiDatePickerProps } from '@mui/x-date-pickers';
import clsN from 'classnames';
import styles from './styles/DatePicler.module.scss';

/**
 * DataPicker 아토믹 컴폰넌트
 * @param {Object} props 컴포넌트 프로퍼티
 * @param {string} props.className 클래스명
 * @param {React.ReactNode} props.label 레이블
 * @returns {React.ReactElement} MuiDatePicker 컴포넌트 반환
 */
const DatePicker = <TData extends Dayjs>({
    className,
    label,
    slotProps,
}: MuiDatePickerProps<TData> & {
    className?: string;
    label?: React.ReactNode;
}): React.ReactElement => {
    /** @type {Dayjs | null} 날짜 */
    const [dateVal, setDateVal] = React.useState<TData | null>(null);
    /* 렌더 */
    return (
        <MuiDatePicker
            {...slotProps}
            slotProps={{
                textField: {
                    size: 'small',
                    classes: {
                        root: clsN(className, styles['date-root']),
                    },
                    inputProps: {
                        className: clsN(styles['date-root__input']),
                    },
                    InputLabelProps: {
                        className: clsN(styles['date-root__label']),
                    },
                },
            }}
            className={clsN(className, styles['date-root__datepicker'])}
            label={label}
            value={dateVal}
            onChange={(newVal) => setDateVal(newVal)}
        />
    );
};
DatePicker.defaultProps = {
    className: styles.datepicker,
    label: undefined,
};
export default DatePicker;
