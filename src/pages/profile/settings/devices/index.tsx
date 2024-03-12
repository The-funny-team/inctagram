import { getTabsLayout } from '@/shared/layouts'
import { HeadMeta } from '@/shared/ui'
import { Devices } from '@/widgets/Devices'

const DevicesPage = () => {
  return (
    <>
      <HeadMeta title={'Devices'} />
      <main>
        <Devices />
      </main>
    </>
  )
}

DevicesPage.getLayout = getTabsLayout
export default DevicesPage
