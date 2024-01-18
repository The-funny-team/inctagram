import { PropsWithChildren, ReactElement } from 'react'

import { ROUTES_URL } from '@/shared/const'
import { useTranslation } from '@/shared/lib/hooks'
import { ProtectedNavbarLayout, RootLayout, Tabs, WithNavbarLayout } from '@/shared/ui'
import { NextPage } from 'next'

import s from './TabsLayout.module.scss'

type TabsOptions = {
  label: string
  value: string
}

export const TabsLayout: NextPage<PropsWithChildren<{}>> = ({ children }) => {
  const { router, text } = useTranslation()
  const t = text.pages.profile.settings
  const path = router.pathname

  const optionsTabs: TabsOptions[] = [
    { label: t.general.title, value: ROUTES_URL.GENERAL_INFO },
    { label: t.devices.title, value: ROUTES_URL.DEVICES },
    { label: t.management.title, value: ROUTES_URL.ACCOUNT_MANAGEMENT },
    { label: t.payments.title, value: ROUTES_URL.MY_PAYMENTS },
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
        <WithNavbarLayout>
          <TabsLayout>{page}</TabsLayout>
        </WithNavbarLayout>
      </ProtectedNavbarLayout>
    </RootLayout>
  )
}
