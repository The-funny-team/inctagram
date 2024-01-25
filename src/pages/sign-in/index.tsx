import { getRootLayout } from '@/shared/layouts'
import { HeadMeta } from '@/shared/ui'
import { SignIn } from '@/widgets/SignIn'

import s from './SignInPage.module.scss'

const SignInPage = () => (
  <>
    <HeadMeta title={'Sign In'} />
    <main className={s.root}>
      <SignIn />
    </main>
  </>
)

SignInPage.getLayout = getRootLayout
export default SignInPage
