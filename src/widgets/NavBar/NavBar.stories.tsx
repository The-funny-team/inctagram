import type { Meta, StoryObj } from '@storybook/react'

import { NavBar } from './NavBar'

const meta = {
  component: NavBar,
  tags: ['autodocs'],
  title: 'Widgets/NavBar',
} satisfies Meta<typeof NavBar>

export default meta
type Story = StoryObj<typeof meta>

export const NavBarDefault: Story = {}
