// 날짜 형식 반환 함수

/**
 *
 * @param _date : Date 타입 인자
 * .replace(/\s/g, '') : 모든 공백 제거
 * .replace(/\./g, '/') : "." 점을 "/" 로 변경
 * replace(/(\d{4})\.(\d{2}).\(\d{2})\.(\d{2}):(\d{2})/, '$1-$2-$3/$4:$5') : 해당 영역 그룹을, 두번째 인자로 변환
 * YYYY : (\d{4})\.
 * MM : (\d{2})\.
 * DD:HH : (\d{2}):(\d{2})/
 */
export const formatDate = (_date: Date) => {
    return _date
        .toLocaleString('Ko-KR', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            hour12: false,
        })
        .replace(/\s/g, '')
        .replace(/(\d{4})\.(\d{2})\.(\d{2})\.(\d{2}):(\d{2})/, '$1-$2-$3/$4:$5');
};
