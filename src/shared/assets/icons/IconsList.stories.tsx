import type { Meta, StoryObj } from '@storybook/react'

import ArrowDown from './ArrowDown'
import { IconsList } from './IconsList'

const meta = {
  argTypes: {},
  component: IconsList,
  tags: ['autodocs'],
  title: 'Icons/Icons list',
} satisfies Meta<typeof IconsList>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowDownIcon: Story = {
  args: {
    children: (
      <>
        <ArrowDown />
      </>
    ),
  },
}
