import { Meta, StoryObj } from '@storybook/react'

import { ConfirmedEmail } from './ConfirmedEmail'

const meta = {
  component: ConfirmedEmail,
  tags: ['autodocs'],
  title: 'Widgets/ConfirmedEmail',
} satisfies Meta<typeof ConfirmedEmail>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
