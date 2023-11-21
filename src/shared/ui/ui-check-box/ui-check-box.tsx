import { ReactNode } from 'react'
import clsx from 'clsx'
import styles from './ui-check-box.module.scss'

type UICheckBoxProps = {
  children?: ReactNode
  className?: string
}

export function UICheckBox({ children, className }: UICheckBoxProps) {
  return (
    <div className={clsx(styles['ui-checkbox'], className)}>
      <input id={'checkbox'} name={'checkbox'} type={'checkbox'} />
      {children}
    </div>
  )
}
