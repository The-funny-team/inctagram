import { useState } from 'react'

import { Meta } from '@storybook/react'

import { DatePicker } from './DatePicker'

export default {
  component: DatePicker,
  title: 'Components/DatePicker',
} as Meta<typeof DatePicker>

export const Default = {
  render() {
    const [startDate, setStartDate] = useState<Date | null>(null)

    return (
      <DatePicker
        disabled={false}
        label={'date of birth'}
        placeholder={'00.00.0000'}
        setStartDate={setStartDate}
        startDate={startDate}
      />
    )
  },
}

export const DefaultWithError = {
  render() {
    const [startDate, setStartDate] = useState<Date | null>(null)

    return (
      <DatePicker
        disabled={false}
        error={'some error'}
        label={'date of birth'}
        placeholder={'00.00.0000'}
        setStartDate={setStartDate}
        startDate={startDate}
      />
    )
  },
}

export const DefaultDisabled = {
  render() {
    const [startDate, setStartDate] = useState<Date | null>(null)

    return (
      <DatePicker
        disabled
        label={'date of birth'}
        placeholder={'00.00.0000'}
        setStartDate={setStartDate}
        startDate={startDate}
      />
    )
  },
}

export const RangeMode = {
  render() {
    const [startDate, setStartDate] = useState<Date | null>(null)
    const [endDate, setEndDate] = useState<Date | null>(null)

    return (
      <DatePicker
        endDate={endDate}
        label={'select range'}
        placeholder={'00.00.0000 - 00.00.0000'}
        setEndDate={setEndDate}
        setStartDate={setStartDate}
        startDate={startDate}
      />
    )
  },
}
