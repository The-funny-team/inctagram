import { PropsWithChildren, ReactElement, useEffect, useRef, useState } from 'react'

import { ROUTES_URL } from '@/shared/const'
import { useTranslation } from '@/shared/lib/hooks'
import { RootLayout, Tabs } from '@/shared/ui'
import { NextPage } from 'next'
import { useRouter } from 'next/router'

import s from './TabsLayout.module.scss'

enum SettingsTabIds {
  Devices = 'devices',
  General = 'general',
  Management = 'management',
  Payments = 'payments',
}

const tabsUrlMapper = {
  [SettingsTabIds.Devices]: ROUTES_URL.DEVICES,
  [SettingsTabIds.General]: ROUTES_URL.GENERAL_INFO,
  [SettingsTabIds.Management]: ROUTES_URL.ACCOUNT_MANAGEMENT,
  [SettingsTabIds.Payments]: ROUTES_URL.MY_PAYMENTS,
}

interface SettingTab {
  label: string
  value: SettingsTabIds
}

export const TabsLayout: NextPage<PropsWithChildren<{}>> = ({ children }) => {
  const [value, setValue] = useState<SettingsTabIds | undefined>(undefined)
  const isFirstInitRef = useRef(false)
  const router = useRouter()
  const { text } = useTranslation()
  const t = text.pages.profile.settings

  const optionsTabs: SettingTab[] = [
    { label: t.general.title, value: SettingsTabIds.General },
    { label: t.devices.title, value: SettingsTabIds.Devices },
    { label: t.management.title, value: SettingsTabIds.Management },
    { label: t.payments.title, value: SettingsTabIds.Payments },
  ]

  const onChangeHandler = () => {
    const _value = value as SettingsTabIds

    setValue(_value)
    void router.push(tabsUrlMapper[_value])
  }

  useEffect(() => {
    if (isFirstInitRef.current) {
      return
    }
    isFirstInitRef.current = true

    const tabTitle = router.pathname.split('/').pop()

    if (tabTitle == null) {
      return
    }

    const _tabTitle = tabTitle as SettingsTabIds

    if (tabsUrlMapper[_tabTitle] != null) {
      setValue(_tabTitle)
    }
  }, [router.pathname])

  return (
    <div className={s.tabsLayoutWrapper}>
      <Tabs onValueChange={onChangeHandler} options={optionsTabs} value={value} />
      <div>{children}</div>
    </div>
  )
}

export const getTabsLayout = (page: ReactElement) => {
  return (
    <RootLayout>
      {/*<WithNavbarLayout>*/}
      <TabsLayout>{page}</TabsLayout>
      {/*</WithNavbarLayout>*/}
    </RootLayout>
  )
}
