import React, { useState } from 'react'

import { DeleteIcon } from '@/shared/assets/icons/DeleteIcon'
import { useTranslation } from '@/shared/lib/hooks'
import { BlankCover, Button } from '@/shared/ui'
import { AddProfilePhotoModal } from '@/widgets/AddProfilePhoto/ui/AddProfilePhotoModal/AddProfilePhotoModal'
import { DeletePhotoModal } from '@/widgets/AddProfilePhoto/ui/DeletePhotoModal/DeletePhotoModal'
import Image from 'next/image'

import s from './AddProfilePhoto.module.scss'

type Props = { avatar: null | string | undefined }
export const AddProfilePhoto = ({ avatar }: Props) => {
  const { text } = useTranslation()
  const t = text.pages.profile.addProfilePhoto

  const [currentPhoto, setCurrentPhoto] = useState<File | null>(null)
  const [isOpenAddPhotoModal, setIsOpenAddPhotoModal] = useState(false)
  const [isOpenDeletePhotoModal, setIsOpenDeletePhotoModal] = useState(false)
  const [error, setError] = useState('')

  const openAddPhotoModalHandler = () => {
    setError('')
    setCurrentPhoto(null)
    setIsOpenAddPhotoModal(true)
  }

  const openDeletePhotoModalHandler = () => {
    setIsOpenDeletePhotoModal(true)
  }

  return (
    <>
      <div className={s.root}>
        {avatar ? (
          <div className={s.avatar}>
            <Button className={s.deleteIcon} onClick={openDeletePhotoModalHandler}>
              <DeleteIcon />
            </Button>
            <Image
              alt={'avatar'}
              className={s.avatarPhoto}
              height={192}
              priority
              src={avatar}
              width={192}
            />
          </div>
        ) : (
          <BlankCover />
        )}
        <Button className={s.avatarButton} onClick={openAddPhotoModalHandler} variant={'tertiary'}>
          {t.addPhoto}
        </Button>
      </div>
      <AddProfilePhotoModal
        currentPhoto={currentPhoto}
        error={error}
        isOpenAddPhotoModal={isOpenAddPhotoModal}
        setCurrentPhoto={setCurrentPhoto}
        setError={setError}
        setIsOpenAddPhotoModal={setIsOpenAddPhotoModal}
      />
      <DeletePhotoModal
        isOpenDeletePhotoModal={isOpenDeletePhotoModal}
        setIsOpenDeletePhotoModal={setIsOpenDeletePhotoModal}
      />
    </>
  )
}
