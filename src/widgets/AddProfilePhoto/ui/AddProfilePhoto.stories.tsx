import { AddProfilePhoto } from '@/widgets/AddProfilePhoto'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: AddProfilePhoto,
  tags: ['autodocs'],
  title: 'Widgets/AddProfilePhoto',
} satisfies Meta<typeof AddProfilePhoto>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    avatar: '',
  },
}
