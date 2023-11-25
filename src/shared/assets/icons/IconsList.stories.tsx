import type { Meta, StoryObj } from '@storybook/react'

import ArrowDown from './ArrowDown'
import FlagEnglish from './FlagEnglish'
import FlagRussian from './FlagRussian'
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

export const FlagEnglishIcon: Story = {
  args: {
    children: (
      <>
        <FlagEnglish />
      </>
    ),
  },
}

export const FlagRussianIcon: Story = {
  args: {
    children: (
      <>
        <FlagRussian />
      </>
    ),
  },
}
