/* eslint-disable */
import React from 'react';
import { Dayjs } from 'dayjs';
import 'dayjs/locale/ko';
import { Box, FormControl, InputLabel, Paper, Popover, Stack } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import DatePicker from '@atoms/datePicker/DatePicker';
import Button from '@atoms/button/Button';
import { ArrowDropDown, ArrowDropUp, CalendarMonth } from '@mui/icons-material';
import { formatDayjs, swapDateCheck } from '@util/dayjs/DayJsUtill';
import clsN from 'classnames';
import styles from './styles/DateRange.module.scss';

interface DateRangeProps {
    className?: string; // 클래스명
    rootClsN?: string; // root 클래스명
    pickerClsN?: string; // 데이터 피커 클래스명
    fromDate: Dayjs | null; // 시작일
    endDate: Dayjs | null; // 종료일
    onDateChange: (startDate: Date | undefined, endDate: Date | undefined) => void;
    onReset: () => void; // 리셋 이벤트
    defaultText: string; // 기본버튼 내용
    inputLabel?: string;
    inputLabelId?: string;
}
const DateRange = ({
    className,
    rootClsN,
    pickerClsN,
    fromDate,
    endDate,
    onDateChange,
    onReset,
    defaultText,
    inputLabel,
    inputLabelId,
}: DateRangeProps) => {
    /* 상태 */
    const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null); // 현제 포커스된 앵커
    // 캘린더 시작일, 종료일
    const [fromDateState, setFromDateState] = React.useState<Dayjs | null>(fromDate);
    const [endDateState, setEndDateState] = React.useState<Dayjs | null>(endDate);

    const [buttonText, setButtonText] = React.useState<string>(defaultText);

    React.useEffect(() => {
        setFromDateState(fromDate);
        setEndDateState(endDate);
        if (!fromDate && !endDate) {
            setButtonText(defaultText);
        }
    }, [fromDate, endDate, defaultText]); // 상태 동기화

    // 부터 ~ 까지에 쓰이는 레이블
    const dateLabels = ['from', 'to'];

    // 앵커된 요소 존재시 open == true
    const open = Boolean(anchorEl);

    /* 함수 */
    // popover 활성화 이벤트
    const handlePopoverClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(e.currentTarget); // e 를 통해 선택된 버튼 요소에 앵커 설정
    };
    // popover 비활성화 이벤트
    const handlePopoverOff = () => {
        setAnchorEl(null); // 앵커값 null
    };

    // 날짜 변경 이벤트
    const handleDateChange = (newFromDate: Dayjs | null, newEndDate: Dayjs | null) => {
        const [neatedFromDate, neatedEndDate] = swapDateCheck(newFromDate, newEndDate);
        setFromDateState(neatedFromDate);
        setEndDateState(neatedEndDate);
    };

    // 날짜 변경 이벤트 : 시작기준
    const handleStartDateChange = (newValue: Dayjs | null) => {
        handleDateChange(newValue, endDateState);
    };
    const handleEndDateChange = (newValue: Dayjs | null) => {
        handleDateChange(fromDateState, newValue);
    };
    // 날짜 변경 이벤트 : 종료기준

    const dateContextChange = () => {
        if (!fromDateState || !endDateState) {
            // 둘중하나 null 일 경우
            setButtonText(defaultText);
            return;
        }
        setButtonText(`${formatDayjs(fromDateState)} ~ ${formatDayjs(endDateState)}`);
    };

    // 날짜 데이터 확정 이벤트
    const handleDateSubmit = () => {
        onDateChange(fromDateState?.toDate(), endDateState?.toDate());
        dateContextChange();
        handlePopoverOff(); // popover 이벤트 종료
    };
    // 날짜 초기화 이벤트
    const resetDateRange = () => {
        setFromDateState(null);
        setEndDateState(null);
        setButtonText(defaultText);
        onDateChange(undefined, undefined);
        onReset();
    };

    /* JSX 컴포넌트 */

    // submit 버튼
    const dateSubmitBtn = (
        <Button
            className={clsN(styles['date-range__button'], styles['date-range__button-submit'])}
            onClick={handleDateSubmit}
            variant="contained"
        >
            Done
        </Button>
    );
    // reset 버튼
    const dateResetIconButton = (
        <Button
            className={clsN(styles['date-range__button'], styles['date-range__button-clear'])}
            onClick={resetDateRange}
            variant="outlined"
        >
            Clear
        </Button>
    );
    // 받은 인자로 DatePicker 컴포넌트 반환
    const DatePickerRender = (
        <Paper className={clsN(styles.background)} elevation={0}>
            <Stack
                direction="row"
                alignItems="center"
                boxShadow="none"
                bgcolor="transparent"
                className={clsN(styles['date-picker-wrapper'])}
            >
                <DatePicker
                    label={dateLabels[0]}
                    className={clsN(styles['date-picker-wrapper__picker'], pickerClsN)}
                    value={fromDateState}
                    onChange={handleStartDateChange}
                    classes={{
                        root: styles[''],
                    }}
                />
                <p className={clsN(styles['date-picker-wrapper__seperator'])} />
                <DatePicker
                    label={dateLabels[1]}
                    className={clsN(styles['date-picker-wrapper__picker'], pickerClsN)}
                    value={endDateState}
                    onChange={handleEndDateChange}
                />
            </Stack>
        </Paper>
    );

    // date picker 컴포넌트를 지역에 맞게 양식을 수정하고 배포
    const DatePickerPopover = (
        <Popover
            open={open}
            anchorEl={anchorEl}
            onClose={handlePopoverOff}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
            className={clsN(styles.popover)}
            classes={{
                paper: styles.popover__paper,
            }}
        >
            <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ko">
                <Stack className={clsN(styles['date-range'], className)} direction="row" boxShadow={3}>
                    {DatePickerRender}
                    <Stack gap={1} direction="row" className={clsN(styles['date-range__confirm'])}>
                        {dateResetIconButton}
                        {dateSubmitBtn}
                    </Stack>
                </Stack>
            </LocalizationProvider>
        </Popover>
    );
    // 날짜조회 드롭다운 버튼 컴포넌트
    const DateRangeBtn = (
        <Button
            id={inputLabelId}
            className={clsN(styles['date-range-stack__button'])}
            startIcon={<CalendarMonth />}
            endIcon={open ? <ArrowDropUp /> : <ArrowDropDown />}
            onClick={handlePopoverClick}
            size="medium"
        >
            {buttonText}
        </Button>
    );

    return (
        <Box className={clsN(styles['date-range-stack'], rootClsN)} gap={1}>
            <FormControl variant="standard" className={clsN(styles['date-range-stack__label'])}>
                <InputLabel shrink htmlFor={inputLabelId}>
                    {inputLabel}
                </InputLabel>
                {DateRangeBtn}
            </FormControl>
            {DatePickerPopover}
        </Box>
    );
};
DateRange.defaultProps = {
    className: styles['date-range'],
    pickerClsN: styles['date-range__picker'],
};
export default DateRange;
