import type { Meta, StoryObj } from '@storybook/react'

import { Modal } from './Modal'

const meta: Meta<typeof Modal> = {
  component: Modal,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof Modal>

export const Primary: Story = {
  args: {
    isOpen: true,
    title: 'Unfollow',
  },
}

export const WithContent: Story = {
  args: {
    children: <>Make changes to your profile here. Click save when you're done.</>,
    isOpen: true,
    title: 'Subscribe',
  },
}
