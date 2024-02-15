import React, { ComponentProps, ReactNode, useState } from 'react'
import SlickSlider, { Settings } from 'react-slick'

import { ArrowLeftShortIcon, ArrowRightShortIcon } from '@/shared/assets'
import { SliderButton, SliderDot } from '@/widgets/CreatePost/ui/SliderButtons'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import s from './Slider.module.scss'

type Props = {
  children: ReactNode
  setSlideId?: (id: number) => void
  slideId?: number
  sliderLength: number
}

export const Slider = ({ children, setSlideId, slideId, sliderLength }: Props) => {
  const [slideIdR, setSlideIdR] = useState<number>(0)

  const beforeChangeHandler = (currentSlide: number, nextSlide: number) => {
    if (setSlideId) {
      setSlideId(nextSlide)
    } else {
      setSlideIdR(nextSlide)
    }
  }

  const usedSlideId = slideId ? slideId : slideIdR

  const settings: Settings = {
    beforeChange: beforeChangeHandler,
    customPaging: index => {
      return <SliderDot isActive={usedSlideId === index} />
    },
    dots: true,
    dotsClass: s.slickDots,
    infinite: false,
    nextArrow: <Btn disabled={sliderLength - 1 === usedSlideId || sliderLength === 0} isRight />,
    prevArrow: <Btn disabled={usedSlideId === 0} isRight={false} />,
    slidesToScroll: 1,
    slidesToShow: 1,
    speed: 500,
    swipe: false,
    swipeToSlide: false,
  }

  return (
    <SlickSlider {...settings} className={s.slider}>
      {children}
    </SlickSlider>
  )
}

type BtnType = {
  disabled?: boolean
  isRight: boolean
  onClick?: ComponentProps<'button'>['onClick']
}

const Btn = ({ disabled, isRight, onClick }: BtnType) => {
  return (
    <SliderButton className={isRight ? s.nextBtn : s.prevBtn} disabled={disabled} onClick={onClick}>
      {isRight ? <ArrowRightShortIcon /> : <ArrowLeftShortIcon />}
    </SliderButton>
  )
}
