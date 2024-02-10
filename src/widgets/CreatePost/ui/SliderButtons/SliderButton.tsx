import React, { ComponentProps, ReactNode } from 'react'

import { clsx } from 'clsx'

import s from './SliderButtons.module.scss'

type SliderButtonProps = {
  children: ReactNode
  className?: string
  onClick?: ComponentProps<'button'>['onClick']
}

export const SliderButton = ({ children, className, onClick }: SliderButtonProps) => {
  return (
    <button className={clsx(s.sliderBtn, className)} onClick={onClick}>
      {children}
    </button>
  )
}
