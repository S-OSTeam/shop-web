import styles from '@atoms/progress/LinesrProgress/style/Progress.module.scss';
import LinearProgress from '@atoms/progress/LinesrProgress/LinearProgress';
import type { Meta, StoryObj } from '@storybook/react';

// eslint-disable-next-line storybook/story-exports
type Story = StoryObj<typeof LinearProgress>;

const meta = {
    title: 'Components/Atoms/LinearProgressy',
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    component: LinearProgress,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof LinearProgress>;
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
