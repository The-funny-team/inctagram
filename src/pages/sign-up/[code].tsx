import { getRootLayout } from '@/shared/ui'
import { EmailVerification } from '@/widgets/EmailVerification'

const EmailVerificationPage = () => {
  return <EmailVerification />
}

EmailVerificationPage.getLayout = getRootLayout
export default EmailVerificationPage
