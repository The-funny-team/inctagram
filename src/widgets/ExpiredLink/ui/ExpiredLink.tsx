import { useState } from 'react'

import { ExpiredTimeIcon } from '@/shared/assets'
import { useTranslation } from '@/shared/lib/hooks'
import { Button, Modal, Typography } from '@/shared/ui'

import s from './ExpiredLink.module.scss'

type PropsType = {
  email: string
}
export const ExpiredLink = ({ email }: PropsType) => {
  const [showModal, setShowModal] = useState<boolean>(false)

  const { text } = useTranslation()
  const textWidget = text.pages.expiredLink
  const textModal = text.pages.expiredLink.modal
  const showModalHandler = () => {
    setShowModal(!showModal)
  }

  const sendEmailHandler = () => {
    console.log(email)
    showModalHandler()
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
        <Button fullWidth={false} onClick={sendEmailHandler}>
          {textWidget.expiredLinkBtn}
        </Button>
      </div>
      <ExpiredTimeIcon />
      {
        <Modal isOpen={showModal} onIsOpenChange={showModalHandler} title={textModal.title}>
          <Typography variant={'regularText16'}>{textModal.getDescription(email)}</Typography>
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
