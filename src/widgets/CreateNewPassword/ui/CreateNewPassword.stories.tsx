import { Meta, StoryObj } from '@storybook/react'

import { CreateNewPassword } from './CreateNewPassword'

const meta = {
  component: CreateNewPassword,
  tags: ['autodocs'],
  title: 'Widgets/CreateNewPassword',
} satisfies Meta<typeof CreateNewPassword>

export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {
  args: {
    code: '123',
  },
}
