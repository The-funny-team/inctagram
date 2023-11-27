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

export const TextInputWithOutError: Story = {
  args: {
    disabled: false,
    label: 'Email',
    type: 'text',
  },
}
export const TextInputWithError: Story = {
  args: {
    disabled: false,
    error: 'error text',
    label: 'Email',
    type: 'text',
  },
}
export const SearchInput: Story = {
  args: {
    disabled: false,
    error: '',
    label: 'Email',
    type: 'search',
  },
}
export const SearchInputWithError: Story = {
  args: {
    disabled: false,
    error: 'some error',
    label: 'Email',
    type: 'search',
  },
}

export const PasswordInput: Story = {
  args: {
    disabled: false,
    error: '',
    label: 'Email',
    type: 'password',
  },
}
export const PasswordInputWithError: Story = {
  args: {
    disabled: false,
    error: 'error text',
    label: 'Email',
    type: 'password',
  },
}
export const DisabledPasswordInputWithLabelAndError: Story = {
  args: {
    disabled: true,
    error: 'error text',
    label: 'Email',
    type: 'password',
  },
}
