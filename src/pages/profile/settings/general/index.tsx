import { ProtectedPage } from '@/shared/ui/ProtectedPage'
import { getTabsLayout } from '@/shared/ui/TabsLayout'

const GeneralPage = () => {
  return (
    <ProtectedPage>
      <p>General Info Page</p>
    </ProtectedPage>
  )
}

GeneralPage.getLayout = getTabsLayout
export default GeneralPage
