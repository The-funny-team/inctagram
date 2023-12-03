import { SignUp } from '@/widgets/SignUp/ui/SignUp'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: SignUp,
  tags: ['autodocs'],
  title: 'Widgets/SignUp',
} satisfies Meta<typeof SignUp>

export default meta
type Story = StoryObj<typeof meta>

export const SignOutWidget: Story = {}
