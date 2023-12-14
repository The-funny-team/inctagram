import { getRootLayout } from '@/shared/ui'
import { ForgotPassword } from '@/widgets/ForgotPassword'

import s from './ForgotPasswordPage.module.scss'

const ForgotPasswordPage = () => {
  return (
    <div className={s.root}>
      <ForgotPassword />
    </div>
  )
}

ForgotPasswordPage.getLayout = getRootLayout
export default ForgotPasswordPage
