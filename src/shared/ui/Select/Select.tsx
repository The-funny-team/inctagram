import { FC, ReactElement } from 'react'

import * as SelectRadix from '@radix-ui/react-select'
import { clsx } from 'clsx'

// eslint-disable-next-line perfectionist/sort-imports
import s from './Select.module.scss'

import Down from '../../assets/icons/ArrowDown'

type Props = {
  disabled?: boolean
  label?: string
  name?: string
  onValueChange?: (value: string) => void
  options: Array<{ label: ReactElement | string; value: string }>
  placeholder?: string
  value?: string
}

export const Select: FC<Props> = ({
  disabled,
  label,
  name,
  onValueChange,
  options,
  placeholder,
  value,
}) => {
  return (
    <div>
      {label && (
        <label className={clsx(s.label)} htmlFor={name}>
          {label}
        </label>
      )}
      <SelectRadix.Root
        disabled={disabled}
        name={name}
        onValueChange={onValueChange}
        open
        value={value}
      >
        <SelectRadix.Trigger asChild className={clsx(s.trigger)} tabIndex={0}>
          <div>
            <SelectRadix.Value placeholder={placeholder} />
            <SelectRadix.Icon className={clsx(s.icon)}>
              <Down />
            </SelectRadix.Icon>
          </div>
        </SelectRadix.Trigger>

        <SelectRadix.Portal>
          <SelectRadix.Content position={'popper'} sideOffset={-1}>
            <SelectRadix.Viewport className={clsx(s.viewport)}>
              {options.map(el => (
                <SelectRadix.Item className={clsx(s.item)} key={el.value} value={el.value}>
                  <SelectRadix.ItemText asChild>
                    <span className={clsx(s.itemText)}>{el.label}</span>
                  </SelectRadix.ItemText>
                </SelectRadix.Item>
              ))}
            </SelectRadix.Viewport>
          </SelectRadix.Content>
        </SelectRadix.Portal>
      </SelectRadix.Root>
    </div>
  )
}
