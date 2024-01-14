import { getTabsLayout } from '@/shared/ui/TabsLayout'

import s from './GeneralPage.module.scss'
const GeneralPage = () => {
  const classNames = {
    page: s.page,
    photoUploader: s.photoUploader,
  }

  return (
    <main className={classNames.page}>
      <div className={s.photoUploader}></div>
      <div></div>
    </main>
  )
}

GeneralPage.getLayout = getTabsLayout
export default GeneralPage
