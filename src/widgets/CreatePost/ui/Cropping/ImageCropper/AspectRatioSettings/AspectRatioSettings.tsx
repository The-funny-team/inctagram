import React, { ComponentProps, useRef, useState } from 'react'

import { ExpandIcon } from '@/shared/assets'
import { Typography } from '@/shared/ui'
import { useOutsideClick } from '@/widgets/CreatePost/service'
import { SliderButton } from '@/widgets/CreatePost/ui/SliderButtons'
import { clsx } from 'clsx'

import s from './AspectRatioSettings.module.scss'

type Props = {
  aspect: number
  imgId: number
  setAspect: (id: number, aspect: number) => void
}

const options = [
  {
    name: 'Original',
    value: 4 / 3,
  },
  {
    name: '1:1',
    value: 1,
  },
  {
    name: '4:5',
    value: 4 / 5,
  },
  {
    name: '16:9',
    value: 16 / 9,
  },
]

export const AspectRatioSettings = ({ aspect, imgId, setAspect }: Props) => {
  const [showAspectRatioSettings, setShowAspectRatioSettings] = useState<boolean>(false)
  const aspectRef = useRef<HTMLDivElement>(null)

  useOutsideClick(aspectRef, () => setShowAspectRatioSettings(false))

  return (
    <>
      <div className={clsx(s.arBlock, !showAspectRatioSettings && s.hide)} ref={aspectRef}>
        {options.map(el => (
          <Typography
            className={clsx(s.item, aspect === el.value && s.active)}
            key={el.name}
            onClick={() => setAspect(imgId, el.value)}
            variant={'regularText16'}
          >
            {el.name}
          </Typography>
        ))}
      </div>
      <AspectRatioBtn
        isActive={showAspectRatioSettings}
        onClick={() => setShowAspectRatioSettings(value => !value)}
      />
    </>
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
