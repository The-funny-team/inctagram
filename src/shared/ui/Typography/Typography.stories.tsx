import type { Meta, StoryObj } from '@storybook/react'

import { Typography } from './Typography'

const meta = {
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: [
        'boldText14',
        'boldText16',
        'h1',
        'h2',
        'h3',
        'large',
        'mediumText14',
        'regularLink',
        'regularText14',
        'regularText16',
        'semiBoldSmallText',
        'smallLink',
        'smallText',
      ],
    },
  },
  component: Typography,
  tags: ['autodocs'],
  title: 'Components/Typography',
} satisfies Meta<typeof Typography>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    variant: 'large',
  },
}
