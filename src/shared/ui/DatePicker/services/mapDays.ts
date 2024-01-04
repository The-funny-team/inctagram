import { DateObject } from 'react-multi-date-picker'

const currentDate = {
  day: new Date().getDate(),
  month: new Date().getMonth(),
  year: new Date().getFullYear(),
}

type MapDaysPropsType = {
  className: string
  currentMonth: any
  date: DateObject
  isSameDate: (date: DateObject, arg2: DateObject) => boolean
  selectedDate: DateObject | DateObject[]
  today: DateObject
}

const customStyles = {
  general: {
    fontSize: '16px',
    lineHeight: '24px',
  },
  today: {
    backgroundColor: 'transparent',
    boxShadow: 'none',
    fontWeight: '700',
    height: '28px',
    padding: '4px',
    width: '28px',
  },
}

export const mapDays = ({
  currentMonth,
  date,
  isSameDate,
  selectedDate,
  today,
}: MapDaysPropsType) => {
  const props = {
    style: {},
  }
  const isWeekend = [0, 6].includes(date.weekDay.index)
  const curDate =
    date.day === today.day &&
    currentMonth.index === currentDate.month &&
    currentDate.year === date.year

  props.style = customStyles.general

  if (isSameDate(date, today)) {
    props.style = {
      ...props.style,
      ...customStyles.today,
    }
  }

  if (isSameDate(date, today)) {
    props.style = {
      ...props.style,
      ...customStyles.today,
    }
  }

  if (isWeekend) {
    props.style = {
      ...props.style,
      color: 'var(--color-danger-300)',
    }
  }

  if (!isWeekend) {
    props.style = {
      ...props.style,
      color: curDate ? 'var(--color-accent-500)' : '#FFFFFF',
    }
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
