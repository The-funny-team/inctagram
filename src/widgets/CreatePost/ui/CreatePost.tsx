import { useState } from 'react'

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
  const [stage, setStage] = useState<number>(0)

  const onCloseBtnHandler = () => {
    isOpenChange(false)
  }
  const setPrevHandler = () => {
    setStage(stage => stage - 1)
  }
  const setNextHandler = () => {
    setStage(stage => stage + 1)
  }

  return (
    <Modal className={s.modal} isOpen={isOpen} onIsOpenChange={isOpenChange}>
      {stage === 0 && <ImageSelection onCloseBtn={onCloseBtnHandler} setNext={setNextHandler} />}
      {stage === 1 && <Cropping setNext={setNextHandler} setPerv={setPrevHandler} />}
      {stage === 2 && <Filtering setNext={setNextHandler} setPerv={setPrevHandler} />}
      {stage === 3 && <Publish setPerv={setPrevHandler} />}
    </Modal>
  )
}
