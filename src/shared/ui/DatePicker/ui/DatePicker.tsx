import DatePick, { DateObject } from 'react-multi-date-picker'

import { CalendarBtnLeftIcon, CalendarBtnRightIcon } from '@/shared/assets'
import { CalendarIcon } from '@/shared/assets/icons/CalendarIcon'
import { useTranslation } from '@/shared/lib/hooks'
import { mapDays } from '@/shared/ui/DatePicker/services/mapDays'
import { dateRangeParser } from '@/shared/ui/DatePicker/services/parseDate'
import { ButtonsPropsType, DatePickerType, PropsInputType } from '@/shared/ui/DatePicker/types'
import { clsx } from 'clsx'

import s from './DatePicker.module.scss'

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
                {label && (
                  <label className={classNames.label} htmlFor={label}>
                    {label}
                  </label>
                )}
                <div className={s.inputWrapper}>
                  <div className={classNames.icon} onClick={openCalendar}>
                    <CalendarIcon />
                  </div>
                  <DatePickerInput
                    className={classNames.input}
                    id={label}
                    onClick={openCalendar}
                    placeholder={placeholder}
                    readonly
                    type={'text'}
                    value={stringDate}
                  />
                  {error && <span className={classNames.errorMessage}>{error}</span>}
                </div>
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

const DatePickerButtons = ({ className, direction, handleClick }: ButtonsPropsType) => {
  return (
    <div>
      <i
        onClick={handleClick}
        style={{
          cursor: 'pointer',
        }}
      >
        <div className={className}>
          {direction === 'left' ? <CalendarBtnLeftIcon /> : <CalendarBtnRightIcon />}
        </div>
      </i>
    </div>
  )
}

const DatePickerInput = ({
  className,
  id,
  onClick,
  placeholder,
  readonly,
  type,
  value,
  ...otherProps
}: PropsInputType) => {
  return (
    <input
      className={className}
      id={id}
      onClick={onClick}
      placeholder={placeholder}
      readOnly
      type={type}
      value={value}
      {...otherProps}
    />
  )
}
