import { useState } from 'react'

import { Avatar, Typography } from '@/shared/ui'
import Link from 'next/link'

import s from './PublicPost.module.scss'

type Props = {
  avatar: string
  createdAt: Date
  description: string
  images: { url: string }[]
  ownerName: string
}

export const PublicPost = ({ avatar, createdAt, description, images, ownerName }: Props) => {
  const [isHide, setIsHide] = useState(true)
  const classNames = {
    postDescription: s.postDdescription,
    postPhoto: s.postPhoto,
    root: s.root,
    time: s.time,
    userInfo: s.userInfo,
  }

  return (
    <div className={classNames.root}>
      <div className={classNames.postPhoto}>{<span>Images</span>}</div>
      <div className={classNames.userInfo}>
        <Link href={'#'}>
          <Avatar size={36} src={avatar} userName={ownerName} />
          <Typography color={'primary'} variant={'h3'}>
            {ownerName}
          </Typography>
        </Link>
        {!isHide && <span>close</span>}
      </div>
      <Typography color={'secondary'} variant={'smallText'}>
        {createdAt.toString()}
      </Typography>
      <Typography className={s.description} color={'primary'} variant={'regularText14'}>
        {description}
      </Typography>
    </div>
  )
}
