import { ButtonProps } from '@mui/material';

export const NotificationButtonGroup: ButtonProps[] = [
    {
        value: '0',
        title: '전체',
        children: 'all',
    },
    {
        value: '1',
        title: '공개',
        children: 'posted',
    },
    {
        value: '2',
        title: '비공개',
        children: 'private',
    },
];
