import { ReactNode } from 'react'
import clsx from 'clsx'
import styles from './ui-root-layout.module.scss'

export type UIFormPageLayoutProps = {
  className?: string
  content?: ReactNode
  header?: ReactNode
}

export function UIRootLayout({ className, content, header }: UIFormPageLayoutProps) {
  return (
    <div className={clsx(styles['ui-root-layout'], className)}>
      {header}
      <main className={styles['main']}>
        <div className={styles['content']}>{content}</div>
      </main>
    </div>
  )
}
