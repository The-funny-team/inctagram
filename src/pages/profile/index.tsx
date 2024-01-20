import { getProtectedNavbarLayout } from '@/shared/layouts'
import { HeadMeta } from '@/shared/ui'

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
