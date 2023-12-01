import { Meta, StoryObj } from '@storybook/react'

import { SignOutForm } from './SignOutForm'

const meta = {
  component: SignOutForm,
  tags: ['autodocs'],
  title: 'Widgets/SignOutForm',
} satisfies Meta<typeof SignOutForm>

export default meta
type Story = StoryObj<typeof meta>

export const SignOut: Story = {}
