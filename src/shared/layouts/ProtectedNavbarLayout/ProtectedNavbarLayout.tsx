import React, { PropsWithChildren, ReactElement } from 'react'

import { NavbarLayout, RootLayout } from '@/shared/ui'
import { NextPage } from 'next'
import { ProtectionWrapper } from 'src/shared/layouts/ProtectedNavbarLayout/ProtectedWrapper'

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
