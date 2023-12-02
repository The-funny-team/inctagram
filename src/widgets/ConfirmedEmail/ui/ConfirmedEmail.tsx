import { EmailConfirmedIcon } from '@/shared/assets'
import { ROUTES_URL } from '@/shared/const'
import { useTranslation } from '@/shared/lib/hooks'
import { Button, Typography } from '@/shared/ui'
import Link from 'next/link'

import s from './ConfirmedEmail.module.scss'

export const ConfirmedEmail = () => {
  const { text } = useTranslation()
  const t = text.pages.confirmedEmail

  return (
    <div className={s.wrapper}>
      <div className={s.title}>
        <Typography variant={'h1'}>{t.title}</Typography>
      </div>
      <Typography className={s.description} variant={'regularText16'}>
        {t.description}
      </Typography>
      <div className={s.button}>
        <Button as={Link} href={ROUTES_URL.SIGN_IN} variant={'primary'}>
          {t.signInBtn}
        </Button>
      </div>
      <EmailConfirmedIcon />
    </div>
  )
}
