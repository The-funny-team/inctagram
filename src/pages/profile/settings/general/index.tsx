import { useMeQuery } from '@/shared/api/profileApi'
import { HeadMeta } from '@/shared/ui/HeadMeta'
import { getTabsLayout } from '@/shared/ui/TabsLayout'
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
