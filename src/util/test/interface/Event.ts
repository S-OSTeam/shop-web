export interface EventInfo {
    id: number;
    startedAt: string;
    endedAt: string;
    title: string;
    contents: string;
    thumbnail: string;
    items: string[];
    images: string[];
    link: string;
}

export interface EventItem {
    id: number;
    startedAt: string;
    endedAt: string;
    title: string;
    contents: string;
    thumbnail: string;
}
