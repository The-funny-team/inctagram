import { getFallBackUserName } from '@/shared/lib/helpers'
import { clsx } from 'clsx'
import Image from 'next/image'

import s from './Avatar.module.scss'

type Props = {
  className?: string
  size: 'large' | 'small'
  src?: string
  userName: string
}
export const Avatar = ({ className, size, src, userName }: Props) => {
  const classNames = {
    image: s.image,
    root: clsx(s.root, s[size], className),
    userName: s.userName,
  }
  const fallbackUserName = getFallBackUserName(userName)

  return (
    <div className={classNames.root}>
      {!src && <span className={classNames.userName}>{fallbackUserName}</span>}
      {src && <Image alt={'User avatar'} className={classNames.image} fill src={src} />}
    </div>
  )
}
