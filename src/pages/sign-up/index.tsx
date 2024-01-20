import { getRootLayout } from '@/shared/ui'
import { HeadMeta } from '@/shared/ui/HeadMeta'
import { SignUp } from '@/widgets/SignUp'

const SignUpPage = () => {
  return (
    <>
      <HeadMeta title={'Sign Up'} />
      <div style={{ padding: '36px 10px 0' }}>
        <SignUp />
      </div>
    </>
  )
}

SignUpPage.getLayout = getRootLayout
export default SignUpPage
