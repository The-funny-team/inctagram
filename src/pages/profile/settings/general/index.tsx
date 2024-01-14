import { getTabsLayout } from '@/shared/ui/TabsLayout'
import { AddProfilePhoto } from '@/widgets/AddProfilePhoto'

const GeneralPage = () => (
  <div>
    <p>General Info Page</p>
    <AddProfilePhoto />
  </div>
)

GeneralPage.getLayout = getTabsLayout
export default GeneralPage
