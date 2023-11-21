import { SignUpForm } from '@/features/auth/ui/sign-up-form'
import { UIRootLayout } from '@/shared/ui/layouts/ui-root-layout'
import { UIHeader } from '@/shared/ui/ui-header/ui-header'

export default function SignUp() {
  return <UIRootLayout content={<SignUpForm />} header={<UIHeader />}></UIRootLayout>
}
