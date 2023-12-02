import type { Meta, StoryObj } from '@storybook/react'

import { PasswordRecovery } from './PasswordRecovery'

const meta = {
  component: PasswordRecovery,
  tags: ['autodocs'],
  title: 'Widgets/PasswordRecovery',
} satisfies Meta<typeof PasswordRecovery>

export default meta
type Story = StoryObj<typeof meta>

export const PasswordRecoveryStory: Story = {}
