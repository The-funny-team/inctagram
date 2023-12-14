import type { Meta, StoryObj } from '@storybook/react'

import {
  ArrowDownIcon,
  ArrowLeftIcon,
  BellNotifyIcon,
  CheckboxIcon,
  EyeOutlineIcon,
  GithubIcon,
  GoogleIcon,
  RecaptchaIcon,
  SearchOutlineIcon,
} from '@/shared/assets'

import { IconsList } from './IconsList'

const meta = {
  argTypes: {},
  component: IconsList,
  tags: ['autodocs'],
  title: 'Icons/Icons list',
} satisfies Meta<typeof IconsList>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowDown: Story = {
  args: {
    children: (
      <>
        <ArrowDownIcon />
      </>
    ),
  },
}

export const ArrowLeft: Story = {
  args: {
    children: (
      <>
        <ArrowLeftIcon />
      </>
    ),
  },
}

export const Checkbox: Story = {
  args: {
    children: (
      <>
        <CheckboxIcon />
      </>
    ),
  },
}

export const Github: Story = {
  args: {
    children: (
      <>
        <GithubIcon />
      </>
    ),
  },
}

export const Google: Story = {
  args: {
    children: (
      <>
        <GoogleIcon />
      </>
    ),
  },
}

export const Recaptcha: Story = {
  args: {
    children: (
      <>
        <RecaptchaIcon />
      </>
    ),
  },
}

export const EyeOutline: Story = {
  args: {
    children: (
      <>
        <EyeOutlineIcon />
      </>
    ),
  },
}

export const SearchOutline: Story = {
  args: {
    children: (
      <>
        <SearchOutlineIcon />
      </>
    ),
  },
}

export const BellNotify: Story = {
  args: {
    children: (
      <>
        <BellNotifyIcon />
      </>
    ),
  },
}
