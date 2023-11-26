import { ElementRef, ReactElement, forwardRef } from 'react'

import * as SelectRadix from '@radix-ui/react-select'
import { clsx } from 'clsx'

import Down from '../../assets/icons/ArrowDown'

// eslint-disable-next-line perfectionist/sort-imports
import s from './Select.module.scss'

type Props = {
  disabled?: boolean
  label?: string
  name?: string
  onValueChange?: (value: string) => void
  options: Array<{ label: ReactElement | string; value: string }>
  placeholder?: string
  value?: string
}

export const Select = forwardRef<ElementRef<typeof SelectRadix.Trigger>, Props>(
  ({ disabled, label, name, onValueChange, options, placeholder, value }, ref) => {
    return (
      <div>
        {label && (
          <label className={clsx(s.label)} htmlFor={label}>
            {label}
          </label>
        )}
        <SelectRadix.Root
          disabled={disabled}
          name={name}
          onValueChange={onValueChange}
          value={value}
        >
          <SelectRadix.Trigger className={clsx(s.trigger)} id={label} ref={ref} tabIndex={0}>
            <SelectRadix.Value placeholder={placeholder} />
            <SelectRadix.Icon className={clsx(s.icon)}>
              <Down />
            </SelectRadix.Icon>
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
)