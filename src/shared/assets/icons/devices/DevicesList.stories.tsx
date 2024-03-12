import type { Meta, StoryObj } from '@storybook/react'

import { BrowserIcon } from '@/shared/assets/icons/devices/BrowserIcon'
import { ChromeIcon } from '@/shared/assets/icons/devices/ChromeIcon'
import { DesktopIcon } from '@/shared/assets/icons/devices/DesktopIcon'
import { DevicesList } from '@/shared/assets/icons/devices/DevicesList'
import { FireFoxIcon } from '@/shared/assets/icons/devices/FireFoxIcon'
import { MobileIcon } from '@/shared/assets/icons/devices/MobileIcon'
import { OperaIcon } from '@/shared/assets/icons/devices/OperaIcon'

const meta = {
  argTypes: {},
  component: DevicesList,
  tags: ['autodocs'],
  title: 'Icons/Devices list',
} satisfies Meta<typeof DevicesList>

export default meta
type Story = StoryObj<typeof meta>

export const Browser: Story = {
  args: {
    children: (
      <>
        <BrowserIcon />
      </>
    ),
  },
}
export const Chrome: Story = {
  args: {
    children: (
      <>
        <ChromeIcon />
      </>
    ),
  },
}
export const Desktop: Story = {
  args: {
    children: (
      <>
        <DesktopIcon />
      </>
    ),
  },
}
export const FireFox: Story = {
  args: {
    children: (
      <>
        <FireFoxIcon />
      </>
    ),
  },
}
export const Mobile: Story = {
  args: {
    children: (
      <>
        <MobileIcon />
      </>
    ),
  },
}
export const Opera: Story = {
  args: {
    children: (
      <>
        <OperaIcon />
      </>
    ),
  },
}
