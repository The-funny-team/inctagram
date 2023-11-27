import { ComponentPropsWithoutRef, ReactElement } from 'react'

import { BellNotifyIcon } from '@/shared/assets'
import { ROUTES_URL } from '@/shared/const'
import { Select, Typography } from '@/shared/ui'
import { clsx } from 'clsx'
import Link from 'next/link'

import s from './Header.module.scss'

type Props = {
  isLoggedIn: boolean
  languageOptions: Array<{ label: ReactElement | string; value: string }>
  languageValue: string
} & ComponentPropsWithoutRef<'header'>

export const Header = ({
  className,
  isLoggedIn,
  languageOptions,
  languageValue,
  ...restProps
}: Props) => {
  const classNames = {
    authLinks: s.authLinks,
    container: s.container,
    header: clsx(s.header, className),
    headerDashboard: s.headerDashboard,
    link: s.link,
    signInLink: s.signInLink,
    signUpLink: s.signUpLink,
  }

  return (
    <header className={classNames.header} {...restProps}>
      <div className={classNames.container}>
        <Typography as={Link} className={classNames.link} href={'/'}>
          Inctagram
        </Typography>
        <div className={classNames.headerDashboard}>
          {isLoggedIn && <BellNotifyIcon />}
          <Select options={languageOptions} value={languageValue} />
          {!isLoggedIn && (
            <div className={classNames.authLinks}>
              <Typography as={Link} className={classNames.signInLink} href={ROUTES_URL.SIGN_IN}>
                Log in
              </Typography>
              <Typography as={Link} className={classNames.signUpLink} href={ROUTES_URL.SIGN_UP}>
                Sign up
              </Typography>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
