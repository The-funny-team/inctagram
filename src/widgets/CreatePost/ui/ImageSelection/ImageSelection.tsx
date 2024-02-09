import { Cross2Icon } from '@/shared/assets'
import { BlankCover, Button, Typography } from '@/shared/ui'

import s from './ImageSelection.module.scss'

type ImageSelectionProps = {
  onCloseBtn: () => void
  setNext: () => void
}

export const ImageSelection = ({ onCloseBtn, setNext }: ImageSelectionProps) => {
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
          <Button onClick={setNext}>Select from Computer</Button>
          <Button variant={'tertiary'}>Open Draft</Button>
        </div>
      </div>
    </>
  )
}
