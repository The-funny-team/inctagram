import { useState } from 'react'

import { Cross2Icon } from '@/shared/assets'
import { BlankCover, Button, Modal, Typography } from '@/shared/ui'

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

  return (
    <Modal className={s.modal} isOpen={isOpen} onIsOpenChange={isOpenChange}>
      <ImageSelection onCloseBtn={onCloseBtnHandler} />
    </Modal>
  )
}

type ImageSelectionProps = {
  onCloseBtn: () => void
}

export const ImageSelection = ({ onCloseBtn }: ImageSelectionProps) => {
  return (
    <>
      <div className={s.title}>
        <Typography as={'h1'} variant={'h1'}>
          Add Photo
        </Typography>
        <button className={s.closeBtn} onClick={onCloseBtn}>
          <Cross2Icon />
        </button>
      </div>

      <div className={s.body}>
        <BlankCover type={'square'} />
        <div className={s.btnGroup}>
          <Button>Select from Computer</Button>
          <Button variant={'tertiary'}>Open Draft</Button>
        </div>
      </div>
    </>
  )
}
