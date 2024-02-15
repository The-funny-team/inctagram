import React from 'react'

import { ArrowLeftShortIcon } from '@/shared/assets'
import { useAppDispatch, useAppSelector } from '@/shared/lib/hooks'
import { Button, Typography } from '@/shared/ui'
import {
  getCroppedImage,
  setCroppedImages,
  setNextStage,
  setPrevStage,
} from '@/widgets/CreatePost/service'
import { ImageCropper } from '@/widgets/CreatePost/ui/Cropping/ImageCropper'
import { SelectedImagesPreview } from '@/widgets/CreatePost/ui/Cropping/SelectedImagesPreview'
import { Slider } from '@/widgets/CreatePost/ui/Slider'

import s from './Cropping.module.scss'

export const Cropping = () => {
  const photos = useAppSelector(state => state.createPostSlice.pictures)
  const dispatch = useAppDispatch()

  const savedImages = async () => {
    const images: string[] = []

    for (let i = 0; i < photos.length; i++) {
      images.push(await getCroppedImage(photos[i]))
    }

    return images
  }
  const setPerv = () => {
    dispatch(setPrevStage())
  }
  const setNext = async () => {
    const croppedImages = await savedImages()

    dispatch(setCroppedImages({ croppedImages }))
    dispatch(setNextStage())
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
        <Slider sliderLength={photos.length}>
          {photos.map(photo => (
            <ImageCropper key={photo.id} photo={photo} />
          ))}
        </Slider>
        <SelectedImagesPreview />
      </div>
    </div>
  )
}
