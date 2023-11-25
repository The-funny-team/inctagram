import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { CheckboxIcon } from '@/shared/assets'
import * as RadixCheckbox from '@radix-ui/react-checkbox'

import s from './Checbox.module.scss'
type Props = { label: string } & ComponentPropsWithoutRef<typeof RadixCheckbox.Root>

export const Checkbox = forwardRef<ElementRef<typeof RadixCheckbox.Root>, Props>(
  ({ label, ...restProps }, ref) => {
    const classNames = {
      indicator: s.indicator,
      label: s.label,
      root: s.root,
      wrapper: s.wrapper,
    }

    return (
      <div className={classNames.wrapper}>
        <RadixCheckbox.Root className={classNames.root} id={label} ref={ref} {...restProps}>
          <RadixCheckbox.Indicator className={classNames.indicator}>
            <CheckboxIcon />
          </RadixCheckbox.Indicator>
        </RadixCheckbox.Root>
        {label && (
          <label className={classNames.label} htmlFor={label}>
            {label}
          </label>
        )}
      </div>
    )
  }
)
