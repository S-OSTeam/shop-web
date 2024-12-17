export interface EventFilterType {
    keyword: string; // 키워드
    eventType?: string; // 이벤트 타입
    postStatus: string; // 공개 여부
    startedAt?: Date; // 이벤트 시작일
    endedAt?: Date; // 이벤트 종료일
    postedAt?: Date; // 개시일
    fixedAt?: Date; // 수정일
}

// 이벤트 페이지 요청 인터페이스
export interface EventPageRequest {
    eventId: string; // 이벤트 ID
    page: string; // 페이지 번호
    pageSize: string; // 페이지당 크기
}

// enum 을 사용하는 EventType 인터페이스
export interface EnumValue {
    name: string;
}
export interface TypenameDataResponse {
    __typename: {
        enumValues: EnumValue[];
    };
}
