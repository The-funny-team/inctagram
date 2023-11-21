import { ButtonHTMLAttributes } from 'react'
import clsx from 'clsx'
import styles from './ui-button.module.scss'

export type UIButtonProps = {
  variant: 'primary' | 'secondary'
} & ButtonHTMLAttributes<HTMLButtonElement>

export function UIButton({ className, variant, ...props }: UIButtonProps) {
  return (
    <button
      {...props}
      className={clsx(
        className,
        styles['ui-button'],
        {
          primary: styles['primary'],
          secondary: styles['secondary'],
        }[variant]
      )}
    ></button>
  )
}
