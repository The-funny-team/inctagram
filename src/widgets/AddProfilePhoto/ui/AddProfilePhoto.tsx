import { ChangeEvent, useRef, useState } from 'react'
import AvatarEditor from 'react-avatar-editor'
import { toast } from 'react-toastify'

import {
  useDeleteAvatarMutation,
  useMeQuery,
  useUpdateAvatarMutation,
} from '@/shared/api/profileApi'
import { DeleteIcon } from '@/shared/assets/icons/DeleteIcon'
import { useTranslation } from '@/shared/lib/hooks'
import { BlankCover, Button, Modal, Typography } from '@/shared/ui'
import { clsx } from 'clsx'

import s from './AddProfilePhoto.module.scss'

//type Props = { avatar: string }
export const AddProfilePhoto = ({}) => {
  const { text } = useTranslation()
  const t = text.pages.profile.addProfilePhoto
  const maxFileSize = 10 * 1024 * 1024
  const inputRef = useRef<HTMLInputElement>(null)
  const editorRef = useRef<any>(null)

  const { data: userInfo } = useMeQuery()

  const [updateAvatar] = useUpdateAvatarMutation()
  const [deleteAvatar] = useDeleteAvatarMutation()

  const avatar = userInfo && userInfo.avatarUrl

  const [currentPhoto, setCurrentPhoto] = useState<File | null>(null)
  const [isOpenAddPhotoModal, setIsOpenAddPhotoModal] = useState(false)
  const [isOpenDeletePhotoModal, setIsOpenDeletePhotoModal] = useState(false)
  const [error, setError] = useState('error')
  const openProfilePhotoModal = () => {
    setError('')
    setCurrentPhoto(null)
    setIsOpenAddPhotoModal(true)
  }
  const selectPhoto = () => {
    inputRef && inputRef.current?.click()
  }
  const onChangePhoto = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0]

      if (file.size > maxFileSize) {
        setError(t.errorText.sizeError)
        e.target.value = ''
      } else if (file.type !== 'image/jpeg' && file.type !== 'image/png') {
        setError(t.errorText.typeError)
        e.target.value = ''
      } else {
        setCurrentPhoto(file)
      }
    }
  }
  const savePhoto = () => {
    if (editorRef.current) {
      const canvasScaled = editorRef.current.getImageScaledToCanvas()

      if (canvasScaled) {
        canvasScaled.toBlob((blob: BlobPart) => {
          if (blob) {
            const file = new File([blob], 'filename.png', { type: 'image/png' })

            updateAvatar({ file: file })
              .unwrap()
              .then(() => {
                setCurrentPhoto(null)
                setIsOpenAddPhotoModal(false)
              })
              .catch(() => {
                toast.error('The photo was not sent to the server. Try again.')
              })
          } else {
            toast.error('Select a photo')
          }
        }, 'image/png')
      }
    }
  }

  const deletePhoto = () => {
    setIsOpenDeletePhotoModal(true)
  }
  const confirmDeletePhoto = () => {
    deleteAvatar()
      .unwrap()
      .then(() => {
        setIsOpenDeletePhotoModal(false)
      })
      .catch(() => {
        toast.error('The photo was not delete on the server. Try again.')
      })
  }

  return (
    <>
      <div className={s.root}>
        {avatar ? (
          <div className={s.avatar}>
            <Button className={s.deleteIcon} onClick={deletePhoto}>
              <DeleteIcon />
            </Button>
            <img alt={'avatar'} className={s.avatarPhoto} src={avatar} />
          </div>
        ) : (
          <BlankCover />
        )}
        <Button className={s.avatarButton} onClick={openProfilePhotoModal} variant={'tertiary'}>
          {t.addPhoto}
        </Button>
      </div>
      <Modal
        className={s.addModalRoot}
        isOpen={isOpenAddPhotoModal}
        onIsOpenChange={setIsOpenAddPhotoModal}
        title={t.addPhoto}
      >
        <div className={s.modalContent}>
          {currentPhoto ? (
            <>
              <AvatarEditor
                border={8}
                borderRadius={158}
                color={[23, 23, 23, 0.8]}
                height={316}
                image={currentPhoto}
                ref={editorRef}
                rotate={0}
                scale={1.2}
                width={316}
              />

              <Button
                className={s.saveButton}
                fullWidth={false}
                onClick={savePhoto}
                variant={'primary'}
              >
                {t.savePhoto}
              </Button>
            </>
          ) : (
            <div className={s.withoutPhoto}>
              {error && (
                <div className={s.errorText}>
                  <Typography as={'span'} variant={'boldText14'}>
                    {t.errorText.error}{' '}
                  </Typography>
                  <Typography as={'span'} variant={'regularText14'}>
                    {error}
                  </Typography>
                </div>
              )}
              <BlankCover className={clsx(s.blank, error && s.blankError)} type={'square'} />
              <Button fullWidth={false} onClick={selectPhoto} variant={'primary'}>
                {t.selectPhoto}
              </Button>
            </div>
          )}
          <input
            accept={'*/image, .png, .img, .jpg'}
            onChange={onChangePhoto}
            ref={inputRef}
            style={{ display: 'none' }}
            type={'file'}
          />
        </div>
      </Modal>

      <Modal
        className={s.deleteModalRoot}
        isOpen={isOpenDeletePhotoModal}
        onIsOpenChange={setIsOpenDeletePhotoModal}
        title={t.deletePhoto}
      >
        <div className={s.deleteRoot}>
          <Typography variant={'regularText16'}>{t.deletePhotoQuestion}</Typography>
          <div className={s.buttonsBlock}>
            <Button fullWidth={false} onClick={confirmDeletePhoto} variant={'tertiary'}>
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
    </>
  )
}
