import { useMeQuery } from '@/shared/api/profileApi'
import { getTabsLayout } from '@/shared/layouts'
import { HeadMeta } from '@/shared/ui'
import { AddProfilePhoto } from '@/widgets/AddProfilePhoto'

const GeneralPage = () => {
  const { data: userInfo } = useMeQuery()

  const avatar = userInfo?.avatarUrl

  return (
    <>
      <HeadMeta title={'General'} />
      <main>
        <div style={{ paddingTop: '48px' }}>
          <AddProfilePhoto avatar={avatar} />
        </div>
      </main>
    </>
  )
}

GeneralPage.getLayout = getTabsLayout
export default GeneralPage
