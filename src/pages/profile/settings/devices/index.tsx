import { ProtectedPage } from '@/shared/ui/ProtectedPage'
import { getTabsLayout } from '@/shared/ui/TabsLayout'

const DevicesPage = () => {
  return (
    <ProtectedPage>
      <p>Devices Page</p>
    </ProtectedPage>
  )
}

DevicesPage.getLayout = getTabsLayout
export default DevicesPage
