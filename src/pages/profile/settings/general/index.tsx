import { useMeQuery } from '@/shared/api/profileApi'
import { getTabsLayout } from '@/shared/ui/TabsLayout'
import { AddProfilePhoto } from '@/widgets/AddProfilePhoto'
import { ProfileInfoForm } from '@/widgets/ProfileInfoForm'

import s from './GeneralPage.module.scss'

const GeneralPage = () => {
  const { data: userInfo } = useMeQuery()
  const avatar = userInfo?.avatarUrl
  const classNames = {
    page: s.page,
    photoUploader: s.photoUploader,
  }

  return (
    <main className={classNames.page}>
      <AddProfilePhoto avatar={avatar} />
      <ProfileInfoForm />
    </main>
  )
}

GeneralPage.getLayout = getTabsLayout
export default GeneralPage
