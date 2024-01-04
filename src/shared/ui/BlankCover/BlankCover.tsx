import { PhotoIcon } from '@/shared/assets'
import { clsx } from 'clsx'

import s from './BlankCover.module.scss'

type Props = {
  className?: string
  type?: 'circle' | 'square'
}

export const BlankCover = ({ className, type = 'circle' }: Props) => {
  return (
    <div className={clsx(s[type], className)}>
      <PhotoIcon />
    </div>
  )
}
