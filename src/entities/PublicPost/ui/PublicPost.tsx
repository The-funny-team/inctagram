import { useState } from 'react'

import { Avatar, Button, Typography } from '@/shared/ui'
import { formatDistance } from 'date-fns'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

import s from './PublicPost.module.scss'

type Props = {
  avatar?: string
  createdAt: Date
  description: string
  images: { url: string }[]
  ownerName: string
}

const DESCRIPTION_LENGTH = 80

export const PublicPost = ({ avatar, createdAt, description, images, ownerName }: Props) => {
  const { locale } = useRouter()

  const [isHide, setIsHide] = useState(true)
  const classNames = {
    description: s.description,
    expandButton: s.expandButton,
    postDescription: s.postDdescription,
    postPhoto: s.postPhoto,
    root: s.root,
    time: s.time,
    userInfo: s.userInfo,
    userInfoBtn: s.userInfoBtn,
  }
  const showAllTextHandler = () => {
    setIsHide(false)
  }

  return (
    <div className={classNames.root}>
      <div className={classNames.postPhoto}>
        <Image
          alt={'Test'}
          fill
          objectFit={'cover'}
          src={
            'https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg'
          }
        />
      </div>
      <div className={classNames.userInfo}>
        <Button className={classNames.userInfoBtn} variant={'link'}>
          <Avatar size={36} src={avatar} userName={ownerName} />
          <Typography color={'primary'} variant={'h3'}>
            {ownerName}
          </Typography>
        </Button>
        {!isHide && <span>close</span>}
      </div>
      <Typography className={classNames.time} color={'secondary'} variant={'smallText'}>
        {formatDistance(createdAt, new Date(), { addSuffix: true })}
      </Typography>
      <Typography className={classNames.description} color={'primary'} variant={'regularText14'}>
        {description.length < DESCRIPTION_LENGTH && description}
        {description.length > DESCRIPTION_LENGTH && (
          <>
            {description.slice(0, DESCRIPTION_LENGTH) + '... '}
            <Button
              className={classNames.expandButton}
              onClick={showAllTextHandler}
              variant={'link'}
            >
              Show more
            </Button>
          </>
        )}
      </Typography>
    </div>
  )
}
