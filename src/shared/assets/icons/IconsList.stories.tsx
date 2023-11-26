import type { Meta, StoryObj } from '@storybook/react'

import {
  ArrowLeftIcon,
  CheckboxIcon,
  EmailConfirmedIcon,
  ExpiredTimeIcon,
  GithubIcon,
  GoogleIcon,
  RecaptchaIcon,
} from '@/shared/assets'

import ArrowDown from './ArrowDown'
import { IconsList } from './IconsList'

const meta = {
  argTypes: {},
  component: IconsList,
  tags: ['autodocs'],
  title: 'Icons/Icons list',
} satisfies Meta<typeof IconsList>

export default meta
type Story = StoryObj<typeof meta>

export const ArrowDownIcon: Story = {
  args: {
    children: (
      <>
        <ArrowDown />
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

export const EmailConfirmed: Story = {
  args: {
    children: (
      <>
        <EmailConfirmedIcon />
      </>
    ),
  },
}

export const ExpiredTime: Story = {
  args: {
    children: (
      <>
        <ExpiredTimeIcon />
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
