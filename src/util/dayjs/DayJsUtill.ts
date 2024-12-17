import { Dayjs } from 'dayjs';

// 날짜 비교 -1, 0, 1
export const compareDate = (date1: Dayjs | null, date2: Dayjs | null): number | null => {
    // 인자가 null 이 아닐 경우만
    if (date1 && date2) {
        if (date1.isBefore(date2)) return -1; // 인자1 이 인자2 보다 작음 (-1)
        if (date1.isAfter(date2)) return 1; // 인자1 이 인자2 보다 큼 (+1)
        if (date1.isSame(date2)) return 0; // 두 인자값이 같을 경우 (0)
    }
    if (date1 == null && date2 == null) return null; // 둘다 null 일 경우
    return 0; // 인자중 하나라도 null 일 경우 (0)
};

export const swapDateCheck = (fromDate: Dayjs | null, endDate: Dayjs | null): [Dayjs | null, Dayjs | null] => {
    const comparedResult = compareDate(fromDate, endDate); // 날짜비교 값 상태
    switch (comparedResult) {
        case -1: // 건드릴 필요가 없음
            return [fromDate, endDate];
        case null: // 둘다 null일 경우
            return [null, null];
        case 0: {
            // 하나가 null 혹은 같은 상황
            const tempEndDate = fromDate?.isAfter(endDate) ? fromDate : endDate; // 종료일을... 시작일이 종료일을 넘길 경우 : 아니면 종료일 유지
            const tempStartDate = tempEndDate?.subtract(1, 'day') ?? null; // 시작을을 종료일 기준 1일 뺌, 만약 연산 실해할 경우 null 반환
            return [tempStartDate, tempEndDate];
        }
        case 1: // 시작일과 종료일의 순서를 교체
            return [endDate, fromDate];
        default:
            return [fromDate, endDate];
    }
};

// Dayjs 를 받아 YYYY.MM.DD 형태로 포맷하기
export const formatDayjs = (date: Dayjs | null) => {
    return date ? date.format('YYYY.MM.DD') : '';
};
