import { useState } from 'react'

import { ExpiredTimeIcon } from '@/shared/assets'
import { useTranslation } from '@/shared/lib/hooks'
import { Button, Modal, Typography } from '@/shared/ui'

import s from './ExpiredLink.module.scss'
export const ExpiredLink = () => {
  const [showModal, setShowModal] = useState<boolean>(false)

  const t = useTranslation().widgets.expiredLink

  const showModalHandler = () => {
    setShowModal(!showModal)
  }

  return (
    <div className={s.wrapper}>
      <div className={s.text}>
        <Typography className={s.title} variant={'h1'}>
          {t.title}
        </Typography>
        <Typography variant={'regularText16'}>{t.description}</Typography>
      </div>
      <div className={s.button}>
        <Button fullWidth={false} onClick={showModalHandler}>
          {t.btnTitle}
          {/*Resend verification link*/}
        </Button>
      </div>
      <ExpiredTimeIcon />
      {
        <Modal isOpen={showModal} onIsOpenChange={showModalHandler} title={'Email sent'}>
          <p>We have resent a verification link to epam@epam.com</p>
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
