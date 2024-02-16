import React from 'react'

import { useMeQuery } from '@/shared/api/profileApi'
import { ArrowLeftShortIcon } from '@/shared/assets'
import { useAppDispatch, useAppSelector } from '@/shared/lib/hooks'
import { Avatar, Button, TextField, Typography } from '@/shared/ui'
import { setDescription, setPrevStage } from '@/widgets/CreatePost/service'
import { Slider } from '@/widgets/CreatePost/ui/Slider'
import NextImage from 'next/image'

import s from './Publish.module.scss'

export const Publish = () => {
  const { data } = useMeQuery()
  const filteredImages = useAppSelector(state => state.createPostSlice.filteredPictures)
  const description = useAppSelector(state => state.createPostSlice.description)
  const dispatch = useAppDispatch()

  const setPerv = () => {
    dispatch(setPrevStage())
  }

  const changeDescHandler = (value: string) => {
    dispatch(setDescription({ desc: value }))
  }

  const onPublishHandler = () => {
    //some logic
  }

  return (
    <div>
      <div className={s.title}>
        <button className={s.backBtn} onClick={setPerv}>
          <ArrowLeftShortIcon />
        </button>
        <Typography as={'h1'} variant={'h1'}>
          Publication
        </Typography>
        <Button onClick={onPublishHandler} style={{ padding: 'unset' }} variant={'link'}>
          Publish
        </Button>
      </div>

      <div className={s.body}>
        <div className={s.sliderBlock}>
          <Slider sliderLength={filteredImages.length}>
            {filteredImages.map(pic => (
              <div key={pic.id}>
                <NextImage
                  alt={'post image with filter'}
                  height={499}
                  src={pic.img}
                  style={{ objectFit: 'contain' }}
                  width={489}
                />
              </div>
            ))}
          </Slider>
        </div>
        <div className={s.publishBlock}>
          <div className={s.userInfo}>
            <Avatar size={36} src={data?.avatarUrl} userName={`${data?.username}`} />
            <Typography as={'span'}>{data?.username ?? 'URL Profile'}</Typography>
          </div>
          <TextField
            label={'Add publication description'}
            onValueChange={changeDescHandler}
            placeholder={"What's new?"}
            value={description}
          />
          <Typography
            as={'div'}
            className={s.counter}
            variant={'smallText'}
          >{`${description.length}/500`}</Typography>
        </div>
      </div>
    </div>
  )
}
