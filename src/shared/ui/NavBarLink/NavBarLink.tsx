import { ReactNode } from 'react'

import clsx from 'clsx'
import Link from 'next/link'

import s from './NavBarLink.module.scss'
type Props = {
  activeIcon?: ReactNode
  children: string
  className?: string
  defaultIcon: ReactNode
  disabled?: boolean
  isActive: boolean
  linkUrl: string
}

export const NavBarLink = ({
  activeIcon,
  children,
  className,
  defaultIcon,
  disabled,
  isActive,
  linkUrl,
}: Props) => {
  const linkIcon = isActive ? activeIcon || defaultIcon : defaultIcon
  const classNames = {
    link: clsx(s.link, disabled && s.disabledLink, isActive && s.activeLink, className),
    title: clsx(s.title),
  }

  return (
    <Link className={classNames.link} href={linkUrl}>
      {linkIcon}
      <span className={classNames.title}>{children}</span>
    </Link>
  )
}
