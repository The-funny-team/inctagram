import { ROUTES_URL } from '@/shared/const'
import { getRootLayout } from '@/shared/layouts'
import { useTranslation } from '@/shared/lib/hooks'
import { HeadMeta, LinkTo, Typography } from '@/shared/ui'

import s from './TermsOfService.module.scss'

const TermsOfServicePage = () => {
  const {
    text: {
      pages: { termsOfService },
    },
  } = useTranslation()

  return (
    <>
      <HeadMeta title={'Terms of Service'} />
      <main className={s.root}>
        <LinkTo className={s.link} href={ROUTES_URL.SIGN_UP}>
          {termsOfService.backTo}
        </LinkTo>
        <Typography as={'h1'} className={s.title} variant={'h1'}>
          {termsOfService.title}
        </Typography>
        <Typography className={s.text} variant={'regularText14'}>
          {termsOfService.description}
        </Typography>
      </main>
    </>
  )
}

TermsOfServicePage.getLayout = getRootLayout
export default TermsOfServicePage
