import { Meta, StoryObj } from '@storybook/react'

import { SignOutForm } from './SignOut'

const meta = {
  component: SignOut,
  tags: ['autodocs'],
  title: 'Widgets/SignOutForm',
} satisfies Meta<typeof SignOutForm>

export default meta
type Story = StoryObj<typeof meta>

export const SignOutWidget: Story = {}
