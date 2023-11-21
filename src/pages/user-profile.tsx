import { UIRootLayout } from '@/shared/ui/layouts/ui-root-layout'
import { UIHeader } from '@/shared/ui/ui-header/ui-header'

export default function UserProfile() {
  return <UIRootLayout content={<h1>UserProfile</h1>} header={<UIHeader />}></UIRootLayout>
}
