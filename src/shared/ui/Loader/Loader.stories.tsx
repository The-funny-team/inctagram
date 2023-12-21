import type { Meta, StoryObj } from '@storybook/react'

import { Loader } from './Loader'

const meta = {
  component: Loader,
  tags: ['autodocs'],
  title: 'Components/Loader',
} satisfies Meta<typeof Loader>

export default meta
type Story = StoryObj<typeof meta>

export const DefaultLoader: Story = {}
