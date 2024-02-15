import React, { useState } from 'react'

import { ArrowLeftShortIcon } from '@/shared/assets'
import { FILTERS } from '@/shared/const'
import { useAppDispatch, useAppSelector } from '@/shared/lib/hooks'
import { Button, Typography } from '@/shared/ui'
import {
  getCroppedImage,
  getFilteredImage,
  setFilter,
  setFilteredImages,
  setNextStage,
  setPrevStage,
} from '@/widgets/CreatePost/service'
import { FilterCard } from '@/widgets/CreatePost/ui/Filtering/FilterCard'
import { Slider } from '@/widgets/CreatePost/ui/Slider'
import NextImage from 'next/image'

import s from './Filtering.module.scss'

export const Filtering = () => {
  const [slideId, setSlideId] = useState<number>(0)
  const croppedPictures = useAppSelector(state => state.createPostSlice.croppedPictures)

  const dispatch = useAppDispatch()

  const savedImages = async () => {
    const images: string[] = []

    for (let i = 0; i < croppedPictures.length; i++) {
      images.push(await getFilteredImage(croppedPictures[i]))
    }

    return images
  }

  const setPerv = () => {
    dispatch(setPrevStage())
  }
  const setNext = async () => {
    const filteredImages = await savedImages()

    dispatch(setFilteredImages({ filteredImages }))
    dispatch(setNextStage())
  }
  const setFilterHandler = (i: number, filter: string) => {
    dispatch(setFilter({ filter, index: i }))
  }

  return (
    <div>
      <div className={s.title}>
        <button className={s.backBtn} onClick={setPerv}>
          <ArrowLeftShortIcon />
        </button>
        <Typography as={'h1'} variant={'h1'}>
          Filtering
        </Typography>
        <Button onClick={setNext} style={{ padding: 'unset' }} variant={'link'}>
          Next
        </Button>
      </div>
      <div className={s.body}>
        <div className={s.sliderBlock}>
          <Slider setSlideId={setSlideId} slideId={slideId} sliderLength={croppedPictures.length}>
            {croppedPictures.map((pic, i) => (
              <div key={i}>
                <NextImage
                  alt={'post image with filter'}
                  height={499}
                  src={pic.img}
                  style={{ filter: pic.filter, objectFit: 'contain' }}
                  width={489}
                />
              </div>
            ))}
          </Slider>
        </div>
        <div className={s.filtersBlock}>
          {FILTERS.map(el => (
            <FilterCard
              filter={el.value}
              key={el.name}
              onClick={() => setFilterHandler(slideId, el.value)}
              title={el.name}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
