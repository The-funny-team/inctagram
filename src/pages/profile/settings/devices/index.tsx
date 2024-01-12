import { ProtectedPage } from '@/hoc/ProtectedPage'
import { getTabsLayout } from '@/shared/ui/TabsLayout'

const DevicesPage = () => (
  <ProtectedPage>
    <p>Devices Page</p>
  </ProtectedPage>
)

DevicesPage.getLayout = getTabsLayout
export default DevicesPage
