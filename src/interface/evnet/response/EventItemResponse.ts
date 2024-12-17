// 이벤트 정보 조회(간략)
export interface EventItemResponse {
    id: string;
    startedAt: Date;
    endedAt: Date;
    title: string;
    content?: string;
    thumbnail?: string;
    // eventType : EventType
}
// eventId 이용해서 클릭 시 상세정보 조회
export interface EventInfoResponse extends EventItemResponse {
    items?: string[];
    images?: string[];
    link?: string;
}
