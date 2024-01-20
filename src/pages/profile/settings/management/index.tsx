import { HeadMeta } from '@/shared/ui/HeadMeta'
import { getTabsLayout } from '@/shared/ui/TabsLayout'

const ManagementPage = () => {
  return (
    <>
      <HeadMeta title={'Account Management'} />
      <p>Management Page</p>
    </>
  )
}

ManagementPage.getLayout = getTabsLayout
export default ManagementPage
