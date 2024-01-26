import { getRootLayout } from '@/shared/layouts'
import { HeadMeta, RedirectToProfilePage } from '@/shared/ui'
import { SignUp } from '@/widgets/SignUp'

const SignUpPage = () => {
  return (
    <>
      <HeadMeta title={'Sign Up'} />
      <RedirectToProfilePage>
        <main style={{ display: 'flex', justifyContent: 'center', paddingTop: '24px' }}>
          <SignUp />
        </main>
      </RedirectToProfilePage>
    </>
  )
}

SignUpPage.getLayout = getRootLayout
export default SignUpPage
