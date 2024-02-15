import React from 'react'

import { ArrowLeftShortIcon } from '@/shared/assets'
import { useAppDispatch, useAppSelector } from '@/shared/lib/hooks'
import { Button, Typography } from '@/shared/ui'
import { setPrevStage } from '@/widgets/CreatePost/service'
import { Slider } from '@/widgets/CreatePost/ui/Slider'
import NextImage from 'next/image'

import s from './Publish.module.scss'

export const Publish = () => {
  const filteredImages = useAppSelector(state => state.createPostSlice.filteredPictures)
  const dispatch = useAppDispatch()

  const setPerv = () => {
    dispatch(setPrevStage())
  }

  return (
    <div>
      <div className={s.title}>
        <button className={s.backBtn} onClick={setPerv}>
          <ArrowLeftShortIcon />
        </button>
        <Typography as={'h1'} variant={'h1'}>
          Publication
        </Typography>
        <Button style={{ padding: 'unset' }} variant={'link'}>
          Publish
        </Button>
      </div>

      <div className={s.body}>
        <div className={s.sliderBlock}>
          <Slider sliderLength={filteredImages.length}>
            {filteredImages.map(pic => (
              <div key={pic.id}>
                <NextImage
                  alt={'post image with filter'}
                  height={499}
                  src={pic.img}
                  style={{ objectFit: 'contain' }}
                  width={489}
                />
              </div>
            ))}
          </Slider>
        </div>
        <div className={s.publishBlock}>publish</div>
      </div>
    </div>
  )
}
