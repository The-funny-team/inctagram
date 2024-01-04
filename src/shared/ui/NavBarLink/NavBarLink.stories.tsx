import type { Meta, StoryObj } from '@storybook/react'

import { FilledHomeIcon, HomeIcon } from '@/shared/assets'

import { NavBarLink } from './NavBarLink'

const meta = {
  component: NavBarLink,
  tags: ['autodocs'],
  title: 'Components/NavBarLink',
} satisfies Meta<typeof NavBarLink>

export default meta
type Story = StoryObj<typeof meta>

export const DefaultNavBarLink: Story = {
  args: {
    activeIcon: <FilledHomeIcon />,
    children: 'Home',
    defaultIcon: <HomeIcon />,
    isActive: false,
    linkUrl: 'example.url',
  },
}

export const DisabledNavBarLink: Story = {
  args: {
    activeIcon: <FilledHomeIcon />,
    children: 'Home',
    defaultIcon: <HomeIcon />,
    disabled: true,
    isActive: false,
    linkUrl: 'example.url',
  },
}

export const ActiveNavBarLink: Story = {
  args: {
    activeIcon: <FilledHomeIcon />,
    children: 'Home',
    defaultIcon: <HomeIcon />,
    isActive: true,
    linkUrl: 'example.url',
  },
}
