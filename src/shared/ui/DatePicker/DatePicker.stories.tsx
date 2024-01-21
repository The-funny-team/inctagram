import { ComponentProps, useState } from 'react'

import { Meta } from '@storybook/react'

import { DatePicker } from './DatePicker'

export default {
  component: DatePicker,
  tags: ['autodocs'],
  title: 'Components/DatePicker',
} as Meta<typeof DatePicker>

const DatePickerWithState = ({
  isRange = false,
  ...props
}: Omit<
  ComponentProps<typeof DatePicker>,
  'endDate' | 'setEndDate' | 'setStartDate' | 'startDate'
> & {
  isRange?: boolean
}) => {
  const [startDate, setStartDate] = useState<Date | null>(null)
  const [endDate, setEndDate] = useState<Date | null>(null)

  let range = {}

  if (isRange) {
    range = {
      endDate,
      setEndDate,
    }
  }

  return <DatePicker {...props} {...range} setStartDate={setStartDate} startDate={startDate} />
}

export const Default = {
  render() {
    return <DatePickerWithState label={'date of birth'} placeholder={'00.00.0000'} />
  },
}

export const WithError = {
  render() {
    return (
      <DatePickerWithState
        error={'some error'}
        label={'date of birth'}
        placeholder={'00.00.0000'}
      />
    )
  },
}

export const Disabled = {
  render() {
    return <DatePickerWithState disabled label={'date of birth'} placeholder={'00.00.0000'} />
  },
}

export const RangeMode = {
  render() {
    return (
      <DatePickerWithState isRange label={'select range'} placeholder={'00.00.0000 - 00.00.0000'} />
    )
  },
}
