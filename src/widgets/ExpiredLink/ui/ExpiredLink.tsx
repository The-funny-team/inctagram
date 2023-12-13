import { useTranslation } from '@/shared/lib/hooks'
import { Button, Typography } from '@/shared/ui'
import Image from 'next/image'

import s from './ExpiredLink.module.scss'

type Props = {
  resendEmailHandler: () => void
}

export const ExpiredLink = ({ resendEmailHandler }: Props) => {
  const { text } = useTranslation()
  const textWidget = text.pages.expiredLink

  return (
    <div className={s.wrapper}>
      <div className={s.text}>
        <Typography className={s.title} variant={'h1'}>
          {textWidget.title}
        </Typography>
        <Typography variant={'regularText16'}>{textWidget.description}</Typography>
      </div>
      <div className={s.button}>
        <Button fullWidth={false} onClick={resendEmailHandler}>
          {textWidget.expiredLinkBtn}
        </Button>
      </div>
      <Image alt={'email confirmed img'} height={353} src={'/linkExpired.png'} width={473} />
    </div>
  )
}
