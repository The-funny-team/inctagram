import React, { ChangeEvent, ComponentProps, useRef, useState } from 'react'

import { CircleIcon, Cross2Icon, FilledPhotoIcon, PhotoIcon } from '@/shared/assets'
import { useAppDispatch, useAppSelector } from '@/shared/lib/hooks'
import {
  removePicture,
  setPictures,
  uploadPhotos,
  useOutsideClick,
} from '@/widgets/CreatePost/service'
import { SliderButton } from '@/widgets/CreatePost/ui/SliderButtons'
import { clsx } from 'clsx'

import s from './SelectedImagesPreview.module.scss'

export const SelectedImagesPreview = () => {
  const photos = useAppSelector(state => state.createPostSlice.pictures)
  const [showSelectedPreview, setShowSelectedPreview] = useState<boolean>(false)

  const previewRef = useRef<HTMLDivElement>(null)

  useOutsideClick(previewRef, () => setShowSelectedPreview(false))

  const dispatch = useAppDispatch()

  const setPhotosHandler = (imgs: string[]) => {
    dispatch(setPictures({ pictures: imgs }))
  }
  const removePhotoHandler = (id: number) => {
    dispatch(removePicture({ id }))
  }

  return (
    <>
      <div className={clsx(s.previewBlock, !showSelectedPreview && s.hide)} ref={previewRef}>
        {photos.map(photo => (
          <ImagePreview
            key={photo.id}
            onRemove={() => removePhotoHandler(photo.id)}
            photo={photo.img}
          />
        ))}
        <SelectImageBtn setPhotos={setPhotosHandler} />
      </div>
      <ShowPicturesBtn
        isActive={showSelectedPreview}
        onClick={() => setShowSelectedPreview(value => !value)}
      />
    </>
  )
}

type ImagePreviewProps = {
  onRemove: () => void
  photo: string
}

const ImagePreview = ({ onRemove, photo }: ImagePreviewProps) => {
  return (
    <div className={s.imageBlock}>
      <img alt={'selected image preview'} className={s.image} src={photo} />
      <SliderButton className={s.closeBtn} onClick={onRemove}>
        <Cross2Icon height={6} width={6} />
      </SliderButton>
    </div>
  )
}

type SelectImageBtnProps = {
  setPhotos: (value: string[]) => void
}

const SelectImageBtn = ({ setPhotos }: SelectImageBtnProps) => {
  const inputRef = useRef<HTMLInputElement>(null)

  const selectPhoto = () => {
    inputRef && inputRef.current?.click()
  }
  const changePhotoHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const readyForSetFiles = uploadPhotos(e)

    if (readyForSetFiles.length > 0) {
      setPhotos(readyForSetFiles)
    }
  }

  return (
    <label htmlFor={'pick-image-btn'}>
      <SliderButton className={s.pickImagesBtn} onClick={selectPhoto}>
        <CircleIcon height={36} width={36} />
      </SliderButton>
      <input
        accept={'image/*'}
        id={'pick-image-btn'}
        multiple
        onChange={changePhotoHandler}
        ref={inputRef}
        style={{ display: 'none' }}
        type={'file'}
      />
    </label>
  )
}
const ShowPicturesBtn = (props: {
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
