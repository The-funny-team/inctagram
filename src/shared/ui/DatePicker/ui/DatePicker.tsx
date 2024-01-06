import DatePick, { DateObject } from 'react-multi-date-picker'

import { CalendarIcon } from '@/shared/assets/icons/CalendarIcon'
import { useTranslation } from '@/shared/lib/hooks'
import { mapDays } from '@/shared/ui/DatePicker/services/mapDays'
import { dateRangeParser } from '@/shared/ui/DatePicker/services/parseDate'
import { DatePickerType } from '@/shared/ui/DatePicker/types'
import { clsx } from 'clsx'

import s from './DatePicker.module.scss'

import { DatePickerButtons } from '../componets/DatePickerButtons'
import { DatePickerInput } from '../componets/DatePickerInput'

export function DatePicker<T extends boolean = false>({
  error,
  format = 'DD/MM/YYYY',
  label,
  onChange,
  placeholder = '00/00/0000',
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
        <DatePick
          arrow={false}
          className={`${s.datePicker} ${s.bgDark}`}
          dateSeparator={' - '}
          format={format}
          headerOrder={['MONTH_YEAR', 'LEFT_BUTTON', 'RIGHT_BUTTON']}
          mapDays={mapDays}
          months={t.months}
          multiple={false}
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
                      {rangeMode ? t.label.range : t.label.birth}
                    </label>
                  )}
                  <DatePickerInput
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
          renderButton={
            <DatePickerButtons className={s.shapeBtn} direction={'left'} handleClick={() => {}} />
          }
          shadow={false}
          showOtherDays
          type={'custom'}
          value={value}
          weekDays={t.weekDays}
          weekStartDayIndex={1}
          {...otherProps}
        />
      </div>
    </div>
  )
}
