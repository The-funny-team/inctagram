import { useMeQuery } from '@/shared/api/profileApi'
import { getTabsLayout } from '@/shared/layouts'
import { HeadMeta } from '@/shared/ui'
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
    <>
      <HeadMeta title={'General'} />
      <main className={classNames.page}>
        <div style={{ paddingTop: '48px' }}>
          <AddProfilePhoto avatar={avatar} />
          <ProfileInfoForm />
        </div>
      </main>
    </>
  )
}

GeneralPage.getLayout = getTabsLayout
export default GeneralPage
