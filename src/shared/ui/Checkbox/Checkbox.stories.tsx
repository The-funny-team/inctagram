import type { Meta, StoryObj } from '@storybook/react'

import { useState } from 'react'

import { Checkbox, CheckboxProps } from './Checkbox'

const meta = {
  component: Checkbox,
  tags: ['autodocs'],
  title: 'Components/Checkbox',
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const DefaultCheckbox: Story = {
  args: {
    checked: false,
    label: 'Unchecked checkbox',
  },
}

export const DefaultCheckedCheckbox: Story = {
  args: {
    checked: true,
    label: 'Checked checkbox',
  },
}

export const DisabledCheckedCheckbox: Story = {
  args: {
    checked: true,
    disabled: true,
    label: 'Checkbox',
  },
}

export const DisabledUncheckedCheckbox: Story = {
  args: {
    checked: false,
    disabled: true,
    label: 'Checkbox',
  },
}

const CheckboxWithHooks = (args: CheckboxProps) => {
  const [checked, setChecked] = useState(false)
  const onCheckboxClickHandler = (value: boolean) => {
    setChecked(value)
  }

  return <Checkbox {...args} checked={checked} onCheckedChange={onCheckboxClickHandler} />
}

export const ControlledCheckbox: Story = {
  args: {
    label: 'Controlled checkbox',
  },
  render: args => <CheckboxWithHooks {...args} />,
}
