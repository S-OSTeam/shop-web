import styles from '@atoms/toggle/style/Switcht.module.scss';
import Switch from '@atoms/toggle/Switch';
import type { Meta, StoryObj } from '@storybook/react';

// eslint-disable-next-line storybook/story-exports
type Story = StoryObj<typeof Switch>;

const meta = {
    title: 'Components/Atoms/Toggle',
    component: Switch,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} as Meta<typeof Switch>;
export default meta;

export const Medium: Story = {
    args: {
        checked: true,
        className: `${styles.switch}`,
        size: 'medium',
        color: 'primary',
    },
};
export const Small: Story = {
    args: {
        checked: true,
        className: `${styles.switch}`,
        size: 'small',
        color: 'primary',
    },
};
