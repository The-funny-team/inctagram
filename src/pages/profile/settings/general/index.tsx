import { ProtectedPage } from '@/hoc/ProtectedPage'
import { getTabsLayout } from '@/shared/ui/TabsLayout'

const GeneralPage = () => (
  <ProtectedPage>
    <p>General Info Page</p>
  </ProtectedPage>
)

GeneralPage.getLayout = getTabsLayout
export default GeneralPage
