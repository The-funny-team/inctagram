import { useState } from 'react'

import { useAppSelector } from '@/shared/lib/hooks'
import { Modal } from '@/shared/ui'
import { Cropping } from '@/widgets/CreatePost/ui/Cropping'
import { Filtering } from '@/widgets/CreatePost/ui/Filtering'
import { ImageSelection } from '@/widgets/CreatePost/ui/ImageSelection'
import { NotificationModal } from '@/widgets/CreatePost/ui/NotificationModal'
import { Publish } from '@/widgets/CreatePost/ui/Publish'

import s from './CreatePost.module.scss'

type Props = {
  isOpen: boolean
  isOpenChange: (open: boolean) => void
}

export const CreatePost = ({ isOpen, isOpenChange }: Props) => {
  const [openNotification, setOpenNotification] = useState<boolean>(false)
  const stage = useAppSelector(state => state.createPostSlice.stage)
  const onCloseHandler = () => {
    if (stage === 0) {
      isOpenChange(false)
    } else {
      setOpenNotification(true)
    }
  }

  return (
    <>
      <Modal className={s.modal} isOpen={isOpen} onIsOpenChange={onCloseHandler}>
        {stage === 0 && <ImageSelection onCloseBtn={onCloseHandler} />}
        {stage === 1 && <Cropping />}
        {stage === 2 && <Filtering />}
        {stage === 3 && <Publish />}
      </Modal>
      <NotificationModal
        closeOtherModal={isOpenChange}
        isOpen={openNotification}
        isOpenChange={setOpenNotification}
      />
    </>
  )
}
