import { getTabsLayout } from '@/shared/layouts'
import { HeadMeta } from '@/shared/ui'

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
