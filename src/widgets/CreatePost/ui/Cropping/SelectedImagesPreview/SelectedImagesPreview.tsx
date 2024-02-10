import { ChangeEvent, useRef } from 'react'
import { toast } from 'react-toastify'

import { CircleIcon, Cross2Icon } from '@/shared/assets'
import { MAX_FILE_SIZE } from '@/shared/const'
import { clsx } from 'clsx'
import { SliderButton } from 'src/widgets/CreatePost/ui/SliderButtons'

import s from './SelectedImagesPreview.module.scss'

type SelectedImagesPreviewProps = {
  isShow: boolean
  onRemove: (index: number) => void
  photos: string[]
  setPhotos: (value: string[]) => void
}

export const SelectedImagesPreview = ({
  isShow,
  onRemove,
  photos,
  setPhotos,
}: SelectedImagesPreviewProps) => {
  return (
    <div className={clsx(s.previewBlock, !isShow && s.hide)}>
      {photos.map((photo, i) => (
        <ImagePreview key={photo} onRemove={() => onRemove(i)} photo={photo} />
      ))}
      <SelectImageBtn setPhotos={setPhotos} />
    </div>
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
    e.preventDefault()
    if (e.target.files && e.target.files.length > 0) {
      const files = e.target.files
      const readyForSetFiles: string[] = []

      for (let i = 0; i < files.length; i++) {
        const file = files[i]

        if (file.size > MAX_FILE_SIZE) {
          toast.error(`size too big: ${file.name}`)
        } else if (file.type !== 'image/jpeg' && file.type !== 'image/png') {
          toast.error(`incorrect file type, accept only png/jpg: ${file.name}`)
        } else {
          const fileUrl = URL.createObjectURL(file)

          readyForSetFiles.push(fileUrl)
        }
      }

      if (readyForSetFiles.length > 0) {
        setPhotos(readyForSetFiles)
      }
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
