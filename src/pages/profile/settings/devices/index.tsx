import { getTabsLayout } from '@/shared/layouts'
import { HeadMeta } from '@/shared/ui'

const DevicesPage = () => {
  return (
    <>
      <HeadMeta title={'Devices'} />
      <main>Devices Page</main>
    </>
  )
}

DevicesPage.getLayout = getTabsLayout
export default DevicesPage
