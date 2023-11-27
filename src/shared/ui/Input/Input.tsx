import React, { ChangeEvent, ComponentPropsWithoutRef, forwardRef, useState } from 'react'

import { EyeOutlineIcon, SearchOutlineIcon } from '@/shared/assets'

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
  const { error, label, onEnter, onKeyDown, onValueChange, type, value, ...rest } = props

  const [isVisible, setIsVisible] = useState(false)

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
    setIsVisible(prevState => !prevState)
  }

  return (
    <div className={s.wrapper}>
      {label && <label htmlFor={'input'}>{label}</label>}
      <div className={s.textField}>
        {type === 'search' && <SearchOutlineIcon className={s.searchIcon} />}
        <input
          className={`${s.input} ${type === 'search' ? s.searchInput : ''} ${
            type === 'password' ? s.passwordInput : ''
          } ${error && s.error}`}
          id={'input'}
          onChange={onChangeHandler}
          onKeyDown={onPressKeyHandler}
          ref={ref}
          type={type === 'password' && isVisible ? 'text' : type}
          value={value}
          {...rest}
        />
        {type === 'password' && <EyeOutlineIcon className={s.eyeIcon} onClick={showPassword} />}
      </div>
      {error && <span>{error}</span>}
    </div>
  )
})
