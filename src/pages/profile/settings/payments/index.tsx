import { ProtectedPage } from '@/shared/ui/ProtectedPage'
import { getTabsLayout } from '@/shared/ui/TabsLayout'

const PaymentsPage = () => {
  return (
    <ProtectedPage>
      <p>Payments Page</p>
    </ProtectedPage>
  )
}

PaymentsPage.getLayout = getTabsLayout
export default PaymentsPage
