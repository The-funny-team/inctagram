import { PhotoIcon } from '@/shared/assets'
import { clsx } from 'clsx'
import Image from 'next/image'

import s from './Avatar.module.scss'

type Props = {
  className?: string
  iconSize?: number
  size: number
  src?: string
  userName: string
}
export const Avatar = ({ className, iconSize = 24, size, src, userName }: Props) => {
  return (
    <div className={clsx(s.root, className)} style={{ height: `${size}px`, width: `${size}px` }}>
      {!src && <PhotoIcon iconSize={iconSize} />}
      {src && <Image alt={`${userName} avatar`} height={size} src={src} width={size} />}
    </div>
  )
}
