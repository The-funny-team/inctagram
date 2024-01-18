import React, { PropsWithChildren, ReactElement } from 'react'

import { RootLayout, WithNavbarLayout } from '@/shared/ui'
import { NextPage } from 'next'
import { ProtectionWrapper } from 'src/shared/ui/ProtectedNavbarLayout/ProtectedWrapper'

export const ProtectedNavbarLayout: NextPage<PropsWithChildren<{}>> = ({ children }) => {
  return <ProtectionWrapper>{children}</ProtectionWrapper>
}
export const getProtectedNavbarLayout = (page: ReactElement) => {
  return (
    <RootLayout>
      <ProtectedNavbarLayout>
        <WithNavbarLayout>{page}</WithNavbarLayout>
      </ProtectedNavbarLayout>
    </RootLayout>
  )
}
