import { ProtectedPage } from '@/shared/ui/ProtectedPage'
import { getTabsLayout } from '@/shared/ui/TabsLayout'

const ManagementPage = () => {
  return (
    <ProtectedPage>
      <p>Management Page</p>
    </ProtectedPage>
  )
}

ManagementPage.getLayout = getTabsLayout
export default ManagementPage
