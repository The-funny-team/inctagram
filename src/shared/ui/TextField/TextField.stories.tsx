import type { Meta, StoryObj } from '@storybook/react'

import { TextField } from '@/shared/ui/TextField/TextField'

const meta = {
  argTypes: {},
  component: TextField,
  tags: ['autodocs'],
  title: 'Components/TextField',
} satisfies Meta<typeof TextField>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    disabled: false,
    label: 'Text-area',
    placeholder: 'Text-area',
  },
}

export const WithError: Story = {
  args: {
    disabled: false,
    error: 'Error text',
    label: 'Text-area',
    placeholder: 'Text-area',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    label: 'Email',
    placeholder: 'Text-area',
  },
}
