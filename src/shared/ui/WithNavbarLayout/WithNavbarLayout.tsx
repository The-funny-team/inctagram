import React, { PropsWithChildren, ReactElement } from 'react'

import { RootLayout } from '@/shared/ui'
import { NavBar } from '@/widgets/NavBar/NavBar'
import { NextPage } from 'next'

import s from 'src/shared/ui/WithNavbarLayout/WithNavbarLayout.module.scss'

export const WithNavbarLayout: NextPage<PropsWithChildren<any>> = ({ children }) => {
  return (
    <RootLayout>
      <NavBar />
      <div className={s.main}> {children}</div>
    </RootLayout>
  )
}
export const getWithNavbarLayout = (page: ReactElement) => {
  return <WithNavbarLayout>{page}</WithNavbarLayout>
}
