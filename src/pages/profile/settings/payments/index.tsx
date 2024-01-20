import { getTabsLayout } from '@/shared/layouts'
import { HeadMeta } from '@/shared/ui'

const PaymentsPage = () => {
  return (
    <>
      <HeadMeta title={'Payments'} />
      <p>Payments Page</p>
    </>
  )
}

PaymentsPage.getLayout = getTabsLayout
export default PaymentsPage
