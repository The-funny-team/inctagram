import { Devices } from '@/widgets/Devices'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  component: Devices,
  tags: ['autodocs'],
  title: 'Widgets/Devices',
} satisfies Meta<typeof Devices>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
