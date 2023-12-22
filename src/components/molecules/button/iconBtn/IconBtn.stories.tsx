import { Abc } from '@mui/icons-material';
import IconBtn from './IconBtn';
import type {Meta, StoryObj} from '@storybook/react';

const meta: Meta<typeof IconBtn> = {
    component: IconBtn,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof IconBtn>;

export const iconButton:Story = {
    args: {
        icon: <Abc/>,
        svgClass: '',
        btnClass: '',
    }
};

