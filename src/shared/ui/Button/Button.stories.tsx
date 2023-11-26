import type { Meta, StoryObj } from '@storybook/react'

import { Button } from './Button'

const meta = {
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['primary', 'secondary', 'tertiary', 'link'],
    },
  },
  component: Button,
  tags: ['autodocs'],
  title: 'Components/Button',
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: 'Primary Button',
    disabled: false,
    fullWidth: false,
    variant: 'primary',
  },
}

export const Secondary: Story = {
  args: {
    children: 'Secondary Button',
    disabled: false,
    fullWidth: false,
    variant: 'secondary',
  },
}
export const Tertiary: Story = {
  args: {
    children: 'Tertiary Button',
    disabled: false,
    fullWidth: false,
    variant: 'tertiary',
  },
}
export const Link: Story = {
  args: {
    children: 'Link Button',
    disabled: false,
    fullWidth: false,
    variant: 'link',
  },
}
export const FullWidth: Story = {
  args: {
    children: 'Button Full Width ',
    disabled: false,
    fullWidth: true,
    variant: 'primary',
  },
}
