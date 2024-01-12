import { ProtectedPage } from '@/hoc/ProtectedPage'
import { getTabsLayout } from '@/shared/ui/TabsLayout'

const ManagementPage = () => (
  <ProtectedPage>
    <p>Management Page</p>
  </ProtectedPage>
)

ManagementPage.getLayout = getTabsLayout
export default ManagementPage
