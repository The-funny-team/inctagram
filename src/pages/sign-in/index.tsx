import { getRootLayout } from '@/shared/layouts'
import { HeadMeta, RedirectToProfilePage } from '@/shared/ui'
import { SignIn } from '@/widgets/SignIn'

import s from './SignInPage.module.scss'

const SignInPage = () => (
  <>
    <HeadMeta title={'Sign In'} />
    <RedirectToProfilePage>
      <main className={s.root}>
        <SignIn />
      </main>
    </RedirectToProfilePage>
  </>
)

SignInPage.getLayout = getRootLayout
export default SignInPage
