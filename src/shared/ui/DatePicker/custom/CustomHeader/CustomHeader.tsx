import { ReactDatePickerCustomHeaderProps } from 'react-datepicker'

import { CalendarBtnLeftIcon, CalendarBtnRightIcon } from '@/shared/assets'
import { getMonth, getYear } from 'date-fns'

import s from './CustomHeader.module.scss'

type CustomHeaderType = {
  months: string[]
  years: number[]
}
export const CustomHeader = ({
  changeMonth,
  changeYear,
  date,
  decreaseMonth,
  increaseMonth,
  months, //...rest
  years,
}: ReactDatePickerCustomHeaderProps & CustomHeaderType) => {
  const classNames = {
    button: s.button,
    buttonBox: s.buttonBox,
    header: s.header,
    select: s.selectStyle,
    selectBlock: s.selectBlock,
  }

  return (
    <div className={classNames.header}>
      <div className={classNames.buttonBox}>
        <div className={classNames.selectBlock}>
          <select
            className={classNames.select}
            onChange={({ target: { value } }) => changeMonth(months.indexOf(value))}
            value={months[getMonth(date)]}
          >
            {months.map((option, key) => (
              <option key={key} value={option}>
                {option}
              </option>
            ))}
          </select>
          <select
            className={classNames.select}
            onChange={({ target: { value } }) => changeYear(Number(value))}
            value={getYear(date)}
          >
            {years.map((option, key) => (
              <option key={key} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div style={{ display: 'flex' }}>
          <button className={classNames.button} onClick={decreaseMonth} type={'button'}>
            <CalendarBtnLeftIcon />
          </button>
          <button className={classNames.button} onClick={increaseMonth} type={'button'}>
            <CalendarBtnRightIcon />
          </button>
        </div>
      </div>
    </div>
  )
}
