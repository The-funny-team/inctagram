import { useAppSelector } from '@/shared/lib/hooks'
import { Modal } from '@/shared/ui'
import { Cropping } from '@/widgets/CreatePost/ui/Cropping'
import { Filtering } from '@/widgets/CreatePost/ui/Filtering'
import { ImageSelection } from '@/widgets/CreatePost/ui/ImageSelection'
import { Publish } from '@/widgets/CreatePost/ui/Publish'

import s from './CreatePost.module.scss'

type Props = {
  isOpen: boolean
  isOpenChange: (open: boolean) => void
}

export const CreatePost = ({ isOpen, isOpenChange }: Props) => {
  const stage = useAppSelector(state => state.createPostSlice.stage)
  const onCloseHandler = () => {
    isOpenChange(false)
  }

  return (
    <Modal className={s.modal} isOpen={isOpen} onIsOpenChange={onCloseHandler}>
      {stage === 0 && <ImageSelection onCloseBtn={onCloseHandler} />}
      {stage === 1 && <Cropping />}
      {stage === 2 && <Filtering />}
      {stage === 3 && <Publish />}
    </Modal>
  )
}
