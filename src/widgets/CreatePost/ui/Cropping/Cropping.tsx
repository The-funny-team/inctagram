import React, { ComponentProps, useState } from 'react'
import Slider, { Settings } from 'react-slick'

import {
  ArrowLeftShortIcon,
  ArrowRightShortIcon,
  ExpandIcon,
  FilledPhotoIcon,
  LoupeIcon,
  PhotoIcon,
} from '@/shared/assets'
import { Button, Typography } from '@/shared/ui'
import { AspectRatioSettings } from '@/widgets/CreatePost/ui/Cropping/AspectRatioSettings'
import { SelectedImagesPreview } from '@/widgets/CreatePost/ui/Cropping/SelectedImagesPreview'
import { clsx } from 'clsx'
import { SliderButton, SliderDot } from 'src/widgets/CreatePost/ui/SliderButtons'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import s from './Cropping.module.scss'

type Props = {
  onRemove: (index: number) => void
  photos: string[]
  setNext: () => void
  setPerv: () => void
  setPhotos: (value: string[]) => void
}

export const Cropping = ({ onRemove, photos, setNext, setPerv, setPhotos }: Props) => {
  const [showSelectedPreview, setShowSelectedPreview] = useState<boolean>(false)
  const [showAspectRatioSettings, setShowAspectRatioSettings] = useState<boolean>(false)

  const settings: Settings = {
    customPaging: () => {
      return <SliderDot />
    },
    dots: true,
    dotsClass: s.slickDots,
    infinite: false,
    nextArrow: <NextBtn />,
    prevArrow: <PrevBtn />,
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
        <Slider {...settings} className={s.slider}>
          {photos.map((photo, i) => (
            <img alt={`post photo ${i + 1}`} className={s.image} key={`key-${photo}`} src={photo} />
          ))}
        </Slider>
        <AddImageBtn
          isActive={showSelectedPreview}
          onClick={() => setShowSelectedPreview(value => !value)}
        />
        <SizeBtn />
        <AspectRatioBtn
          isActive={showAspectRatioSettings}
          onClick={() => setShowAspectRatioSettings(value => !value)}
        />
        <SelectedImagesPreview
          isShow={showSelectedPreview}
          onRemove={onRemove}
          photos={photos}
          setPhotos={setPhotos}
        />
        <AspectRatioSettings isShow={showAspectRatioSettings} />
      </div>
    </div>
  )
}

const AspectRatioBtn = (props: {
  isActive: boolean
  onClick?: ComponentProps<'button'>['onClick']
}) => {
  return (
    <SliderButton
      className={clsx(s.aspectRatioBtn, props.isActive && s.active)}
      onClick={props.onClick}
    >
      <ExpandIcon />
    </SliderButton>
  )
}
const SizeBtn = (props: { onClick?: ComponentProps<'button'>['onClick'] }) => {
  return (
    <SliderButton className={s.sizeBtn} onClick={props.onClick}>
      <LoupeIcon />
    </SliderButton>
  )
}
const AddImageBtn = (props: {
  isActive: boolean
  onClick?: ComponentProps<'button'>['onClick']
}) => {
  return (
    <SliderButton
      className={clsx(s.addImageBtn, props.isActive && s.active)}
      onClick={props.onClick}
    >
      {props.isActive ? <FilledPhotoIcon /> : <PhotoIcon height={24} width={24} />}
    </SliderButton>
  )
}
const NextBtn = (props: { onClick?: ComponentProps<'button'>['onClick'] }) => {
  return (
    <SliderButton className={s.nextBtn} onClick={props.onClick}>
      <ArrowRightShortIcon />
    </SliderButton>
  )
}
const PrevBtn = (props: { onClick?: ComponentProps<'button'>['onClick'] }) => {
  return (
    <SliderButton className={s.prevBtn} onClick={props.onClick}>
      <ArrowLeftShortIcon />
    </SliderButton>
  )
}
