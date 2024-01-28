import { forwardRef } from 'react'

import { CalendarIcon } from '@/shared/assets'
import { clsx } from 'clsx'

import s from './CustomInput.module.scss'

type CustomInputProps = {
  disabled?: boolean
  error?: string
  label?: string
}

export const CustomInput = forwardRef<HTMLInputElement, CustomInputProps>(
  ({ disabled, error, label, ...rest }, ref) => {
    const classNames = {
      icon: clsx(s.icon, disabled && s.disabled, error && s.error),
      inputContainer: clsx(s.inputContainer, error && s.error, disabled && s.disabled),
    }

    return (
      <label className={s.label}>
        <span>{label}</span>
        <div className={classNames.inputContainer}>
          <div className={classNames.icon}>
            <CalendarIcon />
          </div>
          <input disabled={disabled} ref={ref} {...rest} />
        </div>
      </label>
    )
  }
)
