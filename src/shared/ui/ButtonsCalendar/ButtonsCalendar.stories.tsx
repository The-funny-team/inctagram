import { Meta, StoryObj } from '@storybook/react'

import { ButtonsCalendar } from './ButtonsCalendar'

const meta = {
  argTypes: {
    direction: ['right', 'left'],
  },
  component: ButtonsCalendar,
  tags: ['autodocs'],
  title: 'Components/ButtonsCalendar',
} satisfies Meta<typeof ButtonsCalendar>

export default meta
type Story = StoryObj<typeof meta>

export const Left: Story = {
  args: {
    direction: 'left',
  },
}

export const Right: Story = {
  args: {
    direction: 'right',
  },
}
