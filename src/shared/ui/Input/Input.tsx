import React, { ChangeEvent, ComponentPropsWithoutRef, forwardRef, useState } from 'react'

import { EyeOutlineIcon, SearchOutlineIcon } from '@/shared/assets'
import clsx from 'clsx'

import s from './Input.module.scss'

type Props = {
  error?: string
  label?: string
  onEnter?: ComponentPropsWithoutRef<'input'>['onKeyDown']
  onValueChange?: (value: string) => void
  type: 'password' | 'search' | 'text'
  value?: string
} & ComponentPropsWithoutRef<'input'>

export const Input = forwardRef<HTMLInputElement, Props>((props, ref) => {
  const { className, error, label, onEnter, onKeyDown, onValueChange, type, value, ...rest } = props

  const [isVisible, setIsVisible] = useState<boolean>(false)

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (onValueChange) {
      onValueChange(e.target.value)
    }
  }

  const onPressKeyHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code === 'Enter') {
      onEnter?.(e)
    }
    onKeyDown?.(e)
  }

  const showPassword = () => {
    if (!rest.disabled) {
      setIsVisible(prevState => !prevState)
    }
  }
  const classNames = {
    eyeIcon: clsx(s.eyeIcon, rest.disabled && s.disabledIcon),
    input: clsx(
      s.input,
      type === 'search' && s.searchInput,
      type === 'password' && s.passwordInput,
      error && s.error
    ),
    label: clsx(s.label, rest.disabled && s.disabledLabel),
    searchIcon: clsx(s.searchIcon),
    span: clsx(s.span, rest.disabled && s.disabledSpan),
    textField: clsx(s.textField),
    wrapper: clsx(s.wrapper, className),
  }

  return (
    <div className={classNames.wrapper}>
      {label && (
        <label className={classNames.label} htmlFor={label}>
          {label}
        </label>
      )}
      <div className={classNames.textField}>
        {type === 'search' && <SearchOutlineIcon className={classNames.searchIcon} />}
        <input
          className={classNames.input}
          id={label}
          onChange={onChangeHandler}
          onKeyDown={onPressKeyHandler}
          ref={ref}
          type={type === 'password' && isVisible ? 'text' : type}
          value={value}
          {...rest}
        />
        {type === 'password' && (
          <EyeOutlineIcon className={classNames.eyeIcon} onClick={showPassword} />
        )}
      </div>
      {error && <span className={classNames.span}>{error}</span>}
    </div>
  )
})
