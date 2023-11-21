import { InputHTMLAttributes, PropsWithRef, useId } from 'react'
import clsx from 'clsx'
import styles from './ui-text-input.module.scss'

export type UITextFieldProps = {
  className?: string
  error?: string
  inputProps?: PropsWithRef<InputHTMLAttributes<HTMLInputElement>>
  label?: string
}

export function UITextInput({ className, error, inputProps, label }: UITextFieldProps) {
  const id = useId()

  return (
    <div className={clsx(className, styles['ui-text-input'])}>
      {label && <label htmlFor={id}>{label}</label>}
      <input {...inputProps} className={clsx(inputProps?.className)} id={id} type={'text'} />
      {/* TODO Нужно добавить обработку */}
      {error && <div className={styles['error-message']}>{error}</div>}
    </div>
  )
}
