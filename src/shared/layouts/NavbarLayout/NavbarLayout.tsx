import React, { PropsWithChildren, ReactElement } from 'react'

import { RootLayout } from '@/shared/layouts'
import { NavBar } from '@/widgets/NavBar'
import { NextPage } from 'next'

export const NavbarLayout: NextPage<PropsWithChildren<any>> = ({ children }) => {
  return (
    <>
      <NavBar />
      <div style={{ paddingLeft: '150px' }}>{children}</div>
    </>
  )
}
export const getNavbarLayout = (page: ReactElement) => {
  return (
    <RootLayout>
      <NavbarLayout>{page}</NavbarLayout>
    </RootLayout>
  )
}
