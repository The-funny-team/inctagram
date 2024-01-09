import { getFallBackUserName } from '@/shared/lib/helpers'
import { clsx } from 'clsx'
import Image from 'next/image'

import s from './Avatar.module.scss'

type Props = {
  className?: string
  size: number
  src?: string
  userName: string
}
export const Avatar = ({ className, size, src, userName }: Props) => {
  const classNames = {
    image: s.image,
    root: clsx(s.root, className),
    userName: s.userName,
  }
  const fallbackUserName = getFallBackUserName(userName)

  return (
    <div className={classNames.root} style={{ height: `${size}px`, width: `${size}px` }}>
      {!src && (
        <span className={classNames.userName} style={{ fontSize: `${10 + size / 8}px` }}>
          {fallbackUserName}
        </span>
      )}
      {src && (
        <Image
          alt={`${userName} avatar`}
          className={classNames.image}
          height={size}
          src={src}
          width={size}
        />
      )}
    </div>
  )
}
