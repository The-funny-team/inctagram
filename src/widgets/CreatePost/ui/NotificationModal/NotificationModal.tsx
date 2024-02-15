import { useAppDispatch } from '@/shared/lib/hooks'
import { Button, Modal, Typography } from '@/shared/ui'
import { setDraftedPage } from '@/widgets/CreatePost/service'

import s from './NotificationModal.module.scss'

type Props = {
  closeOtherModal: (open: boolean) => void
  isOpen: boolean
  isOpenChange: (open: boolean) => void
}

export const NotificationModal = ({ closeOtherModal, isOpen, isOpenChange }: Props) => {
  const dispatch = useAppDispatch()

  const onDiscardhandler = () => {
    isOpenChange(false)
  }

  const onSaveDrafthandler = () => {
    dispatch(setDraftedPage())
    isOpenChange(false)
    closeOtherModal(false)
  }

  return (
    <Modal
      className={s.notificationModal}
      isOpen={isOpen}
      onIsOpenChange={isOpenChange}
      title={'Close'}
    >
      <div className={s.body}>
        <Typography className={s.warnCaption} variant={'regularText16'}>
          Do you really want to close the creation of a publication? If you close everything will be
          deleted
        </Typography>
        <div className={s.btnGroup}>
          <Button onClick={onDiscardhandler} variant={'tertiary'}>
            Discard
          </Button>
          <Button onClick={onSaveDrafthandler}>Save draft</Button>
        </div>
      </div>
    </Modal>
  )
}
