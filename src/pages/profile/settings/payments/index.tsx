import { HeadMeta } from '@/shared/ui/HeadMeta'
import { getTabsLayout } from '@/shared/ui/TabsLayout'

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
