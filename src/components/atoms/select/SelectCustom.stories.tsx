import SelectCustom from '@atoms/select/SelectCustom';

import type { Meta, StoryObj } from '@storybook/react';

const meta:Meta<typeof SelectCustom> = {
    // @ts-ignore
    component: SelectCustom,
    tags: ['autodocs'],
};
export default meta;

type Story = StoryObj<typeof SelectCustom>;

export const SelectTag:Story = {
    args:{
      variant: 'outlined',
      children: 'hi',
      label: 'Select-Outlined-Label',

    },
}