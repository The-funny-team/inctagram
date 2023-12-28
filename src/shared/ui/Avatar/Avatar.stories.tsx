import type { Meta, StoryObj } from '@storybook/react'

import { Avatar } from './Avatar'

const meta = {
  component: Avatar,
  tags: ['autodocs'],
  title: 'Components/Avatar',
} satisfies Meta<typeof Avatar>

export default meta
type Story = StoryObj<typeof meta>

export const AvatarWithImage: Story = {
  args: {
    size: 192,
    src: 'https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg',
    userName: 'Don Joe',
  },
}

export const AvatarWithoutImage: Story = {
  args: {
    iconSize: 48,
    size: 192,
    userName: 'Don Joe',
  },
}

export const SmallAvatarWithoutImage: Story = {
  args: {
    iconSize: 16,
    size: 48,
    userName: 'Don Joe',
  },
}
