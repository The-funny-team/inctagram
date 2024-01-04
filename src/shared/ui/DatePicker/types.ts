import { CalendarProps, DatePickerProps } from 'react-multi-date-picker'

type GenPickerProps<T> = {
  onChange: (value: T) => void
  value: T
}

export type RangePropsType<V extends boolean> = {
  rangeMode?: V
} & GenPickerProps<V extends true ? string[] : string>

export type BaseDatePickerProps = Omit<CalendarProps, 'onChange'> & DatePickerProps
type ReducedProps = 'arrow' | 'onChange' | 'range' | 'value'

export interface DatePickerType<V extends boolean>
  extends Omit<BaseDatePickerProps, ReducedProps>,
    RangePropsType<V> {
  error?: string
  label?: string
}
