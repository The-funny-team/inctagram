import type { Meta, StoryObj } from '@storybook/react'

import { ComponentProps, useState } from 'react'

import FlagEnglish from '../../assets/icons/FlagEnglish'
import FlagRussian from '../../assets/icons/FlagRussian'
import { Select } from './Select'

const meta = {
  component: Select,
  tags: ['autodocs'],
  title: 'Components/Select',
} satisfies Meta<typeof Select>

export default meta
type Story = StoryObj<typeof meta>

const optionsDefault = [
  { label: 'Item 1', value: 'item-1' },
  { label: 'Item 2', value: 'item-2' },
  { label: 'Item 3', value: 'item-3' },
  { label: 'Item 4', value: 'item-4' },
  { label: 'Item 5', value: 'item-5' },
  { label: 'Item 6', value: 'item-6' },
  { label: 'Item 7', value: 'item-7' },
  { label: 'Item 8', value: 'item-8' },
]
const optionsWithIcons = [
  {
    label: (
      <>
        <span style={{ alignItems: 'center', display: 'flex', justifyContent: 'center' }}>
          <FlagRussian />
        </span>
        <span>Russian</span>
      </>
    ),
    value: 'ru',
  },
  {
    label: (
      <>
        <span style={{ alignItems: 'center', display: 'flex', justifyContent: 'center' }}>
          <FlagEnglish />
        </span>
        <span>English</span>
      </>
    ),
    value: 'en',
  },
]
const optionsOnlyIcons = [
  {
    label: (
      <span style={{ alignItems: 'center', display: 'flex', justifyContent: 'center' }}>
        <FlagRussian />
      </span>
    ),
    value: 'ru',
  },
  {
    label: (
      <span style={{ alignItems: 'center', display: 'flex', justifyContent: 'center' }}>
        <FlagEnglish />
      </span>
    ),
    value: 'en',
  },
]

const SelectWithHook = (props: Omit<ComponentProps<typeof Select>, 'onValueChange' | 'value'>) => {
  const [value, setValue] = useState<string>()

  return (
    <Select
      disabled={props.disabled}
      label={props.label}
      onValueChange={setValue}
      options={props.options}
      placeholder={props.placeholder}
      value={value}
    />
  )
}

export const Default = {
  render: () => <SelectWithHook options={optionsDefault} placeholder={'default'} />,
}
export const WithLabel = {
  render: () => (
    <SelectWithHook label={'With label'} options={optionsDefault} placeholder={'default'} />
  ),
}
export const Disabled = {
  render: () => (
    <SelectWithHook disabled label={'Disabled'} options={optionsDefault} placeholder={'disabled'} />
  ),
}
export const WithIcons = {
  render: () => (
    <SelectWithHook label={'With icons'} options={optionsWithIcons} placeholder={'With icons'} />
  ),
}
export const OnlyIcons = {
  render: () => (
    <SelectWithHook label={'Icons only'} options={optionsOnlyIcons} placeholder={'Icons only'} />
  ),
}
