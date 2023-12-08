import { ExpiredTimeIcon } from '@/shared/assets'
import { useTranslation } from '@/shared/lib/hooks'
import { Button, Typography } from '@/shared/ui'

import s from './ExpiredLink.module.scss'

type Props = {
  sendEmailHandler: () => void
}

export const ExpiredLink = ({ sendEmailHandler }: Props) => {
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
        <Button fullWidth={false} onClick={sendEmailHandler}>
          {textWidget.expiredLinkBtn}
        </Button>
      </div>
      <ExpiredTimeIcon />
    </div>
  )
}
