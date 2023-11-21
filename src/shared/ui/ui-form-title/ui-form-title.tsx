import clsx from 'clsx'
import styles from './ui-form-title.module.scss'

type UIFormTitleProps = {
  className?: string
  title: string
}

export function UIFormTitle({ className, title }: UIFormTitleProps) {
  return (
    <div className={clsx(className, styles['ui-form-title'])}>
      <h1>{title}</h1>
    </div>
  )
}
