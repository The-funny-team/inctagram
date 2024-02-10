import { ChangeEvent } from 'react'
import { toast } from 'react-toastify'

import { Cross2Icon } from '@/shared/assets'
import { MAX_FILE_SIZE } from '@/shared/const'
import { BlankCover, Button, Typography } from '@/shared/ui'

import s from './ImageSelection.module.scss'

type ImageSelectionProps = {
  onCloseBtn: () => void
  setNext: () => void
  setPhotos: (photo: string[]) => void
}

export const ImageSelection = ({ onCloseBtn, setNext, setPhotos }: ImageSelectionProps) => {
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
        setNext()
      }
    }
  }

  return (
    <>
      <div className={s.title}>
        <Typography as={'h1'} variant={'h1'}>
          Add Photo
        </Typography>
        <button className={s.closeBtn} onClick={onCloseBtn}>
          <Cross2Icon />
        </button>
      </div>

      <div className={s.body}>
        <BlankCover type={'square'} />
        <div className={s.btnGroup}>
          <label htmlFor={'pick-image-for-post'}>
            <input
              accept={'image/*'}
              id={'pick-image-for-post'}
              multiple
              onChange={changePhotoHandler}
              style={{ display: 'none' }}
              type={'file'}
            />
            <Button as={'span'}>Select from Computer</Button>
          </label>

          <Button variant={'tertiary'}>Open Draft</Button>
        </div>
      </div>
    </>
  )
}
