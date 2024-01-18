import React, { PropsWithChildren, ReactElement } from 'react'

import { RootLayout } from '@/shared/ui'
import { NavBar } from '@/widgets/NavBar'
import { NextPage } from 'next'

import s from './WithNavbarLayout.module.scss'

export const WithNavbarLayout: NextPage<PropsWithChildren<any>> = ({ children }) => {
  return (
    <div className={s.main}>
      <NavBar />
      {children}
    </div>
  )
}
export const getWithNavbarLayout = (page: ReactElement) => {
  return (
    <RootLayout>
      <WithNavbarLayout>{page}</WithNavbarLayout>
    </RootLayout>
  )
}
