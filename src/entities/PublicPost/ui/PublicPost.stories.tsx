import type { Meta, StoryObj } from '@storybook/react'

import { PublicPost } from './PublicPost'

const meta = {
  component: PublicPost,
  tags: ['autodocs'],
  title: 'Components/PublicPost',
} satisfies Meta<typeof PublicPost>

export default meta
type Story = StoryObj<typeof meta>

export const Default = {
  args: {
    createdAt: new Date(),
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incdipiscing elit, sed do eiusmod tempor inipiscing elit, sed do eiusmod tempor incdipiscing elit, sed do eiusmod tempor incd.',
    images: [],
    ownerName: 'John Doe',
  },
}
