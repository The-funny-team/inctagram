import { MouseEventHandler } from 'react'
import DatePicker, { DateObject } from 'react-multi-date-picker'

import { CalendarBtnLeftIcon, CalendarBtnRightIcon } from '@/shared/assets'
import { CalendarIcon } from '@/shared/assets/icons/CalendarIcon'
import { useTranslation } from '@/shared/lib/hooks'
import { mapDays } from '@/shared/ui/DatePicker/services/mapDays'
import { dateRangeParser } from '@/shared/ui/DatePicker/services/parseDate'
import { BaseDatePickerProps, DatePickerType } from '@/shared/ui/DatePicker/types'
import { clsx } from 'clsx'

import s from './DatePickerCustom.module.scss'

const DEFAULT_PROPS: Partial<BaseDatePickerProps> = {
  arrow: false,
  dateSeparator: ' - ',
  headerOrder: ['MONTH_YEAR', 'LEFT_BUTTON', 'RIGHT_BUTTON'],
  multiple: false,
  shadow: false,
  type: 'custom',
  weekStartDayIndex: 1,
}

export function DatePickerCustom<T extends boolean = false>({
  error,
  format = 'DD/MM/YYYY',
  label,
  onChange,
  rangeMode = false as T,
  value,
  ...otherProps
}: DatePickerType<T>) {
  const { text } = useTranslation()
  const t = text.calendar
  const dateChangeHandler = (date: DateObject | DateObject[]) => {
    onChange(dateRangeParser(rangeMode, date))
  }

  const classNames = {
    errorMessage: clsx(s.errorMessage),
    icon: clsx(s.customInputIcon, error && s.error),
    input: clsx(s.input, error && s.error, rangeMode && s.range),
    inputWrapper: clsx(s.inputWrapper),
    label: clsx(s.label),
  }

  return (
    <div>
      <div>
        <DatePicker
          className={`${s.datePicker} ${s.bgDark}`}
          format={format}
          mapDays={mapDays}
          months={t.months}
          onChange={dateChangeHandler}
          range={rangeMode}
          render={(stringDate, openCalendar) => {
            return (
              <div>
                <div className={s.inputWrapper}>
                  <div className={classNames.icon} onClick={openCalendar}>
                    <CalendarIcon />
                  </div>
                  {label && (
                    <label className={classNames.label} htmlFor={label}>
                      {label}
                    </label>
                  )}
                  <input
                    className={classNames.input}
                    defaultValue={stringDate}
                    id={label}
                    onClick={openCalendar}
                    placeholder={'00/00/0000'}
                    type={'text'}
                    value={stringDate}
                  />
                </div>
                {error && <span className={classNames.errorMessage}>{error}</span>}
              </div>
            )
          }}
          renderButton={(
            direction: string,
            handleClick: MouseEventHandler<HTMLElement> | undefined
          ) => (
            <div>
              <i
                onClick={handleClick}
                style={{
                  cursor: 'pointer',
                }}
              >
                <div className={s.shapeBtn}>
                  {direction === 'left' ? <CalendarBtnLeftIcon /> : <CalendarBtnRightIcon />}
                </div>
              </i>
            </div>
          )}
          value={value}
          weekDays={t.weekDays}
          {...DEFAULT_PROPS}
          {...otherProps}
        />
      </div>
    </div>
  )
}
