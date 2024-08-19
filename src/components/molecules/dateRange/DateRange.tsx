import React from 'react';
import { Dayjs } from 'dayjs';
import 'dayjs/locale/ko';
import { Paper, Stack } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import DatePicker from '@atoms/datePicker/DatePicker';
import Button from '@atoms/button/Button';
import { ArrowDropDown, ArrowDropUp, CalendarMonth } from '@mui/icons-material';
import { useRecoilState } from 'recoil';
import { noticesFilterStateAtom } from '@recoil/atoms/admin/inquiry/notices/noticesFilterAtom';
import clsN from 'classnames';
import styles from './styles/DateRange.module.scss';

interface DateRangeProps {
    className?: string; // 클래스명
    pickerClsN?: string; // 데이터 피커 클래스명
    resetTrigger: boolean; // 리셋 트리거
}
const DateRange = ({ className, pickerClsN, resetTrigger }: DateRangeProps) => {
    /* 상태 */
    // 버튼 컨텍스트
    const [btnText, setBtnText] = React.useState('날짜범위');

    // 캘린더 시작일, 종료일
    const [fromD, setFromD] = React.useState<Dayjs | null>(null);
    const [endD, setEndD] = React.useState<Dayjs | null>(null);

    // 버튼 토글 상태
    const [isOpen, setIsOpen] = React.useState<boolean>(false);

    // submit 신호 상태
    const [datePicked, setDatePicked] = React.useState(false);

    // 부터 ~ 까지에 쓰이는 레이블
    const dateLabels = ['from', 'to'];

    // 리코일 날짜설정
    const [dayRecoil, setDayRecoil] = useRecoilState(noticesFilterStateAtom);

    /* 함수 */

    // Dayjs 를 받아 YYYY.MM.DD 형태로 포맷하기
    const formatDayjs = (date: Dayjs | null) => {
        return date ? date.format('YYYY.MM.DD') : '';
    };

    // Dayjs 타입인 두 값을 비교하여 특정값 배출 (이후 switch 문으로 분기 처리하기)
    const compareDate = (_date1: Dayjs | null, _date2: Dayjs | null): number | null => {
        // 인자가 null 이 아닐 경우만
        if (_date1 && _date2) {
            if (_date1?.isBefore(_date2)) {
                // 인자1 이 인자2 보다 작음 (-1)
                return -1;
            }
            if (_date1?.isAfter(_date2)) {
                // 인자1 이 인자2 보다 큼 (+1)
                return 1;
            }
            if (_date1?.isSame(_date2)) {
                // 두 인자값이 같을 경우 (0)
                return 0;
            }
        } else if (_date1 == null && _date2 == null) {
            // 둘다 null 일 경우
            return null;
        }
        // 인자중 하나라도 null 일 경우 (0)
        return 0;
    };

    // Dayjs 스왑 이벤트
    const fixDateState = (compare: number | null) => {
        switch (compare) {
            case null:
                break;
            case -1:
                // 인자1 이 인자2 보다 작음
                break;
            case 0: {
                // 종료일 찾기 // 인자중 하나라도 null 인 상황, 그 중 큰값은 endD 로 정하기 -1 까지 조회하도록 하기
                const tempEndDate = fromD?.isAfter(endD) ? fromD : endD;
                // 널 병합 연산자 (??) 를 사용해서 undefined 발생할 경우 방지하기
                const tempStartDate = tempEndDate?.subtract(1, 'day') ?? null;
                // 상태 갱신
                setFromD(tempStartDate);
                setEndD(tempEndDate);
                break;
            }
            case 1: {
                // 인자1 이 인자2 보다 큼
                const tempLastDate = fromD;
                setFromD(endD);
                setEndD(tempLastDate);
                break;
            }
            default:
                break;
        }
    };

    // 버튼 내용 분기에 따라 번경하기
    const setButtonContext = () => {
        // submit true 일 때 아래 분기 실행
        const startDate = formatDayjs(fromD);
        const endDate = formatDayjs(endD);

        // 상태값 변경
        setBtnText(`${startDate} ~ ${endDate}`);
        // 아톰 내용 변경
    };

    // Dayjs 라이브러리를 Date 타입에 맞게 변환

    // 현재 날짜를 리코일에 갱신
    const updateDateRecoil = () => {
        // 시작일
        const firstDate = fromD?.toDate();
        // 종료일
        const lastDate = endD?.toDate();
        // 리코일 업데이트
        setDayRecoil((formState) => ({
            ...formState,
            startDate: firstDate,
            endDate: lastDate,
        }));
    };

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
    // 날짜 초기화 이벤트
    const resetDateRange = () => {
        setFromD(null);
        setEndD(null);
        setBtnText('날짜범위');
        setIsOpen(false);
        setDatePicked(false);
        setDayRecoil((prevVal) => ({
            ...prevVal,
            startDate: undefined,
            endDate: undefined,
        }));
    };

    /* JSX 컴포넌트 */

    // submit 버튼
    const dateSubmitBtn = (
        <Button className={clsN(styles['date-range__btn-submit'])} onClick={handleDateSubmit}>
            확인
        </Button>
    );
    // 받은 인자로 DatePicker 컴포넌트 반환
    const DatePickerRender = (
        <Paper className={clsN(styles.background)} elevation={0}>
            <Stack direction="row" alignItems="center" boxShadow="none" bgcolor="transparent">
                <DatePicker
                    label={dateLabels[0]}
                    className={clsN(styles['date-range__picker'], pickerClsN)}
                    value={fromD}
                    onChange={(newValue) => {
                        setFromD(newValue);
                    }}
                />
                <p className={clsN(styles['date-range__picker__separator'])} />
                <DatePicker
                    label={dateLabels[1]}
                    className={clsN(styles['date-range__picker'], pickerClsN)}
                    value={endD}
                    onChange={(newValue) => setEndD(newValue)}
                />
            </Stack>
        </Paper>
    );

    // date picker 컴포넌트를 지역에 맞게 양식을 수정하고 배포
    const DatePickerProvider = (
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ko">
            <Stack
                className={clsN(isOpen ? styles['date-range--open'] : styles['date-range'], className)}
                direction="row"
                boxShadow={3}
            >
                {DatePickerRender}
                {dateSubmitBtn}
            </Stack>
        </LocalizationProvider>
    );
    // 날짜조회 드롭다운 버튼 컴포넌트
    const DateRangeBtn = (
        <Button
            className={clsN({
                [styles['date-range-stack__button']]: true,
                [styles['date-range-stack__button--on']]: isOpen,
                [styles['date-range-stack__button--off']]: !isOpen,
            })}
            startIcon={<CalendarMonth />}
            endIcon={isOpen ? <ArrowDropUp /> : <ArrowDropDown />}
            onClick={handleDateOpen}
            size="medium"
        >
            {btnText}
        </Button>
    );

    React.useEffect(() => {
        const result = compareDate(fromD, endD);
        if (result == null) {
            setBtnText('날짜범위');
        } else {
            fixDateState(result);
            setButtonContext();
            updateDateRecoil();
        }
        setIsOpen(false);
        setDatePicked(false);
        console.log(`current day from : ${dayRecoil.startDate}, current day end ${dayRecoil.endDate}`);
    }, [datePicked]);

    React.useEffect(() => {
        if (resetTrigger) {
            resetDateRange();
        }
    }, [resetTrigger, setDayRecoil]);

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
