import { getProtectedNavbarLayout } from '@/shared/ui'
import { HeadMeta } from '@/shared/ui/HeadMeta'

const ProfilePage = () => {
  return (
    <>
      <HeadMeta title={'Profile'} />
      <h1>Profile Page</h1>
    </>
  )
}

ProfilePage.getLayout = getProtectedNavbarLayout
export default ProfilePage
