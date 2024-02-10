import React, { ComponentProps } from 'react'

import s from './SliderButtons.module.scss'

export const SliderDot = ({ onClick }: { onClick?: ComponentProps<'button'>['onClick'] }) => {
  return (
    <button className={s.sliderDot} onClick={onClick}>
      •
    </button>
  )
}
