import { getRootLayout } from '@/shared/ui'
import { SignIn } from '@/widgets/SignIn'

import s from './SignInPage.module.scss'

const SignInPage = () => (
  <div className={s.root}>
    <SignIn />
  </div>
)

SignInPage.getLayout = getRootLayout
export default SignInPage
