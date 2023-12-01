import type { Meta, StoryObj } from '@storybook/react'

import { ForgotPassword } from '@/widgets/ForgotPassword/ui/ForgotPassword'

const meta = {
  component: ForgotPassword,
  decorators: [
    Story => (
      <div
        style={{
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'center',
          marginTop: '80px',
        }}
      >
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  title: 'Widgets/ForgotPassword',
} satisfies Meta<typeof ForgotPassword>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
