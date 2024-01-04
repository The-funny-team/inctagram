import { DateObject } from 'react-multi-date-picker'

type MapDaysPropsType = {
  className: string
  currentMonth: any
  date: DateObject
  isSameDate: (date: DateObject, arg2: DateObject) => boolean
  selectedDate: DateObject | DateObject[]
  today: DateObject
}

export const mapDays = ({ date, today }: MapDaysPropsType) => {
  const props = {
    className: '',
    style: {},
  }
  const isWeekend = [0, 6].includes(date.weekDay.index)

  if (isWeekend) {
    props.className = 'weekend'
  }

  if (date.toDays() < today.toDays() && !isWeekend) {
    return {
      style: {
        ...props.style,
        color: 'var(--color-light-900)',
      },
    }
  }

  if (date.toDays() === today.toDays() && isWeekend) {
    return {
      style: {
        ...props.style,
        color: 'var(--color-accent-700)',
      },
    }
  }

  return props
}
