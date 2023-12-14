import type { Meta, StoryObj } from '@storybook/react'

import { Input } from '@/shared/ui/Input/Input'

const meta = {
  argTypes: {},
  component: Input,
  tags: ['autodocs'],
  title: 'Components/Input',
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    disabled: false,
    label: 'Email',
    placeholder: 'Epam@epam.com',
    type: 'text',
  },
}

export const WithError: Story = {
  args: {
    disabled: false,
    error: 'error text',
    label: 'Email',
    placeholder: 'Epam@epam.com',
    type: 'text',
  },
}

export const Search: Story = {
  args: {
    disabled: false,
    error: '',
    label: 'Email',
    placeholder: 'Input search',
    type: 'search',
  },
}

export const Password: Story = {
  args: {
    disabled: false,
    error: '',
    label: 'Email',
    placeholder: 'Epam@epam.com',
    type: 'password',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    label: 'Email',
    type: 'password',
  },
}
