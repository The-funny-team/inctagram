import React, { PropsWithChildren, ReactElement } from 'react'

import { RootLayout } from '@/shared/layouts'
import { NavBar } from '@/widgets/NavBar'
import { NextPage } from 'next'

import s from './NavbarLayout.module.scss'

export const NavbarLayout: NextPage<PropsWithChildren<any>> = ({ children }) => {
  return (
    <div className={s.main}>
      <NavBar />
      {children}
    </div>
  )
}
export const getNavbarLayout = (page: ReactElement) => {
  return (
    <RootLayout>
      <NavbarLayout>{page}</NavbarLayout>
    </RootLayout>
  )
}
