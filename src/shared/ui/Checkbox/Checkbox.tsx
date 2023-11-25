import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { CheckboxIcon } from '@/shared/assets'
import * as RadixCheckbox from '@radix-ui/react-checkbox'
import { clsx } from 'clsx'

import s from './Checbox.module.scss'
export type CheckboxProps = { label?: string } & ComponentPropsWithoutRef<typeof RadixCheckbox.Root>

export const Checkbox = forwardRef<ElementRef<typeof RadixCheckbox.Root>, CheckboxProps>(
  ({ label, ...restProps }, ref) => {
    const classNames = {
      indicator: s.indicator,
      label: clsx(s.label, restProps.disabled && s.disabledLabel),
      root: s.root,
      wrapper: s.wrapper,
    }

    return (
      <div className={classNames.wrapper}>
        {label && (
          <label className={classNames.label} htmlFor={label}>
            {label}
          </label>
        )}
        <RadixCheckbox.Root className={classNames.root} id={label} ref={ref} {...restProps}>
          <RadixCheckbox.Indicator className={classNames.indicator}>
            <CheckboxIcon />
          </RadixCheckbox.Indicator>
        </RadixCheckbox.Root>
      </div>
    )
  }
)
