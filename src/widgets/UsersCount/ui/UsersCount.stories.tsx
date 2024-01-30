import { UsersCount } from '@/widgets/UsersCount'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: UsersCount,
  tags: ['autodocs'],
  title: 'Widgets/UsersCount',
} satisfies Meta<typeof UsersCount>

export default meta
type Story = StoryObj<typeof meta>

export const UsersCountWidget: Story = {
  args: { usersCount: ['0', '0', '0', '3', '5', '7'] },
}
