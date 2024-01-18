import type { Meta, StoryObj } from '@storybook/react'

import { DatePicker } from './DatePicker'

const meta = {
  component: DatePicker,
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
  title: 'Components/DatePicker',
} satisfies Meta<typeof DatePicker>

export default meta
type Story = StoryObj<typeof meta>

export const withoutRangeMode: Story = {
  args: {
    error: undefined,
    label: 'Date select',
    rangeMode: false,
    value: '',
  },
}

export const rangeMode: Story = {
  args: {
    error: undefined,
    label: 'Date range',
    rangeMode: true,
    value: '',
  },
}

export const withError: Story = {
  args: {
    error: 'Error!',
    label: 'Date',
    value: '',
  },
}
