import React, { PropsWithChildren, ReactElement } from 'react'

import { NavbarLayout, RootLayout } from '@/shared/layouts'
import { ProtectionWrapper } from '@/shared/layouts/ProtectedNavbarLayout/ProtectedWrapper'
import { NextPage } from 'next'

export const ProtectedNavbarLayout: NextPage<PropsWithChildren<{}>> = ({ children }) => {
  return <ProtectionWrapper>{children}</ProtectionWrapper>
}
export const getProtectedNavbarLayout = (page: ReactElement) => {
  return (
    <RootLayout>
      <ProtectedNavbarLayout>
        <NavbarLayout>{page}</NavbarLayout>
      </ProtectedNavbarLayout>
    </RootLayout>
  )
}
