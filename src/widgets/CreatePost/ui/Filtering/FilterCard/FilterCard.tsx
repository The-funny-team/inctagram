import { Typography } from '@/shared/ui'
import Image from 'next/image'
import FilterImage from 'public/fliterImage.jpg'

import s from './FilterCard.module.scss'

type Props = {
  filter: string
  onClick?: () => void
  title: string
}

export const FilterCard = ({ filter, onClick, title }: Props) => {
  return (
    <div className={s.filterCard} onClick={onClick}>
      <Image
        alt={'filter image'}
        className={s.image}
        height={108}
        src={FilterImage}
        style={{ filter }}
        width={108}
      />
      <Typography style={{ textAlign: 'center' }} variant={'regularText16'}>
        {title}
      </Typography>
    </div>
  )
}
