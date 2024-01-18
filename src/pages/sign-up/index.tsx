import { getRootLayout } from '@/shared/ui'
import { PublicPage } from '@/shared/ui/PublicPage'
import { SignUp } from '@/widgets/SignUp'

const SignUpPage = () => {
  return (
    <PublicPage>
      <div style={{ padding: '36px 10px 0' }}>
        <SignUp />
      </div>
    </PublicPage>
  )
}

SignUpPage.getLayout = getRootLayout
export default SignUpPage
