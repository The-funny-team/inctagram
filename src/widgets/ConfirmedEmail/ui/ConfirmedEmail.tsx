import { EmailConfirmedIcon } from '@/shared/assets'
import { ROUTES_URL } from '@/shared/const'
import { Button, Typography } from '@/shared/ui'
import Link from 'next/link'

export const ConfirmedEmail = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.title}>
        <Typography variant={'h1'}>Congratulations!</Typography>
      </div>
      <Typography className={s.description} variant={'regularText16'}>
        Your email has been confirmed
      </Typography>
      <div className={s.button}>
        <Button as={Link} href={ROUTES_URL.SIGN_IN} variant={'primary'}>
          Sign In
        </Button>
      </div>
      <EmailConfirmedIcon />
    </div>
  )
}
