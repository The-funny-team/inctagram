import { getRootLayout } from '@/shared/layouts'
import { HeadMeta } from '@/shared/ui'
import { ForgotPassword } from '@/widgets/ForgotPassword'

import s from './ForgotPasswordPage.module.scss'

const ForgotPasswordPage = () => {
  return (
    <>
      <HeadMeta title={'Forgot Password'} />
      <main className={s.root}>
        <ForgotPassword />
      </main>
    </>
  )
}

ForgotPasswordPage.getLayout = getRootLayout
export default ForgotPasswordPage
