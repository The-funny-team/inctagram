import { getRootLayout } from '@/shared/ui'
import { SignUp } from '@/widgets/SignUp'

const SignUpPage = () => {
  return (
    <div style={{ padding: '36px 10px 0' }}>
      <SignUp />
    </div>
  )
}

SignUpPage.getLayout = getRootLayout
export default SignUpPage
