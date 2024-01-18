import { useTranslation } from '@/shared/lib/hooks'
import { LinkTo, Typography, getRootLayout } from '@/shared/ui'

import s from './PrivacyPolicy.module.scss'

const PrivacyPolicy = () => {
  const {
    text: {
      pages: { privacyPolicy },
    },
  } = useTranslation()

  return (
    <div className={s.root}>
      <LinkTo>{privacyPolicy.backToBtn}</LinkTo>
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
