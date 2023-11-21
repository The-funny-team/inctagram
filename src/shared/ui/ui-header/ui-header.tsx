import { ReactNode } from 'react'
import clsx from 'clsx'
import { UILogo } from '../ui-logo/ui-logo'
import styles from './ui-header.module.scss'

type UIHeaderProps = {
  className?: string
  content?: ReactNode
}

export function UIHeader({ className, content }: UIHeaderProps) {
  return (
    <header className={clsx(className, styles['ui-header'])}>
      <UILogo />
      {content}
    </header>
  )
}
