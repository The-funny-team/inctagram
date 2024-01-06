import React, { ReactNode } from 'react'

import * as RadixTabs from '@radix-ui/react-tabs'

import s from './Tabs.module.scss'

type RootProps = {
  children?: ReactNode
  onValueChange: (value: string) => void
  options: Array<{ disabled?: boolean; label: string; value: string }>
  value?: string
}

export const Tabs = ({ children, onValueChange, options, value }: RootProps) => {
  return (
    <RadixTabs.Root onValueChange={onValueChange} value={value}>
      <RadixTabs.List className={s.list}>
        {options.map(el => {
          return (
            <RadixTabs.Trigger
              className={s.trigger}
              disabled={el.disabled}
              key={el.value}
              value={el.value}
            >
              {el.label}
            </RadixTabs.Trigger>
          )
        })}
      </RadixTabs.List>
      {children}
    </RadixTabs.Root>
  )
}

type ContentProps = {
  children: ReactNode
  value: string
}

export const TabsContent = ({ children, value }: ContentProps) => {
  return <RadixTabs.Content value={value}>{children}</RadixTabs.Content>
}
