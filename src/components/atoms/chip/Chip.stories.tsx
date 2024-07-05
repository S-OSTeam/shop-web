import styles from '@atoms/chip/style/Chip.module.scss';
import Chip from '@atoms/chip/Chip';
import type { Meta, StoryObj } from '@storybook/react';

type Stroy = StoryObj<typeof Chip>;

const meta = {
    title: 'Components/Atoms/Chip',
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    component: Chip,

    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Chip>;
export default meta;

export const Filled: Stroy = {
    args: {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        variant: 'filled',
        label: 'Filled',
        className: `${styles.chip}`,
    },
};
export const Outlined: Stroy = {
    args: {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        variant: 'outlined',
        label: 'Outlined',
        className: `${styles.chip}`,
    },
};
