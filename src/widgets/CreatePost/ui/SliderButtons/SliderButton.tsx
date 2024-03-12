import React, { ComponentProps, ReactNode } from 'react'

import { clsx } from 'clsx'

import s from './SliderButtons.module.scss'

type SliderButtonProps = {
  children: ReactNode
  className?: string
  disabled?: ComponentProps<'button'>['disabled']
  onClick?: ComponentProps<'button'>['onClick']
}

export const SliderButton = ({
  children,
  className,
  disabled = false,
  onClick,
}: SliderButtonProps) => {
  return (
    <button className={clsx(s.sliderBtn, className)} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  )
}
