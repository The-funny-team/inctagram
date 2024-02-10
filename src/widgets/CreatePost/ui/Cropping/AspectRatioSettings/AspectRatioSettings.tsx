import { Typography } from '@/shared/ui'
import { clsx } from 'clsx'

import s from './AspectRatioSettings.module.scss'

type Props = {
  isShow: boolean
}

export const AspectRatioSettings = ({ isShow }: Props) => {
  return (
    <div className={clsx(s.arBlock, !isShow && s.hide)}>
      <Typography className={s.item} variant={'regularText16'}>
        Original
      </Typography>
      <Typography className={s.item} variant={'regularText16'}>
        1:1
      </Typography>
      <Typography className={s.item} variant={'regularText16'}>
        4:5
      </Typography>
      <Typography className={s.item} variant={'regularText16'}>
        16:9
      </Typography>
    </div>
  )
}
