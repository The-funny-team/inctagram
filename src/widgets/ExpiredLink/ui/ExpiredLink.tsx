import { useState } from 'react'

import { ExpiredTimeIcon } from '@/shared/assets'
import { useTranslation } from '@/shared/lib/hooks'
import { Button, Modal, Typography } from '@/shared/ui'

import s from './ExpiredLink.module.scss'
export const ExpiredLink = () => {
  const [showModal, setShowModal] = useState<boolean>(false)

  const { text } = useTranslation()
  const textWidget = text.widgets.expiredLink
  const textModal = text.modals.expiredLink
  const showModalHandler = () => {
    setShowModal(!showModal)
  }

  return (
    <div className={s.wrapper}>
      <div className={s.text}>
        <Typography className={s.title} variant={'h1'}>
          {textWidget.title}
        </Typography>
        <Typography variant={'regularText16'}>{textWidget.description}</Typography>
      </div>
      <div className={s.button}>
        <Button fullWidth={false} onClick={showModalHandler}>
          {textWidget.btnTitle}
          {/*Resend verification link*/}
        </Button>
      </div>
      <ExpiredTimeIcon />
      {
        <Modal isOpen={showModal} onIsOpenChange={showModalHandler} title={textModal.title}>
          <p>{textModal.description}</p>
          <div className={s.modalButton}>
            <Button fullWidth={false} onClick={showModalHandler} type={'button'}>
              OK
            </Button>
          </div>
        </Modal>
      }
    </div>
  )
}
