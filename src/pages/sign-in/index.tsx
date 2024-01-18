import { getRootLayout } from '@/shared/ui'
import { PublicPage } from '@/shared/ui/PublicPage'
import { SignIn } from '@/widgets/SignIn'

import s from './SignInPage.module.scss'

const SignInPage = () => (
  <PublicPage>
    <div className={s.root}>
      <SignIn />
    </div>
  </PublicPage>
)

SignInPage.getLayout = getRootLayout
export default SignInPage
