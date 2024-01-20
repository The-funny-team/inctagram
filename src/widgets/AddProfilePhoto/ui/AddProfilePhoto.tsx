import React, { useState } from 'react'

import { DeleteIcon } from '@/shared/assets/icons/DeleteIcon'
import { useTranslation } from '@/shared/lib/hooks'
import { Avatar, BlankCover, Button } from '@/shared/ui'

import s from './AddProfilePhoto.module.scss'

import { AddProfilePhotoModal } from './AddProfilePhotoModal/AddProfilePhotoModal'
import { DeletePhotoModal } from './DeletePhotoModal/DeletePhotoModal'

type Props = { avatar?: null | string }
export const AddProfilePhoto = ({ avatar }: Props) => {
  const { text } = useTranslation()

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
            <Avatar className={s.avatarPhoto} size={192} src={avatar} userName={'user avatar'} />
          </div>
        ) : (
          <BlankCover />
        )}
        <Button className={s.avatarButton} onClick={openAddPhotoModalHandler} variant={'tertiary'}>
          {text.pages.profile.addProfilePhoto.addPhoto}
        </Button>
      </div>
      <AddProfilePhotoModal
        currentPhoto={currentPhoto}
        error={error}
        isOpenAddPhotoModal={isOpenAddPhotoModal}
        setCurrentPhoto={setCurrentPhoto}
        setError={setError}
        setIsOpenAddPhotoModal={setIsOpenAddPhotoModal}
        text={text}
      />
      <DeletePhotoModal
        isOpenDeletePhotoModal={isOpenDeletePhotoModal}
        setIsOpenDeletePhotoModal={setIsOpenDeletePhotoModal}
        text={text}
      />
    </>
  )
}
