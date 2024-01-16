import React from 'react'
import { toast } from 'react-toastify'

import { useDeleteAvatarMutation } from '@/shared/api/profileApi'
import { isFetchBaseQueryError } from '@/shared/lib/helpers'
import { useTranslation } from '@/shared/lib/hooks'
import { Button, Modal, Typography } from '@/shared/ui'

import s from './DeletePhotoModal.module.scss'
type Props = {
  isOpenDeletePhotoModal: boolean
  setIsOpenDeletePhotoModal: (isOpenDeletePhotoModal: boolean) => void
}
export const DeletePhotoModal = ({ isOpenDeletePhotoModal, setIsOpenDeletePhotoModal }: Props) => {
  const { text } = useTranslation()
  const t = text.pages.profile.addProfilePhoto
  const [deleteAvatar] = useDeleteAvatarMutation()

  const deletePhoto = () => {
    deleteAvatar()
      .unwrap()
      .then(() => {
        setIsOpenDeletePhotoModal(false)
      })
      .catch(error => {
        if (isFetchBaseQueryError(error)) {
          toast.error(error.data.message as string)
        }
      })
  }

  return (
    <Modal
      className={s.deleteModalRoot}
      isOpen={isOpenDeletePhotoModal}
      onIsOpenChange={setIsOpenDeletePhotoModal}
      title={t.deletePhoto}
    >
      <div className={s.deleteRoot}>
        <Typography variant={'regularText16'}>{t.deletePhotoQuestion}</Typography>
        <div className={s.buttonsBlock}>
          <Button fullWidth={false} onClick={deletePhoto} variant={'tertiary'}>
            {t.yesButton}
          </Button>
          <Button
            fullWidth={false}
            onClick={() => {
              setIsOpenDeletePhotoModal(false)
            }}
            variant={'primary'}
          >
            {t.noButton}
          </Button>
        </div>
      </div>
    </Modal>
  )
}
