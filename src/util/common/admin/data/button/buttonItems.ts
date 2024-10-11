import { ButtonProps } from '@mui/material';
/*
    클릭한 버튼이 콜랩스 내부 edit일 경우
    * 콜랩스 오픈하고 제목 옆에 케밥 메뉴 아이콘(추가옵션) 버튼을 눌러 수정하기 활성화
    edit : 서버로 부터 원본을 에디터로 불러오게하기
    if edit 활성화시
    클릭한 edit 는 로딩 버튼이 되어 클릭이 안되게 하고
    모달 활성화하기
    2. 모달 활성화 상태
    cancel | save | delete
*/

/*
 *
 * */

// 콜랩스 영역 : 수정
const defaultButtonConfig: ButtonProps[] = [
    {
        // 취소
        value: '0',
        children: 'cancel',
        'aria-label': 'cancel',
    },
];

export const pcickedCollapsedButton: ButtonProps[] = [
    ...defaultButtonConfig,
    {
        value: '1',
        children: 'save',
        'aria-label': 'save',
    },
    {
        value: '2',
        children: 'delete',
        'aria-label': 'delete',
    },
];

// 포스트 영역 : 등록
export const pickedPostButton: ButtonProps[] = [
    ...defaultButtonConfig,
    {
        value: '1',
        children: 'post',
        'aria-label': 'post',
    },
];
