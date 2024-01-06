import React, { PropsWithChildren, ReactElement } from 'react'

import { Tabs } from '@/shared/ui'
import { WithNavbarLayout } from '@/shared/ui/WithNavbarLayout'
import { NextPage } from 'next'
import { useRouter } from 'next/router'

import s from './WithTabsLayout.module.scss'

const options = [
  {
    label: 'General Information',
    value: 'general',
  },
  {
    label: 'Devices',
    value: 'devices',
  },
  {
    label: 'Account Managment',
    value: 'managment',
  },
  {
    label: 'My Payments',
    value: 'payments',
  },
]

export const WithTabsLayout: NextPage<PropsWithChildren<any>> = ({ children }) => {
  const router = useRouter()
  const path = router.pathname.split('/').pop()

  const onTabHandler = (value: string) => {
    router.push(value)
  }

  return (
    <WithNavbarLayout>
      <div className={s.container}>
        <Tabs onValueChange={onTabHandler} options={options} value={path} />
      </div>
      {children}
    </WithNavbarLayout>
  )
}
export const getWithTabsLayout = (page: ReactElement) => {
  return <WithTabsLayout>{page}</WithTabsLayout>
}
