import { ReactNode } from 'react'

import clsx from 'clsx'

import s from './IconButton.module.scss'
type Props = {
  children: string
  className?: string
  icon: ReactNode
  onClick: () => void
}

export const IconButton = ({ children, className, icon, onClick }: Props) => {
  return (
    <button className={clsx(s.button, className)} onClick={onClick}>
      {icon}
      <span className={s.title}>{children}</span>
    </button>
  )
}
