import { ArrowLeftIcon } from '@/shared/assets'
import { ROUTES_URL } from '@/shared/const'
import { useTranslation } from '@/shared/lib/hooks'
import { Typography, getRootLayout } from '@/shared/ui'
import Link from 'next/link'

import s from './PrivacyPolicy.module.scss'

const PrivacyPolicy = () => {
  const {
    text: {
      pages: { privacyPolicy },
    },
  } = useTranslation()

  return (
    <div className={s.root}>
      <div className={s.Btn}>
        <ArrowLeftIcon />
        <Typography
          as={Link}
          className={s.link}
          href={ROUTES_URL.SIGN_UP}
          variant={'regularText14'}
        >
          {privacyPolicy.backToBtn}
        </Typography>
      </div>

      <Typography as={'h1'} className={s.title} variant={'h1'}>
        {privacyPolicy.title}
      </Typography>
      <Typography className={s.desc} variant={'regularText14'}>
        {privacyPolicy.descripton}
      </Typography>
    </div>
  )
}

PrivacyPolicy.getLayout = getRootLayout
export default PrivacyPolicy
