import { ROUTES_URL } from '@/shared/const'
import { useTranslation } from '@/shared/lib/hooks'
import { LinkTo, Typography, getRootLayout } from '@/shared/ui'
import { PublicPage } from '@/shared/ui/PublicPage'

import s from './PrivacyPolicy.module.scss'

const PrivacyPolicy = () => {
  const {
    text: {
      pages: { privacyPolicy },
    },
  } = useTranslation()

  return (
    <PublicPage>
      <div className={s.root}>
        <LinkTo href={ROUTES_URL.SIGN_UP}>{privacyPolicy.backToBtn}</LinkTo>
        <Typography as={'h1'} className={s.title} variant={'h1'}>
          {privacyPolicy.title}
        </Typography>
        <Typography className={s.desc} variant={'regularText14'}>
          {privacyPolicy.descripton}
        </Typography>
      </div>
    </PublicPage>
  )
}

PrivacyPolicy.getLayout = getRootLayout
export default PrivacyPolicy
