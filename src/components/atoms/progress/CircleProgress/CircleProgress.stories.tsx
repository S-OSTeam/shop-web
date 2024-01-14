import styles from '@atoms/progress/CircleProgress/style/Progress.module.scss';
import CircleProgress from '@atoms/progress/CircleProgress/CircleProgress';
import type { Meta, StoryObj } from '@storybook/react';

// eslint-disable-next-line storybook/story-exports
type Story = StoryObj<typeof CircleProgress>;

const meta = {
    title: 'Components/Atoms/CircleProgress',
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    component: CircleProgress,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof CircleProgress>;
export default meta;

export const Indeterminate: Story = {
    args: {
        variant: 'indeterminate',
        color: 'primary',
        className: `${styles.progress}`,
    },
};
export const Determinate: Story = {
    args: {
        variant: 'determinate',
        color: 'primary',
        className: `${styles.progress}`,
    },
};
