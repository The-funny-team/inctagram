import React, { ChangeEvent, useRef } from 'react'
import AvatarEditor from 'react-avatar-editor'
import { toast } from 'react-toastify'

import { useUpdateAvatarMutation } from '@/shared/api/profileApi'
import { MAX_FILE_SIZE } from '@/shared/const'
import { isFetchBaseQueryError } from '@/shared/lib/helpers'
import { BlankCover, Button, Modal, Trans, Typography } from '@/shared/ui'
import { LocaleType } from '@locales/en'
import { clsx } from 'clsx'

import s from './AddProfilePhotoModal.module.scss'

type Props = {
  currentPhoto: File | null
  error: string
  isOpenAddPhotoModal: boolean
  setCurrentPhoto: (currentPhoto: File | null) => void
  setError: (error: string) => void
  setIsOpenAddPhotoModal: (isOpenAddPhotoModal: boolean) => void
  text: LocaleType
}

export const AddProfilePhotoModal = ({
  currentPhoto,
  error,
  isOpenAddPhotoModal,
  setCurrentPhoto,
  setError,
  setIsOpenAddPhotoModal,
  text,
}: Props) => {
  const editorRef = useRef<AvatarEditor>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const [updateAvatar] = useUpdateAvatarMutation()

  const t = text.pages.profile.addProfilePhoto
  const tValidation = text.validation

  const selectPhoto = () => {
    inputRef && inputRef.current?.click()
  }
  const changePhotoHandler = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0]

      if (file.size > MAX_FILE_SIZE) {
        setError(tValidation.sizeError)
        e.target.value = ''
      } else if (file.type !== 'image/jpeg' && file.type !== 'image/png') {
        setError(tValidation.typeError)
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
        canvasScaled.toBlob(blob => {
          if (blob) {
            const timestamp = Date.now()
            const fileName = `photo_${timestamp}.png`
            const file = new File([blob], fileName, { type: 'image/png' })

            updateAvatar({ file: file })
              .unwrap()
              .then(() => {
                setCurrentPhoto(null)
                setIsOpenAddPhotoModal(false)
              })
              .catch(error => {
                if (isFetchBaseQueryError(error)) {
                  toast.error(error.data.message as string)
                }
              })
          } else {
            toast.error('Select a photo')
          }
        }, 'image/png')
      }
    }
  }

  return (
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
                <Trans
                  tags={{
                    1: () => (
                      <Typography as={'span'} variant={'boldText14'}>
                        {t.errorText.error}
                      </Typography>
                    ),
                    2: () => (
                      <Typography as={'span'} variant={'regularText14'}>
                        {t.errorText.getDescription(error)}
                      </Typography>
                    ),
                  }}
                  text={t.errorText.description}
                />
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
          onChange={changePhotoHandler}
          ref={inputRef}
          style={{ display: 'none' }}
          type={'file'}
        />
      </div>
    </Modal>
  )
}
