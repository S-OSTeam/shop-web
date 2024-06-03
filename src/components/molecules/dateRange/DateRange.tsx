/* eslint-disable */
import React from 'react';
import { Dayjs } from 'dayjs';
import 'dayjs/locale/ko';
import { Box, Stack } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import DatePicker from '@atoms/datePicker/DatePicker';
import Button from '@atoms/button/Button';
import { ArrowDownward, ArrowDropDown, ArrowDropUp, ArrowUpward, CalendarMonth } from '@mui/icons-material';
import clsN from 'classnames';
import styles from './styles/DateRange.module.scss';

interface DateRangeProps {
    className?: string;
    pickerClsN?: string;
}
const DateRange = ({ className, pickerClsN }: DateRangeProps) => {
    /// 초기 로딩 시 페이지 초기값

    /* 상태 */
    // 버튼 컨텍스트
    const [btnText, setBtnText] = React.useState('this is button');
    // 캘린더 시작일, 종료일
    const [fromD, setFromD] = React.useState<Dayjs | null>(null);
    const [endD, setEndD] = React.useState<Dayjs | null>(null);
    // 캘린더 입력 이벤트
    const handleDateChange = (date: Dayjs | null) => {
        setFromD(date);
    };
    // 버튼 토글 상태
    const [isOpen, setIsOpen] = React.useState<boolean>(false);
    // submit 신호 상태
    const [datePicked, setDatePicked] = React.useState(false);
    // 초기 진입시 버튼 내용
    const btnIdleText = '날짜범위';
    // 부터 ~ 까지에 쓰이는 레이블
    const dateLabels = ['from', 'to'];
    // 날짜 범위 컴포넌트 열기
    const handleDateOpen = () => {
        setIsOpen(!isOpen);
    };
    // 날짜 데이터 확정 이벤트
    const handleDateSubmit = () => {
        console.log('DateSubmit!!!');
        // 아래 수행할 함수 실행
        setDatePicked((prevState) => !prevState);
    };
    // 날짜 리셋 이벤트
    const handleDateReset = () => {
        console.log(`Previous Date is : ( ${fromD} ${endD} )`);
        resetDate();
        console.log(`Date Stores now : ( ${fromD} ${endD} )`);
    };
    // useState 초기화
    const resetDate = () => {
        setFromD(null);
        setEndD(null);
    };
    // 날짜 입력란에 데이터가 있는지 체크
    const checkDateStorage = () => {};

    /* JSX 컴포넌트 */
    // submit 버튼
    const dateSubmitBtn = (
        <Button className={clsN(styles['date-range__btn-submit'])} onClick={handleDateSubmit}>
            확인
        </Button>
    );
    // map 으로 나온 JSX 는 새로운 객체이므로 당연히 handleClick null 값의 새로운 객체가 만들어짐
    // 고로 해당 컴포넌트가 지워질 경우 저장해야 할 경우면 저장 분기 처리하기

    // 날짜 범위 조회 컴포넌트
    // const DatePickerRender = dateLabels.map((item, idx) => {
    //     const stateCont = [fromD, endD];
    //     const setStateCont = [setFromD, setEndD];
    //     // 구분 컴포넌트
    //     const separatorJSX = idx !== 1 && <p className={clsN(styles['date-range__picker__separator'])} />;
    //
    //     return (
    //         <>
    //             <DatePicker
    //                 className={clsN(styles['date-range__picker'], pickerClsN)}
    //                 label={item}
    //                 value={stateCont[idx]}
    //                 onChange={(newVal) => setStateCont[idx](newVal)}
    //             />
    //             {separatorJSX}
    //         </>
    //     );
    // });
    // 위에꺼 다시
    const DatePickerRender = (labels: string[], calenderStart: Dayjs | null, calenderEnd: Dayjs | null) => {
        // 캘린더 시작일 컴포넌트
        const StartCalender = (
            <DatePicker
                label={labels[0]}
                className={clsN(styles['date-range__picker'], pickerClsN)}
                value={calenderStart}
                onChange={handleDateChange}
            />
        );
        // 캘린더 종료일 컴포넌트
        const EndCalender = (
            <DatePicker
                label={labels[1]}
                className={clsN(styles['date-range__picker'], pickerClsN)}
                value={calenderEnd}
                onChange={handleDateChange}
            />
        );
        return (
            <Stack direction="row" alignItems="center">
                {StartCalender}
                <p className={clsN(styles['date-range__picker__separator'])} />
                {EndCalender}
            </Stack>
        );
    };
    // date picker 를 지역에 맞게 양식을 수정하고 배포
    const DatePickerProvider = (
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ko">
            <Stack
                className={clsN(isOpen ? styles['date-range--open'] : styles['date-range'], className)}
                direction="row"
                boxShadow={3}
            >
                {DatePickerRender(dateLabels, fromD, endD)}
                {dateSubmitBtn}
            </Stack>
        </LocalizationProvider>
    );
    // 날짜조회 드롭다운 버튼 컴포넌트
    const DateRangeBtn = (
        <Button
            className={clsN(styles['date-range-stack__button-show'])}
            startIcon={<CalendarMonth />}
            endIcon={isOpen ? <ArrowDropUp /> : <ArrowDropDown />}
            onClick={handleDateOpen}
            size="medium"
        >
            {btnText}
        </Button>
    );

    React.useEffect(() => {
        if (fromD == null && endD == null) {
            setBtnText(btnIdleText);
            console.log(`start ${fromD} | end ${endD}`);
        }
        if (fromD !== null || endD !== null) {
            console.log(`start ${fromD} | end ${endD}`);
        }
        setDatePicked(false);
    }, [datePicked]);

    return (
        <Stack className={clsN(styles['date-range-stack'])}>
            {DateRangeBtn}
            {DatePickerProvider}
        </Stack>
    );
};
DateRange.defaultProps = {
    className: styles['date-range'],
    pickerClsN: styles['date-range__picker'],
};
export default DateRange;
