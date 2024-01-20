import { getRootLayout } from '@/shared/layouts'
import { useTranslation } from '@/shared/lib/hooks'
import { HeadMeta, LinkTo, Typography } from '@/shared/ui'

import s from './PrivacyPolicy.module.scss'

const PrivacyPolicy = () => {
  const {
    text: {
      pages: { privacyPolicy },
    },
  } = useTranslation()

  return (
    <>
      <HeadMeta title={'Privacy Policy'} />
      <div className={s.root}>
        <LinkTo>{privacyPolicy.backToBtn}</LinkTo>
        <Typography as={'h1'} className={s.title} variant={'h1'}>
          {privacyPolicy.title}
        </Typography>
        <Typography className={s.desc} variant={'regularText14'}>
          {privacyPolicy.descripton}
        </Typography>
      </div>
    </>
  )
}

PrivacyPolicy.getLayout = getRootLayout
export default PrivacyPolicy
