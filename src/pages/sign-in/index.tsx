import { getRootLayout } from '@/shared/ui'
import { HeadMeta } from '@/shared/ui/HeadMeta'
import { SignIn } from '@/widgets/SignIn'

import s from './SignInPage.module.scss'

const SignInPage = () => (
  <>
    <HeadMeta title={'Sign In'} />
    <div className={s.root}>
      <SignIn />
    </div>
  </>
)

SignInPage.getLayout = getRootLayout
export default SignInPage
