import { gql } from '@apollo/client';

// 이벤트 타입들 조회
export const GET_EVENT_TYPE = gql`
    query GetEventType {
        __typename(name: "EventType") {
            enumValues {
                name
                description
            }
        }
    }
`;

// 이벤트 목록 조회
export const GET_EVENT_LIST = gql`
    query GetEventList($eventType: EventType) {
        getEventList(eventType: $eventType) {
            id
            startedAt
            endedAt
            title
            contents
            thumbnail
        }
    }
`;

// 이벤트 상세 조회
export const GET_EVENT_INFO = gql`
    query GetEventInfo($eventId: Long!) {
        getEventInfo(eventId: $eventId) {
            id
            startedAt
            endedAt
            title
            contents
            thumbnail
            items
            images
            link
        }
    }
`;
