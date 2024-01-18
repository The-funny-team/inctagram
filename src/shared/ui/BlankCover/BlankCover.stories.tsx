import type { Meta, StoryObj } from '@storybook/react'

import { BlankCover } from '@/shared/ui/BlankCover/BlankCover'

const meta = {
  component: BlankCover,
  tags: ['autodocs'],
  title: 'Components/BlankCover',
} satisfies Meta<typeof BlankCover>

export default meta
type Story = StoryObj<typeof meta>

export const Circle: Story = {
  args: {
    type: 'circle',
  },
}

export const Square: Story = {
  args: {
    type: 'square',
  },
}
