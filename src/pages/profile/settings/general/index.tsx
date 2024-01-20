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
      <div>
        <p>General Info Page</p>
        <AddProfilePhoto avatar={avatar} />
      </div>
    </>
  )
}

GeneralPage.getLayout = getTabsLayout
export default GeneralPage
