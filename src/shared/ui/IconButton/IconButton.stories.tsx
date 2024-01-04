import type { Meta, StoryObj } from '@storybook/react'

import { LogOutIcon } from '@/shared/assets'

import { IconButton } from './IconButton'

const meta = {
  component: IconButton,
  tags: ['autodocs'],
  title: 'Components/IconButton',
} satisfies Meta<typeof IconButton>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Log out',
    icon: <LogOutIcon />,
    onClick: () => console.log('Click on logout button'),
  },
}
