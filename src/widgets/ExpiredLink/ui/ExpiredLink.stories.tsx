import { Meta, StoryObj } from '@storybook/react'

import { ExpiredLink } from './ExpiredLink'

const meta = {
  component: ExpiredLink,
  tags: ['autodocs'],
  title: 'Widgets/ExpiredLink',
} satisfies Meta<typeof ExpiredLink>

export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {
  args: {
    isOpenModal: false,
  },
}
