import { UIRootLayout } from '@/shared/ui/layouts/ui-root-layout'
import { UIHeader } from '@/shared/ui/ui-header/ui-header'

export default function SignIn() {
  return <UIRootLayout content={<h1>Sign in page</h1>} header={<UIHeader />}></UIRootLayout>
}
