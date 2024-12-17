import { atom } from 'recoil';
import { EventFilterType } from '@interface/evnet/filter/EventFilterType';

export const noticeFilterAtom = atom<EventFilterType>({
    key: 'noticeFilter',
    default: {
        keyword: '',
        eventType: 'all',
        postStatus: 'all',
    },
});
