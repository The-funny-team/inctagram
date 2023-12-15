import { useTranslation } from '@/shared/lib/hooks'
import { Button, Modal, Typography } from '@/shared/ui'
import Image from 'next/image'

import s from './ExpiredLink.module.scss'

type Props = {
  isOpenModal: boolean
  resendEmailHandler: () => void
  setIsOpenModal: (isOpenModal: boolean) => void
}

export const ExpiredLink = ({ isOpenModal, resendEmailHandler, setIsOpenModal }: Props) => {
  const { text } = useTranslation()
  const textWidget = text.pages.expiredLink
  const {
    text: {
      pages: { forgotPassword: transcription },
    },
  } = useTranslation()

  return (
    <>
      <div className={s.wrapper}>
        <div className={s.text}>
          <Typography className={s.title} variant={'h1'}>
            {textWidget.title}
          </Typography>
          <Typography variant={'regularText16'}>{textWidget.description}</Typography>
        </div>
        <div className={s.button}>
          <Button fullWidth={false} onClick={resendEmailHandler}>
            {textWidget.expiredLinkBtn}
          </Button>
        </div>
        <Image alt={'email confirmed img'} height={353} src={'/linkExpired.png'} width={473} />
      </div>
      <Modal isOpen={isOpenModal} onIsOpenChange={setIsOpenModal} title={transcription.modal.title}>
        <Typography variant={'regularText16'}>{transcription.modal.bodyWithOutEmail}</Typography>
        <div className={s.modalBtnGroup}>
          <Button fullWidth={false} onClick={() => setIsOpenModal(false)}>
            OK
          </Button>
        </div>
      </Modal>
    </>
  )
}
