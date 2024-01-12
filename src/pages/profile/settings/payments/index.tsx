import { ProtectedPage } from '@/hoc/ProtectedPage'
import { getTabsLayout } from '@/shared/ui/TabsLayout'

const PaymentsPage = () => (
  <ProtectedPage>
    <p>Payments Page</p>
  </ProtectedPage>
)

PaymentsPage.getLayout = getTabsLayout
export default PaymentsPage
