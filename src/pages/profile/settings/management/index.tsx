import { getTabsLayout } from '@/shared/layouts'
import { HeadMeta } from '@/shared/ui'

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
