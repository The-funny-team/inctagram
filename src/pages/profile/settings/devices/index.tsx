import { HeadMeta } from '@/shared/ui/HeadMeta'
import { getTabsLayout } from '@/shared/ui/TabsLayout'

const DevicesPage = () => {
  return (
    <>
      <HeadMeta title={'Devices'} />
      <p>Devices Page</p>
    </>
  )
}

DevicesPage.getLayout = getTabsLayout
export default DevicesPage
