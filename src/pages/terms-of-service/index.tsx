import { ROUTES_URL } from '@/shared/const'
import { useTranslation } from '@/shared/lib/hooks'
import { LinkTo, Typography, getRootLayout } from '@/shared/ui'

import s from './TermsOfService.module.scss'

const TermsOfServicePage = () => {
  const {
    text: {
      pages: { termsOfService },
    },
  } = useTranslation()

  return (
    <div className={s.root}>
      <LinkTo className={s.link} href={ROUTES_URL.SIGN_UP}>
        {termsOfService.backTo}
      </LinkTo>
      <Typography as={'h1'} className={s.title} variant={'h1'}>
        {termsOfService.title}
      </Typography>
      <Typography className={s.text} variant={'regularText14'}>
        {termsOfService.description}
      </Typography>
    </div>
  )
}

TermsOfServicePage.getLayout = getRootLayout
export default TermsOfServicePage
