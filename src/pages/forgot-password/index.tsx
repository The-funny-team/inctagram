import { getRootLayout } from '@/shared/ui'
import { PublicPage } from '@/shared/ui/PublicPage'
import { ForgotPassword } from '@/widgets/ForgotPassword'

import s from './ForgotPasswordPage.module.scss'

const ForgotPasswordPage = () => {
  return (
    <PublicPage>
      <div className={s.root}>
        <ForgotPassword />
      </div>
    </PublicPage>
  )
}

ForgotPasswordPage.getLayout = getRootLayout
export default ForgotPasswordPage
