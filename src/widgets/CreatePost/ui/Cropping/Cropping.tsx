import React, { ComponentProps } from 'react'
import Slider, { Settings } from 'react-slick'

import { ArrowLeftShortIcon, ArrowRightShortIcon } from '@/shared/assets'
import { Button, Typography } from '@/shared/ui'
import { clsx } from 'clsx'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import s from './Cropping.module.scss'

type Props = {
  photos: string[]
  setNext: () => void
  setPerv: () => void
}

export const Cropping = ({ photos, setNext, setPerv }: Props) => {
  const settings: Settings = {
    customPaging: () => {
      return <SliderDot />
    },
    dots: true,
    dotsClass: s.slickDots,
    infinite: false,
    nextArrow: <SliderButton direction={'right'} />,
    prevArrow: <SliderButton direction={'left'} />,
    slidesToScroll: 1,
    slidesToShow: 1,
    speed: 500,
    swipe: false,
    swipeToSlide: false,
  }

  return (
    <div>
      <div className={s.title}>
        <button className={s.backBtn} onClick={setPerv}>
          <ArrowLeftShortIcon />
        </button>
        <Typography as={'h1'} variant={'h1'}>
          Cropping
        </Typography>
        <Button onClick={setNext} style={{ padding: 'unset' }} variant={'link'}>
          Next
        </Button>
      </div>
      <div className={s.body}>
        <Slider {...settings}>
          {photos.map((photo, i) => (
            <img alt={`post photo ${i + 1}`} className={s.image} key={i} src={photo} />
          ))}
        </Slider>
      </div>
    </div>
  )
}

type SliderButtonProps = {
  direction?: 'left' | 'right'
  onClick?: ComponentProps<'button'>['onClick']
}

export const SliderButton = ({ direction = 'right', onClick }: SliderButtonProps) => {
  return (
    <button className={clsx(s.sliderBtn, s[direction])} onClick={onClick}>
      {direction === 'left' ? <ArrowLeftShortIcon /> : <ArrowRightShortIcon />}
    </button>
  )
}

export const SliderDot = ({ onClick }: { onClick?: ComponentProps<'button'>['onClick'] }) => {
  return (
    <button className={s.sliderDot} onClick={onClick}>
      •
    </button>
  )
}
