import clsx from 'clsx'
import Link from 'next/link'
import styles from './ui-link.module.scss'

export type UILinkProps = {
  className?: string
} & Parameters<typeof Link>[0]

export function UILink({ className, ...props }: UILinkProps) {
  return <Link {...props} className={clsx(styles['ui-link'], className)}></Link>
}
