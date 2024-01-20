import { getRootLayout } from '@/shared/ui'
import { HeadMeta } from '@/shared/ui/HeadMeta'
import { ForgotPassword } from '@/widgets/ForgotPassword'

import s from './ForgotPasswordPage.module.scss'

const ForgotPasswordPage = () => {
  return (
    <>
      <HeadMeta title={'Forgot Password'} />
      <div className={s.root}>
        <ForgotPassword />
      </div>
    </>
  )
}

ForgotPasswordPage.getLayout = getRootLayout
export default ForgotPasswordPage
