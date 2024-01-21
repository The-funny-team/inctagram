import { ComponentPropsWithoutRef } from 'react'

import { useMeQuery } from '@/shared/api/profileApi'
import { BellNotifyIcon } from '@/shared/assets'
import { ROUTES_URL } from '@/shared/const'
import { useTranslation } from '@/shared/lib/hooks'
import { Select, Typography } from '@/shared/ui'
import { clsx } from 'clsx'
import Image from 'next/image'
import Link from 'next/link'

import s from './Header.module.scss'

import { en, ru } from '../../../../locales'
import flagRu from '/public/flagRussia.png'
import flagEng from '/public/flagUnitedKingdom.png'

const languageOptions = [
  {
    label: (
      <>
        <Image alt={'flag russian'} height={20} src={flagRu} width={20} />
        <span>Russian</span>
      </>
    ),
    value: 'ru',
  },
  {
    label: (
      <>
        <Image alt={'flag english'} height={20} src={flagEng} width={20} />
        <span>English</span>
      </>
    ),
    value: 'en',
  },
]

export const Header = ({ className, ...restProps }: ComponentPropsWithoutRef<'header'>) => {
  const { router, text } = useTranslation()
  const { data } = useMeQuery()

  const changeLangHandler = (value: string) => {
    router.push({ pathname: router.pathname, query: router.query }, router.asPath, {
      locale: value,
    })
  }

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
        <Typography as={Link} className={classNames.link} href={'/'} variant={'large'}>
          Inctagram
        </Typography>
        <div className={classNames.headerDashboard}>
          {data && <BellNotifyIcon />}
          <Select
            onValueChange={changeLangHandler}
            options={languageOptions}
            value={router.locale}
          />
          {!data && (
            <div className={classNames.authLinks}>
              <Typography
                as={Link}
                className={classNames.signInLink}
                href={ROUTES_URL.SIGN_IN}
                variant={'h3'}
              >
                {text.layout.header.signInBtn}
              </Typography>
              <Typography
                as={Link}
                className={classNames.signUpLink}
                href={ROUTES_URL.SIGN_UP}
                variant={'h3'}
              >
                {text.layout.header.signUpBtn}
              </Typography>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
