import { getRootLayout } from '@/shared/layouts'
import { HeadMeta } from '@/shared/ui'
import { SignUp } from '@/widgets/SignUp'

const SignUpPage = () => {
  return (
    <>
      <HeadMeta title={'Sign Up'} />
      <main style={{ display: 'flex', justifyContent: 'center', paddingTop: '24px' }}>
        <SignUp />
      </main>
    </>
  )
}

SignUpPage.getLayout = getRootLayout
export default SignUpPage
