import { PropsWithChildren, ReactElement } from 'react'

import { ROUTES_URL } from '@/shared/const'
import { NavbarLayout, ProtectedNavbarLayout, RootLayout } from '@/shared/layouts'
import { useTranslation } from '@/shared/lib/hooks'
import { Tabs } from '@/shared/ui'
import { NextPage } from 'next'

import s from './TabsLayout.module.scss'

export const TabsLayout: NextPage<PropsWithChildren<{}>> = ({ children }) => {
  const { router, text } = useTranslation()
  const t = text.layout.tabs
  const path = router.pathname

  const optionsTabs = [
    { label: t.general, value: ROUTES_URL.GENERAL_INFO },
    { label: t.devices, value: ROUTES_URL.DEVICES },
    { label: t.management, value: ROUTES_URL.ACCOUNT_MANAGEMENT },
    { label: t.payments, value: ROUTES_URL.MY_PAYMENTS },
  ]

  const onChangeHandler = (value: string) => {
    void router.push(value)
  }

  return (
    <div className={s.tabsLayoutWrapper}>
      <Tabs onValueChange={onChangeHandler} options={optionsTabs} value={path} />
      {children}
    </div>
  )
}

export const getTabsLayout = (page: ReactElement) => {
  return (
    <RootLayout>
      <ProtectedNavbarLayout>
        <NavbarLayout>
          <TabsLayout>{page}</TabsLayout>
        </NavbarLayout>
      </ProtectedNavbarLayout>
    </RootLayout>
  )
}
